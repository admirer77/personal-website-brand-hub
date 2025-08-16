import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-elegant border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="text-2xl font-bold text-orange-400 dark:text-orange-400">
              Admirer
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-foreground hover:text-orange-400 transition-colors duration-200 font-medium relative group"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA and Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="hero" size="sm" className="shadow-glow">
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </div>

          {/* Mobile & Tablet Menu Button and Theme Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground hover:text-orange-400 transition-all duration-300 hover:bg-primary/10 rounded-lg hover:scale-105"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-4 right-4 bg-background/95 backdrop-blur-md border border-border shadow-elegant animate-fade-in rounded-xl mx-2">
            <div className="container mx-auto px-6 py-8">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="text-foreground hover:text-orange-400 transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-primary/10 hover:scale-105 transform animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-border/50 animate-fade-in" style={{ animationDelay: '0.7s' }}>
                  <Button variant="hero" size="default" className="w-full shadow-glow hover:scale-105 transition-transform">
                    <Download className="h-4 w-4" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;