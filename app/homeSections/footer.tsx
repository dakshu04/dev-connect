import { Facebook, Twitter, Linkedin, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-sidebar border-t border-sidebar-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-sidebar-foreground mb-4 font-sans">StreamLine</h3>
            <p className="text-sidebar-foreground/80 mb-6 font-serif leading-relaxed">
              The ultimate productivity platform for modern teams. Streamline your workflow and achieve more together.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-sidebar-foreground/60 hover:text-sidebar-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-sidebar-foreground/60 hover:text-sidebar-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-sidebar-foreground/60 hover:text-sidebar-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-sidebar-foreground/60 hover:text-sidebar-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-lg font-semibold text-sidebar-foreground mb-4 font-sans">Product</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors font-serif"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors font-serif"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors font-serif"
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors font-serif"
                >
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-sidebar-foreground mb-4 font-sans">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors font-serif"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors font-serif"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors font-serif"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors font-serif"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sidebar-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sidebar-foreground/60 font-serif">© 2024 StreamLine. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-sidebar-foreground/60 hover:text-sidebar-primary transition-colors font-serif">
              Privacy Policy
            </a>
            <a href="#" className="text-sidebar-foreground/60 hover:text-sidebar-primary transition-colors font-serif">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
