import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar, Shield, Smartphone, BarChart3 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Assessing Handwritten Subjective Responses using LangChain",
      description: "An innovative solution for evaluating handwritten subjective answers using advanced OCR and NLP techniques. The system extracts text from handwritten responses and uses LangChain for intelligent assessment.",
      duration: "May 2024 - Aug 2024",
      status: "Completed",
      icon: BarChart3,
      technologies: ["LangChain", "OCR", "NLP", "Python", "Computer Vision", "Machine Learning"],
      features: [
        "Extracted handwritten responses using Tesseract OCR",
        "Trained DenseNet model applied Tesseract OCR for text extraction",
        "Evaluated handwritten subjective answers using LangChain API"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Detecting DDoS Attacks using CatBoost",
      description: "A comprehensive cybersecurity solution that detects and prevents DDoS attacks using machine learning. Implements CatBoost algorithm for accurate threat detection with real-time monitoring capabilities.",
      duration: "Mar 2024 - Present",
      status: "In Progress",
      icon: Shield,
      technologies: ["CatBoost", "Python", "Machine Learning", "Cybersecurity", "Network Security", "Data Analysis"],
      features: [
        "Trained CatBoost on CIC-DDoS2019 data; achieved 98.72% accuracy",
        "Processed 20M rows, 88 features; CatBoost detected 99.12% of DDoS attacks",
        "Real-time threat detection and prevention system"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Smartphone Recommendation System",
      description: "An intelligent recommendation engine that suggests smartphones based on user preferences and requirements. Uses collaborative filtering and content-based filtering techniques.",
      duration: "Apr 2024 - Jun 2024",
      status: "Completed",
      icon: Smartphone,
      technologies: ["Python", "Machine Learning", "Data Science", "Recommendation Systems", "Flask", "Data Visualization"],
      features: [
        "Implemented data collection via web scraping and YouTube API",
        "Built a predictive model using RandomForest Classifier",
        "Created interactive web interface using Flask, HTML, and CSS"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Analysis of AMCAI Data",
      description: "Comprehensive analysis of AMCAI dataset using advanced data science techniques. Includes exploratory data analysis, statistical modeling, and predictive analytics.",
      duration: "Jan 2024 - Feb 2024",
      status: "Completed",
      icon: BarChart3,
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "SciPy", "Statistical Analysis"],
      features: [
        "Analyzed AMCAI data using Python (pandas, numpy, matplotlib, seaborn, scipy, datetime)",
        "Conducted preprocessing, exploratory analysis, and statistical tests",
        "Generated comprehensive data insights and visualizations"
      ],
      github: "#",
      demo: "#"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-accent/10 text-accent";
      case "Completed":
        return "bg-primary/10 text-primary";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured <span className="bg-gradient-text bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative projects spanning machine learning, data science, 
            cybersecurity, and web development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-8 shadow-card hover:shadow-elegant transition-all duration-300 bg-card/80 backdrop-blur-sm">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center shadow-glow flex-shrink-0">
                  <project.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-foreground leading-tight">
                      {project.title}
                    </h3>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{project.duration}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {project.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="flex-1">
                  <Github className="h-4 w-4" />
                  View Code
                </Button>
                <Button variant="default" size="sm" className="flex-1">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 shadow-elegant bg-gradient-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Interested in Collaboration?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm always excited to work on new projects and explore innovative solutions. 
              Let's connect and discuss how we can create something amazing together!
            </p>
            <Button variant="hero" size="lg" className="shadow-glow">
              <ExternalLink className="h-4 w-4" />
              Get In Touch
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;