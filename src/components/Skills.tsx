import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Cpu, Lightbulb, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "Java", "HTML", "CSS", "JavaScript", "MySQL"],
      color: "text-primary"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS Services", "Terraform", "Ansible", "Jenkins", "Maven", "Docker", "Kubernetes", "Jira", "Splunk"],
      color: "text-accent"
    },
    {
      title: "Data Science & ML",
      icon: Database,
      skills: ["Machine Learning", "Deep Learning", "Data Analytics", "Data Wrangling", "Data Visualization", "NLP", "Gen AI"],
      color: "text-primary"
    },
    {
      title: "Development Tools",
      icon: Cpu,
      skills: ["Linux", "LangChain", "OCR", "CatBoost", "RandomForest Classifier", "Flask", "Web Development"],
      color: "text-accent"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Leadership", "Active Learning", "Time Management", "Communication", "Creativity", "Critical Thinking"],
      color: "text-primary"
    },
    {
      title: "Specialized Knowledge",
      icon: Lightbulb,
      skills: ["Data Structures", "Algorithms", "Predictive Modeling", "Statistical Analysis", "Computer Vision"],
      color: "text-accent"
    }
  ];

  const certifications = [
    "AWS DevOps [Udemy and NSIC]",
    "Data Mining [NPTEL]",
    "Web Development [NxtWave]",
    "Data Science [Verzeo]"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Skills & <span className="bg-gradient-text bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning data science, machine learning, cloud technologies, 
            and software development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 bg-gradient-card">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center`}>
                  <category.icon className={`h-6 w-6 text-primary-foreground`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="text-xs hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Relevant <span className="bg-gradient-text bg-clip-text text-transparent">Courses</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-4 shadow-card hover:shadow-elegant transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <div className="flex items-center justify-center h-16">
                  <p className="text-sm font-medium text-foreground text-center leading-relaxed">
                    {cert}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <Card className="p-8 shadow-elegant bg-gradient-card max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">Technical Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
              Proficient in <strong className="text-primary">Python, Java, and JavaScript</strong> with extensive 
              experience in <strong className="text-primary">machine learning frameworks</strong> and 
              <strong className="text-primary"> cloud technologies</strong>. Skilled in 
              <strong className="text-primary"> AWS services, DevOps tools</strong>, and 
              <strong className="text-primary"> data analytics</strong>. Strong foundation in 
              <strong className="text-primary">algorithms, data structures</strong>, and 
              <strong className="text-primary"> statistical analysis</strong> with proven problem-solving 
              abilities demonstrated through competitive programming achievements.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;