import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Github, Linkedin, Download, ExternalLink } from "lucide-react";
import FloatingLogos from "./FloatingLogos";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      <FloatingLogos section="hero" />
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-glow/10 to-accent-glow/10"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-primary-glow/30 rounded-full animate-pulse-glow"></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-accent/25 rounded-full animate-bounce-in" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-14 h-14 bg-primary/15 animate-morphing" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left animate-slide-in-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              <span className="animate-bounce-in block">Nehanth</span>
              <span className="block text-foreground animate-stagger-1">
                Gaddam
              </span>
              <span className="block text-2xl lg:text-3xl text-orange-400 dark:text-orange-400 mt-2 animate-stagger-2">
                "Admirer"
              </span>
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-foreground mb-4 font-medium animate-stagger-3">
              Computer Science & Engineering (Data Science)
            </h2>
            
            <p className="text-lg text-muted-foreground mb-2 animate-stagger-4">
              Data Analyst | Aeronautical Engineering Enthusiast
            </p>
            
            <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-8 animate-stagger-5">
              <MapPin className="h-4 w-4" />
              <span>Hyderabad, India</span>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 animate-stagger-6">
              <Button variant="hero" size="lg" className="shadow-glow hover:scale-105 transition-transform hover:animate-rubber-band">
                <Download className="h-4 w-4" />
                Download CV
              </Button>
              <Button variant="outline" size="lg" className="hover:scale-105 transition-transform hover:animate-tada">
                <ExternalLink className="h-4 w-4" />
                View Projects
              </Button>
            </div>

            {/* Contact info quick access */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up" style={{animationDelay: '0.7s'}}>
              <a href="tel:+917731020885" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 77310 20885</span>
              </a>
              <a href="mailto:nehanthalminer@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform">
                <Mail className="h-4 w-4" />
                <span className="text-sm">nehanthalminer@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right side - Profile card */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <Card className="p-8 max-w-md w-full bg-card/90 backdrop-blur-md border shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent to-primary p-1 animate-rotate-slow">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-4xl font-bold text-primary animate-pulse-glow">
                    A
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  Connect with me
                </h3>
                
                <div className="flex justify-center gap-4 mb-6">
                  <a 
                    href="https://linkedin.com/in/nehanth77" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-elegant"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://github.com/adsirce77" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-elegant"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>

                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <span>Current CGPA:</span>
                    <span className="font-semibold text-primary">9.26</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Projects:</span>
                    <span className="font-semibold text-primary">4+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>LeetCode:</span>
                    <span className="font-semibold text-primary">100+ problems</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;