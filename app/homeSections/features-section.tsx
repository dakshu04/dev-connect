import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Users, BarChart3, Shield } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Automate repetitive tasks and streamline your processes with our intelligent workflow builder.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Bring your team together with real-time collaboration tools and seamless communication.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Get detailed insights into your productivity with comprehensive analytics and reporting.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Keep your data safe with enterprise-grade security and compliance features.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-sans">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-serif">
            Everything you need to boost productivity and streamline your workflow in one comprehensive platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground font-sans">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground font-serif leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
