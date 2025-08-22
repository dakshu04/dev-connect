import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6 font-sans">
          Ready to Streamline Your Workflow?
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-8 font-serif leading-relaxed">
          Join thousands of teams who have transformed their productivity. Start your free trial today and see the
          difference StreamLine can make.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" variant="secondary" className="font-serif text-lg px-8 py-3">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-serif text-lg px-8 py-3 bg-transparent"
          >
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
