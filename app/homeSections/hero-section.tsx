import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Code, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-primary/5 py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-sans">
            Connect. <span className="text-primary">Code.</span> Create.
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-serif leading-relaxed">
            Join the ultimate platform for developers to connect, collaborate, and build amazing projects together.
            Where code meets community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-serif text-lg px-8 py-4 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
            >
              Start Building
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="font-serif text-lg px-8 py-4 bg-transparent border-2 hover:bg-primary/10 transition-all duration-200 hover:scale-105"
            >
              <Users className="mr-2 h-5 w-5" />
              Explore Community
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-card/70 transition-all duration-200 hover:scale-105">
              <Code className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2 font-sans">Code Together</h3>
              <p className="text-muted-foreground font-serif">Real-time collaboration tools for seamless development</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-card/70 transition-all duration-200 hover:scale-105">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2 font-sans">Build Network</h3>
              <p className="text-muted-foreground font-serif">Connect with developers worldwide and grow together</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-card/70 transition-all duration-200 hover:scale-105">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2 font-sans">Ship Faster</h3>
              <p className="text-muted-foreground font-serif">
                Powerful tools and integrations to accelerate development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
