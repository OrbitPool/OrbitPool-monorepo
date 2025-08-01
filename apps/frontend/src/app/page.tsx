import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Shield,
  TrendingUp,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Sparkles,
  Zap,
  Lock,
  DollarSign,
  Heart,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Header con efectos glass */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/50 dark:border-slate-800/50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg shadow-violet-500/25 animate-pulse" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
             OrbitPool
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#features"
              className="text-sm font-medium text-white hover:text-violet-400 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-white hover:text-violet-400 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#security"
              className="text-sm font-medium text-white hover:text-violet-400 transition-colors"
            >
              Security
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              asChild
              className="hover:bg-violet-50 dark:hover:bg-violet-950/20 hover:text-violet-600 text-white"
            >
              <Link href="/auth/login">Sign In</Link>
            </Button>
            <Button
              asChild
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300"
            >
              <Link href="/auth/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section mejorada */}
      <section className="py-20 px-4 text-center relative overflow-hidden bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 dark:from-slate-950 dark:via-violet-950/20 dark:to-fuchsia-950/20">
        {/* Partículas flotantes */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-20 left-10 w-4 h-4 bg-violet-500 rounded-full opacity-20 animate-bounce"
            style={{ animationDelay: "0s", animationDuration: "3s" }}
          />
          <div
            className="absolute top-32 right-20 w-3 h-3 bg-purple-500 rounded-full opacity-20 animate-bounce"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          />
          <div
            className="absolute bottom-32 left-20 w-2 h-2 bg-fuchsia-500 rounded-full opacity-20 animate-bounce"
            style={{ animationDelay: "2s", animationDuration: "5s" }}
          />
          <div
            className="absolute bottom-20 right-10 w-5 h-5 bg-violet-400 rounded-full opacity-20 animate-bounce"
            style={{ animationDelay: "3s", animationDuration: "6s" }}
          />
        </div>

        <div className="container max-w-4xl mx-auto relative z-10">
          <Badge
            variant="secondary"
            className="mb-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-violet-200 dark:border-violet-800 animate-fade-in"
          >
            <Sparkles className="w-4 h-4 mr-2 text-violet-600" />
            Powered by Stellar Blockchain
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent animate-fade-in-up">
            Save Together, Grow Together
          </h1>

          <p
            className="text-xl text-white mb-8 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Create digital savings groups with friends, family, and communities.
            Earn yields through DeFi protocols while maintaining complete
            transparency and security.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105 transition-all duration-300"
            >
              <Link href="/auth/register" className="flex items-center">
                Create Your Group
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="backdrop-blur-sm bg-white/10 border-violet-200 dark:border-violet-800 hover:bg-white/20 text-white hover:text-white hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300"
            >
              <Link href="#how-it-works">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section mejorada */}
      <section id="features" className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              Why Choose OrbitPool?
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Discover the features that make our community savings platform unique
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white to-violet-50/30 dark:from-slate-900 dark:to-violet-950/30">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-violet-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Group Savings
                </h3>
                <p className="text-slate-300">
                  Create or join savings groups with invitation codes.
                  Perfect for families, friends, and communities.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white to-emerald-50/30 dark:from-slate-900 dark:to-emerald-950/30">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Automatic Yields
                </h3>
                <p className="text-slate-300">
                  Your group funds earn yields automatically through
                  the Blend Protocol on the Stellar network.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white to-cyan-50/30 dark:from-slate-900 dark:to-cyan-950/30">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Transparent and Secure
                </h3>
                <p className="text-slate-300">
                  All transactions are recorded on the blockchain. No
                  hidden fees, complete transparency.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white to-orange-50/30 dark:from-slate-900 dark:to-orange-950/30">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-orange-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Global Access
                </h3>
                <p className="text-slate-300">
                  Available worldwide with support for multiple currencies
                  and languages.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white to-pink-50/30 dark:from-slate-900 dark:to-pink-950/30">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-fuchsia-500 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-pink-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Easy to Use
                </h3>
                <p className="text-slate-300">
                  Simple interface designed for everyone, from beginners to
                  crypto experts.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl hover:shadow-rose-500/10 transition-all duration-300 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white to-rose-50/30 dark:from-slate-900 dark:to-rose-950/30">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-rose-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Community Focus
                </h3>
                <p className="text-slate-300">
                  Built for real communities in Latin America and beyond.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works Section mejorada */}
      <section
        id="how-it-works"
        className="py-20 px-4 bg-slate-50 dark:bg-slate-950"
      >
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-lg text-white">
              Three simple steps to start your community savings journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center text-2xl font-bold mx-auto mb-6 text-white shadow-lg shadow-violet-500/25 group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Create or Join
              </h3>
              <p className="text-slate-300">
                Create a new savings group or join an existing one with an
                invitation code.
              </p>
            </div>

            <div className="text-center group">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center text-2xl font-bold mx-auto mb-6 text-white shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Contribute Funds
              </h3>
              <p className="text-slate-300">
                Connect your Stellar wallet and contribute USDC to your
                group's shared fund.
              </p>
            </div>

            <div className="text-center group">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-600 flex items-center justify-center text-2xl font-bold mx-auto mb-6 text-white shadow-lg shadow-fuchsia-500/25 group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Earn and Grow
              </h3>
              <p className="text-slate-300">
                Watch your collective savings grow with automatic yields
                from DeFi protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section mejorada */}
      <section id="security" className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              Built for Security
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Your funds are protected by industry-leading security practices
              and blockchain technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white to-amber-50/30 dark:from-slate-900 dark:to-amber-950/30">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-amber-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Multi-signature Wallets
                </h3>
                <p className="text-slate-300">
                  Group funds are held in Stellar multi-signature accounts
                  that require multiple approvals for withdrawals.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white to-emerald-50/30 dark:from-slate-900 dark:to-emerald-950/30">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Blockchain Transparency
                </h3>
                <p className="text-slate-300">
                  All transactions are recorded on the Stellar blockchain,
                  providing complete transparency and auditability.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white to-violet-50/30 dark:from-slate-900 dark:to-violet-950/30">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-violet-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Audited Protocols
                </h3>
                <p className="text-slate-300">
                  We use only audited and time-tested DeFi protocols
                  to generate yields.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white to-cyan-50/30 dark:from-slate-900 dark:to-cyan-950/30">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/25 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Non-Custodial
                </h3>
                <p className="text-slate-300">
                  We never have custody of your funds. You maintain total
                  control of your assets at all times.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section mejorada */}
      <section className="py-20 px-4 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">
            Ready to Start Saving Together?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of people who already use OrbitPool to achieve
            their financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-violet-600 hover:bg-slate-100 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Link href="/auth/register" className="flex items-center">
                Start Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 hover:border-white/80 backdrop-blur-sm transition-all duration-300 bg-transparent"
            >
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer mejorado */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-12 px-4 bg-white dark:bg-slate-900">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg shadow-violet-500/25" />
                <h3 className="font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                OrbitPool
                </h3>
              </div>
              <p className="text-sm text-white">
                Democratizing savings and investment for communities around
                the world.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link
                    href="#features"
                    className="hover:text-violet-400 transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#security"
                    className="hover:text-violet-400 transition-colors"
                  >
                    Security
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs"
                    className="hover:text-violet-400 transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link
                    href="/help"
                    className="hover:text-violet-400 transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-violet-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community"
                    className="hover:text-violet-400 transition-colors"
                  >
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-violet-400 transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-violet-400 transition-colors"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies"
                    className="hover:text-violet-400 transition-colors"
                  >
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-300">
            <p>&copy; 2024 OrbitPool. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
