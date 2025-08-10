import { Card } from "@/components/ui/card";
import { Target, User, Code2 } from "lucide-react";
import FloatingLogos from "./FloatingLogos";

// Import section images
import personalInfoImg from "@/assets/personal-info.webp";
import interestsImg from "@/assets/interests.webp";
import goalsPhilosophyImg from "@/assets/goals-philosophy.webp";

const About = () => {
  const personalInfo = [
    {
      label: "Full Name",
      value: "Nehanth Gaddam"
    },
    {
      label: "Nickname",
      value: "Admirer"
    },
    {
      label: "Location",
      value: "Hyderabad, India"
    },
    {
      label: "Field",
      value: "Data Science & ML Engineering"
    }
  ];

  const interests = [
    "Machine Learning & AI",
    "Cloud Computing & DevOps",
    "Data Analytics & Visualization",
    "Web Development",
    "Competitive Programming",
    "Aeronautical Engineering"
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-background relative">
      <FloatingLogos section="about" />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About <span className="bg-gradient-text bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Passionate Data Science student with expertise in machine learning, deep learning, 
            and cloud technologies. Currently pursuing B.Tech in Computer Science & Engineering 
            with specialization in Data Science.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Personal Information */}
          <div className="animate-slide-in-left">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center animate-bounce-in">
                <User className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Personal Info</h3>
            </div>

            <Card className="p-0 shadow-card hover:shadow-elegant transition-all duration-300 mb-8 hover:scale-105 overflow-hidden">
              {/* Personal Info Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={personalInfoImg} 
                  alt="Personal Information"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-lg font-semibold text-white">Profile Details</h4>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {personalInfo.map((info, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{info.label}:</span>
                      <span className="font-medium text-foreground">{info.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Interests */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Code2 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Interests</h3>
            </div>

            <Card className="p-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 overflow-hidden">
              {/* Interests Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={interestsImg} 
                  alt="Technology Interests"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-lg font-semibold text-white">Tech Passions</h4>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {interests.map((interest, index) => (
                    <div key={index} className="p-3 rounded-lg bg-secondary/30 text-center animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                      <p className="text-sm font-medium text-foreground">{interest}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Goals & Philosophy */}
          <div className="animate-slide-in-right">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center animate-bounce-in" style={{animationDelay: '0.2s'}}>
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Goals & Philosophy</h3>
            </div>

            <Card className="p-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in-up overflow-hidden" style={{animationDelay: '0.3s'}}>
              {/* Goals & Philosophy Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={goalsPhilosophyImg} 
                  alt="Career Goals and Philosophy"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-lg font-semibold text-white">Vision & Values</h4>
                </div>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Career Vision</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Aspiring to become a leading Data Scientist specializing in machine learning 
                    and AI-driven solutions. Passionate about leveraging data to solve real-world 
                    problems and drive innovation in technology.
                  </p>
                </div>

                <div className="animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Current Focus</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Currently expanding expertise in cloud technologies, DevOps practices, 
                    and advanced analytics. Actively working on projects that combine 
                    machine learning with practical business applications.
                  </p>
                </div>

                <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Why "Admirer"?</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    I chose the nickname "Admirer" because I deeply admire the power of 
                    technology and data to transform lives. I'm always in awe of innovative 
                    solutions and strive to contribute to the tech community with the same 
                    passion and respect I have for the field.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;