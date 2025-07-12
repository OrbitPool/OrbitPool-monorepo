import { ContractService } from './contract';
import { WalletConnection } from './stellar';

export interface GroupSettings {
  minContribution: number;
  maxContribution: number;
  withdrawalRequiresApproval: boolean;
  maxMembers: number;
  autoInvestEnabled: boolean;
}

export interface GroupData {
  id: string;
  name: string;
  description?: string;
  creatorId: string;
  inviteCode: string;
  status: 'active' | 'paused' | 'closed';
  settings: GroupSettings;
  totalBalance: number;
  totalYield: number;
  memberCount: number;
  createdAt: string;
  isActive: boolean;
  blendPoolAddress?: string;
}

export interface GroupMember {
  id: string;
  address: string;
  fullName?: string;
  avatarUrl?: string;
  role: 'admin' | 'member';
  balance: number;
  totalContributed: number;
  yieldEarned: number;
  joinedAt: string;
  isAdmin: boolean;
}

export interface CreateGroupParams {
  name: string;
  description?: string;
  minContribution: number;
  maxContribution: number;
  maxMembers: number;
  autoInvestEnabled: boolean;
}

export interface ContributeParams {
  groupId: string;
  amount: number;
  tokenAddress: string;
}

export interface WithdrawParams {
  groupId: string;
  amount: number;
  tokenAddress: string;
}

export class GroupService {
  private static contractService = new ContractService();
  private static readonly DEFAULT_TOKEN_ADDRESS = 'CBIELTK6YBZJU5UP2WWQEUCYKLPU6AUNZ2BQ4WWFEIE3USCIHMXQDAMA'; // Mock USDC

  /**
   * Create a new group
   */
  static async createGroup(
    params: CreateGroupParams,
    walletConnection: WalletConnection
  ): Promise<string> {
    try {
      if (!walletConnection.isConnected) {
        throw new Error('Wallet not connected');
      }

      const walletKit = await this.contractService.getWalletConnection();
      const publicKey = await walletKit.getPublicKey();
      
      // Generate unique group ID
      const groupId = `group_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

      const txHash = await this.contractService.createGroup(
        {
          creator: publicKey.publicKey,
          groupId,
          name: params.name,
          autoInvestEnabled: params.autoInvestEnabled,
        },
        walletKit
      );

      console.log('Created group:', { groupId, txHash });
      return groupId;
    } catch (error) {
      console.error('Error creating group:', error);
      throw new Error('Failed to create group');
    }
  }

  /**
   * Join an existing group
   */
  static async joinGroup(
    groupId: string,
    walletConnection: WalletConnection
  ): Promise<string> {
    try {
      if (!walletConnection.isConnected) {
        throw new Error('Wallet not connected');
      }

      const walletKit = await this.contractService.getWalletConnection();
      const publicKey = await walletKit.getPublicKey();

      const txHash = await this.contractService.joinGroup(
        publicKey.publicKey,
        groupId,
        walletKit
      );

      console.log('Joined group:', { groupId, txHash });
      return txHash;
    } catch (error) {
      console.error('Error joining group:', error);
      throw new Error('Failed to join group');
    }
  }

  /**
   * Get group information
   */
  static async getGroup(groupId: string): Promise<GroupData | null> {
    try {
      const contractGroup = await this.contractService.getGroup(groupId);
      if (!contractGroup) {
        return null;
      }

      const memberCount = contractGroup.members.length;
      const totalBalance = ContractService.fromContractAmount(contractGroup.total_balance);
      const totalYield = ContractService.fromContractAmount(contractGroup.total_yield);

      // Mock data for fields not stored in contract
      const groupData: GroupData = {
        id: contractGroup.id,
        name: contractGroup.name,
        description: 'Group savings for common goals',
        creatorId: contractGroup.creator,
        inviteCode: this.generateInviteCode(contractGroup.id),
        status: contractGroup.is_active ? 'active' : 'closed',
        settings: {
          minContribution: 50,
          maxContribution: 1000,
          withdrawalRequiresApproval: true,
          maxMembers: 10,
          autoInvestEnabled: contractGroup.auto_invest_enabled,
        },
        totalBalance,
        totalYield,
        memberCount,
        createdAt: new Date().toISOString(), // This would come from contract events
        isActive: contractGroup.is_active,
        blendPoolAddress: contractGroup.blend_pool_address || undefined,
      };

      return groupData;
    } catch (error) {
      console.error('Error getting group:', error);
      return null;
    }
  }

  /**
   * Get user's groups
   */
  static async getUserGroups(
    userAddress: string
  ): Promise<GroupData[]> {
    try {
      const groupIds = await this.contractService.getUserGroups(userAddress);
      const groups: GroupData[] = [];

      for (const groupId of groupIds) {
        const group = await this.getGroup(groupId);
        if (group) {
          groups.push(group);
        }
      }

      return groups;
    } catch (error) {
      console.error('Error getting user groups:', error);
      return [];
    }
  }

  /**
   * Get group members
   */
  static async getGroupMembers(groupId: string): Promise<GroupMember[]> {
    try {
      const memberAddresses = await this.contractService.getGroupMembers(groupId);
      const contractGroup = await this.contractService.getGroup(groupId);
      
      if (!contractGroup) {
        return [];
      }

      const members: GroupMember[] = [];

      for (const memberAddress of memberAddresses) {
        const balance = await this.contractService.getMemberBalance(groupId, memberAddress);
        const isAdmin = await this.contractService.isGroupAdmin(groupId, memberAddress);
        
        const member: GroupMember = {
          id: memberAddress,
          address: memberAddress,
          fullName: this.getDisplayName(memberAddress),
          role: isAdmin ? 'admin' : 'member',
          balance: ContractService.fromContractAmount(balance),
          totalContributed: ContractService.fromContractAmount(balance), // Simplified
          yieldEarned: 0, // Would calculate from yield history
          joinedAt: new Date().toISOString(), // Would come from contract events
          isAdmin,
        };

        members.push(member);
      }

      return members;
    } catch (error) {
      console.error('Error getting group members:', error);
      return [];
    }
  }

  /**
   * Contribute to a group
   */
  static async contribute(
    params: ContributeParams,
    walletConnection: WalletConnection
  ): Promise<string> {
    try {
      if (!walletConnection.isConnected) {
        throw new Error('Wallet not connected');
      }

      const walletKit = await this.contractService.getWalletConnection();
      const publicKey = await walletKit.getPublicKey();
      const contractAmount = ContractService.toContractAmount(params.amount);

      const txHash = await this.contractService.contribute(
        {
          contributor: publicKey.publicKey,
          groupId: params.groupId,
          amount: contractAmount,
          tokenAddress: params.tokenAddress || this.DEFAULT_TOKEN_ADDRESS,
        },
        walletKit
      );

      console.log('Contributed to group:', { ...params, txHash });
      return txHash;
    } catch (error) {
      console.error('Error contributing to group:', error);
      throw new Error('Failed to contribute to group');
    }
  }

  /**
   * Withdraw from a group
   */
  static async withdraw(
    params: WithdrawParams,
    walletConnection: WalletConnection
  ): Promise<string> {
    try {
      if (!walletConnection.isConnected) {
        throw new Error('Wallet not connected');
      }

      const walletKit = await this.contractService.getWalletConnection();
      const publicKey = await walletKit.getPublicKey();
      const contractAmount = ContractService.toContractAmount(params.amount);

      const txHash = await this.contractService.withdraw(
        {
          member: publicKey.publicKey,
          groupId: params.groupId,
          amount: contractAmount,
          tokenAddress: params.tokenAddress || this.DEFAULT_TOKEN_ADDRESS,
        },
        walletKit
      );

      console.log('Withdrew from group:', { ...params, txHash });
      return txHash;
    } catch (error) {
      console.error('Error withdrawing from group:', error);
      throw new Error('Failed to withdraw from group');
    }
  }

  /**
   * Get group balance
   */
  static async getGroupBalance(groupId: string): Promise<number> {
    try {
      const balance = await this.contractService.getGroupBalance(groupId);
      return ContractService.fromContractAmount(balance);
    } catch (error) {
      console.error('Error getting group balance:', error);
      return 0;
    }
  }

  /**
   * Get member balance in a group
   */
  static async getMemberBalance(groupId: string, memberAddress: string): Promise<number> {
    try {
      const balance = await this.contractService.getMemberBalance(groupId, memberAddress);
      return ContractService.fromContractAmount(balance);
    } catch (error) {
      console.error('Error getting member balance:', error);
      return 0;
    }
  }

  /**
   * Check if user is group admin
   */
  static async isGroupAdmin(groupId: string, userAddress: string): Promise<boolean> {
    try {
      return await this.contractService.isGroupAdmin(groupId, userAddress);
    } catch (error) {
      console.error('Error checking admin status:', error);
      return false;
    }
  }

  /**
   * Get total group count
   */
  static async getTotalGroupCount(): Promise<number> {
    try {
      return await this.contractService.getGroupCount();
    } catch (error) {
      console.error('Error getting group count:', error);
      return 0;
    }
  }

  /**
   * Generate invite code from group ID
   */
  private static generateInviteCode(groupId: string): string {
    // Generate a 6-character invite code from group ID
    const hash = groupId.split('_').pop() || groupId;
    return hash.substring(0, 6).toUpperCase();
  }

  /**
   * Get display name for address
   */
  private static getDisplayName(address: string): string {
    // Mock display names - in production this would come from user profiles
    const names = [
      'John Doe',
      'Jane Smith',
      'Bob Johnson',
      'Alice Brown',
      'Mike Wilson',
      'Sarah Davis',
    ];
    
    const index = address.charCodeAt(0) % names.length;
    return names[index];
  }

  /**
   * Format address for display
   */
  static formatAddress(address: string): string {
    return ContractService.formatAddress(address);
  }

  /**
   * Validate address format
   */
  static isValidAddress(address: string): boolean {
    return ContractService.isValidAddress(address);
  }
}