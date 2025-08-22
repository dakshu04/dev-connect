import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content:
      "StreamLine has revolutionized how our team works. We've increased our productivity by 40% since implementing their workflow automation.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "StartupXYZ",
    content:
      "The collaboration features are incredible. Our remote team feels more connected than ever, and project delivery has never been smoother.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Director",
    company: "GrowthCo",
    content:
      "The analytics insights have been game-changing. We can now identify bottlenecks before they become problems and optimize our processes continuously.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-sans">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-serif">
            Join thousands of teams who have transformed their productivity with StreamLine.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border border-border">
              <CardContent className="p-6">
                {/* Rating Stars */}
                <div className="flex mb-4 ">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-amber-500"
                      fill="currentColor"
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-foreground mb-6 font-serif leading-relaxed">
                  “{testimonial.content}”
                </p>

                {/* Author Info */}
                <div>
                  <p className="font-semibold text-foreground font-sans">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground font-serif">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
