import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import FloatingLogos from "./FloatingLogos";

// Import experience images
import cognizantDevopsImg from "@/assets/cognizant-devops.webp";
import innomaticsDataScienceImg from "@/assets/innomatics-data-science.webp";
import aeronauticalSummerImg from "@/assets/aeronautical-summer.webp";

const Experience = () => {
  const experiences = [
    {
      title: "DevOps using AWS",
      company: "Cognizant",
      type: "Internship",
      duration: "Mar 2025 - June 2025",
      location: "Remote",
      status: "Upcoming",
      image: cognizantDevopsImg,
      description: [
        "Completed internship in DevOps tools and AWS",
        "Worked on AWS services, Linux, & DevOps tools"
      ],
      skills: ["AWS", "DevOps", "Linux", "Cloud Computing"]
    },
    {
      title: "Data Science and Machine Learning Intern",
      company: "Innomatics Research Labs",
      type: "Internship",
      duration: "Jan 2024 - Apr 2024",
      location: "Remote",
      status: "Completed",
      image: innomaticsDataScienceImg,
      description: [
        "Completed internship in machine learning and data science",
        "Worked on predictive modeling, Gen AI, NLP projects, and Data Analytics"
      ],
      skills: ["Machine Learning", "Data Science", "Python", "NLP", "Gen AI", "Data Analytics"]
    },
    {
      title: "Summer Intern",
      company: "Institute of Aeronautical Engineering",
      type: "Internship",
      duration: "May 2024 - Sep 2024",
      location: "Hyderabad",
      status: "Completed",
      image: aeronauticalSummerImg,
      description: [
        "Completed internship in deep learning, OCR, and GenAI",
        "Worked on assessing handwritten subjective answers using LangChain"
      ],
      skills: ["Deep Learning", "OCR", "GenAI", "LangChain", "Computer Vision"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Upcoming":
        return "bg-accent/10 text-accent";
      case "Completed":
        return "bg-primary/10 text-primary";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="experience" className="py-16 sm:py-20 bg-muted/30 relative">
      <FloatingLogos section="experience" />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Work <span className="bg-gradient-text bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Hands-on experience in data science, machine learning, and cloud technologies 
            through various internships and projects.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-0 shadow-card hover:shadow-elegant transition-all duration-300 bg-card/80 backdrop-blur-sm hover:scale-105 animate-fade-in-up overflow-hidden" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="flex flex-col lg:flex-row">
                {/* Left side - Experience Image */}
                <div className="lg:w-80 h-64 lg:h-auto relative overflow-hidden">
                  <img 
                    src={exp.image} 
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 lg:top-4 lg:bottom-auto flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center shadow-glow animate-bounce-in">
                      <Briefcase className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <Badge className={`${getStatusColor(exp.status)} text-white`}>
                      {exp.status}
                    </Badge>
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="flex-1 p-4 sm:p-6 lg:p-8">
                  <div className="mb-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1">{exp.title}</h3>
                    <p className="text-base sm:text-lg font-medium text-primary mb-2">{exp.company}</p>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 flex-shrink-0" />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                      <Badge variant="outline" className="text-xs w-fit">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {exp.description.map((desc, descIndex) => (
                      <div key={descIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground leading-relaxed">{desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;