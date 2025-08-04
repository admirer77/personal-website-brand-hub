import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare, ExternalLink } from "lucide-react";
import FloatingLogos from "./FloatingLogos";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 77310 20885",
      href: "tel:+917731020885",
      color: "text-primary"
    },
    {
      icon: Mail,
      label: "Email",
      value: "nehanthalminer@gmail.com",
      href: "mailto:nehanthalminer@gmail.com",
      color: "text-accent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: "#",
      color: "text-primary"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "nehanth77",
      href: "https://linkedin.com/in/nehanth77",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub", 
      username: "adsirce77",
      href: "https://github.com/adsirce77",
      color: "hover:text-gray-800"
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 bg-background relative">
      <FloatingLogos section="contact" />
      <div className="container mx-auto px-6 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get In <span className="bg-gradient-text bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Ready to collaborate on exciting projects or discuss opportunities? 
            I'd love to hear from you and explore how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div>
            <Card className="p-6 sm:p-8 shadow-elegant bg-gradient-card">
              <h3 className="text-2xl font-semibold text-foreground mb-8">
                Contact Information
              </h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-4 p-4 rounded-lg bg-card/50 hover:bg-card/80 transition-all duration-300 hover:shadow-card group"
                  >
                    <div className={`w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors`}>
                      <contact.icon className={`h-5 w-5 ${contact.color}`} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{contact.label}</p>
                      <p className="text-muted-foreground">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="border-t border-border pt-6 sm:pt-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
                <div className="flex flex-col sm:flex-row gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <Card className="p-4 shadow-card hover:shadow-elegant transition-all duration-300 bg-card/50 hover:bg-card/80">
                        <div className="flex items-center gap-3">
                          <social.icon className={`h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors`} />
                          <div>
                            <p className="font-medium text-foreground text-sm">{social.label}</p>
                            <p className="text-xs text-muted-foreground">{social.username}</p>
                          </div>
                        </div>
                      </Card>
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Connect */}
          <div>
            <Card className="p-6 sm:p-8 shadow-elegant bg-gradient-card">
              <h3 className="text-2xl font-semibold text-foreground mb-8">
                Let's Connect
              </h3>

              <div className="space-y-6">
                <Card className="p-6 shadow-card bg-card/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Project Collaboration</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Interested in working together on data science projects, machine learning 
                        solutions, or innovative tech ventures? Let's discuss your ideas!
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 shadow-card bg-card/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Send className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Career Opportunities</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Looking for talented data scientists or ML engineers? I'm open to 
                        internships, full-time positions, and freelance opportunities.
                      </p>
                    </div>
                  </div>
                </Card>

                <div className="pt-6">
                  <h4 className="font-semibold text-foreground mb-4">Quick Actions</h4>
                  <div className="flex flex-col gap-3">
                    <Button 
                      variant="hero" 
                      className="w-full shadow-glow"
                      onClick={() => window.open('mailto:nehanthalminer@gmail.com?subject=Let\'s Collaborate!')}
                    >
                      <Mail className="h-4 w-4" />
                      Send Email
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.open('tel:+917731020885')}
                    >
                      <Phone className="h-4 w-4" />
                      Call Now
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Collaboration Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 shadow-elegant bg-gradient-card max-w-2xl mx-auto animate-fade-in-up hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Interested in Collaboration?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm always excited to work on new projects and explore innovative solutions. 
              Let's connect and discuss how we can create something amazing together!
            </p>
            <Button variant="hero" size="lg" className="shadow-glow hover:scale-110 transition-transform">
              <ExternalLink className="h-4 w-4" />
              Get In Touch
            </Button>
          </Card>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <Card className="p-6 shadow-card bg-card/30 backdrop-blur-sm max-w-2xl mx-auto">
            <p className="text-muted-foreground">
              <strong className="text-primary">Response Time:</strong> I typically respond to emails 
              within 24 hours. For urgent matters, feel free to call directly.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;