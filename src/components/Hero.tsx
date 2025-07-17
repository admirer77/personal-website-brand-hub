import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Github, Linkedin, Download, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-glow/20 to-accent-glow/20"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Nehanth
              <span className="block bg-gradient-to-r from-accent-glow to-primary-glow bg-clip-text text-transparent">
                Gaddam
              </span>
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-primary-foreground/90 mb-4 font-medium">
              Computer Science & Engineering (Data Science)
            </h2>
            
            <p className="text-lg text-primary-foreground/80 mb-2">
              Data Analyst | Aeronautical Engineering Enthusiast
            </p>
            
            <div className="flex items-center justify-center lg:justify-start gap-2 text-primary-foreground/70 mb-8">
              <MapPin className="h-4 w-4" />
              <span>Hyderabad, India</span>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Button variant="hero" size="lg" className="shadow-glow">
                <Download className="h-4 w-4" />
                Download CV
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <ExternalLink className="h-4 w-4" />
                View Projects
              </Button>
            </div>

            {/* Contact info quick access */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="tel:+917731020885" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 77310 20885</span>
              </a>
              <a href="mailto:nehanthalminer@gmail.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4" />
                <span className="text-sm">nehanthalminer@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right side - Profile card */}
          <div className="flex justify-center lg:justify-end">
            <Card className="p-8 max-w-md w-full bg-card/10 backdrop-blur-md border-primary-foreground/20 shadow-elegant">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent to-primary p-1">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-4xl font-bold text-primary">
                    NG
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