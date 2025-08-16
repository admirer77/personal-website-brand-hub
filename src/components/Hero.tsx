import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Github, Linkedin, Download, ExternalLink } from "lucide-react";
import FloatingLogos from "./FloatingLogos";
import HeroParticles from "./HeroParticles";
import heroBackgroundImg from "@/assets/hero-background.webp";
import profileGhibliImg from "@/assets/profile-ghibli.webp";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Live Animated Wallpaper Background */}
      <div className="absolute inset-0">
        {/* Dynamic moving gradient backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-purple-500/20 to-blue-500/20 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/15 via-green-500/15 to-yellow-500/15 animate-gradient-y"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-red-500/10 to-orange-500/10 animate-pulse"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full animate-float blur-xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-accent/40 to-primary-glow/40 rounded-lg rotate-45 animate-spin-slow blur-lg"></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 bg-gradient-to-br from-primary-glow/35 to-accent-glow/35 rounded-full animate-bounce blur-md"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-accent-glow/30 to-primary/30 rounded-lg rotate-12 animate-pulse blur-lg"></div>
        
        {/* Animated particles */}
        <div className="absolute top-10 left-1/4 w-3 h-3 bg-primary rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-accent rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-primary-glow rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-accent-glow rounded-full animate-ping delay-700"></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-primary rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 right-1/6 w-3 h-3 bg-accent rounded-full animate-bounce delay-1200"></div>
        
        {/* Flowing lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-slide-in-right"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent animate-slide-in-left delay-500"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-glow/50 to-transparent animate-slide-in-right delay-1000"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-glow/40 to-transparent animate-slide-in-left delay-1500"></div>
        
        {/* Overlay to blend everything */}
        <div className="absolute inset-0 bg-gradient-hero/85"></div>
      </div>
      
      <HeroParticles />
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
      
      <div className="container mx-auto px-4 sm:px-6 z-10 pt-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left animate-slide-in-left order-1 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              <span className="animate-bounce-in block">Nehanth</span>
              <span className="block text-foreground animate-stagger-1">
                Gaddam
              </span>
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl text-orange-400 dark:text-orange-400 mt-2 animate-stagger-2">
                "Admirer"
              </span>
            </h1>
            
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground mb-4 font-medium animate-stagger-3">
              Computer Science & Engineering (Data Science)
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-2 animate-stagger-4">
              Data Analyst | Aeronautical Engineering Enthusiast
            </p>
            
            <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-6 sm:mb-8 animate-stagger-5">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <span className="text-sm sm:text-base">Hyderabad, India</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8 animate-stagger-6">
              <Button variant="hero" size="default" className="shadow-glow hover:scale-105 transition-transform hover:animate-rubber-band w-full sm:w-auto text-sm">
                <Download className="h-4 w-4" />
                Download CV
              </Button>
              <Button variant="outline" size="default" className="hover:scale-105 transition-transform hover:animate-tada w-full sm:w-auto text-sm">
                <ExternalLink className="h-4 w-4" />
                View Projects
              </Button>
            </div>

            {/* Contact info quick access */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-in-up" style={{animationDelay: '0.7s'}}>
              <a href="tel:+917731020885" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform justify-center lg:justify-start">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">+91 77310 20885</span>
              </a>
              <a href="mailto:nehanthadmirer@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform justify-center lg:justify-start">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">nehanthadmirer@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right side - Profile card */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right order-2 lg:order-2">
            <Card className="p-4 sm:p-6 lg:p-8 max-w-xs sm:max-w-sm lg:max-w-md w-full bg-card/90 backdrop-blur-md border shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105">
              <div className="text-center">
                <div className="w-24 h-24 sm:w-28 h-28 lg:w-32 lg:h-32 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-accent to-primary p-1 animate-rotate-slow">
                  <img 
                    src={profileGhibliImg} 
                    alt="Nehanth Gaddam - Ghibli Style Portrait"
                    className="w-full h-full rounded-full object-cover animate-float"
                  />
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-4">
                  Connect with me
                </h3>
                
                <div className="flex justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <a 
                    href="https://linkedin.com/in/nehanth77" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-elegant"
                  >
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a 
                    href="https://github.com/admirer77" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-elegant"
                  >
                    <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </div>

                <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <span>Current CGPA:</span>
                    <span className="font-semibold text-primary">8.23</span>
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