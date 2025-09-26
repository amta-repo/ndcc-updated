import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail, Globe } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("FR");
  const location = useLocation();

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "À Propos", href: "/about" },
    { label: "Galerie", href: "/gallery" },
    { label: "Clients", href: "/clients" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  const toggleLanguage = () => {
    setLanguage(prev => prev === "FR" ? "EN" : "FR");
  };

  return (
    <header className="bg-primary shadow-elegant sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary-dark text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+229 97 26 01 88</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@ndcconseils.bj</span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-primary-foreground hover:bg-primary/20"
            >
              <Globe className="h-4 w-4 mr-2" />
              {language}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center shadow-glow">
              <span className="text-2xl font-bold text-accent-foreground">NDC</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary-foreground">
                NDC CONSEILS
              </h1>
              <p className="text-sm text-primary-foreground/80">Bureau d'Études</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-accent border-b-2 border-accent"
                    : "text-primary-foreground hover:text-accent"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="secondary" className="hover-lift">
              Consultation Gratuite
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm" className="text-primary-foreground">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium p-3 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button className="mt-4 bg-gradient-secondary">
                  Consultation Gratuite
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navigation;