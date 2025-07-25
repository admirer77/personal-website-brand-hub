import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Target } from "lucide-react";
import FloatingLogos from "./FloatingLogos";

const Education = () => {
  const education = [
    {
      degree: "B.Tech",
      field: "Computer Science and Engineering (Data Science)",
      institution: "Institute of Aeronautical Engineering, Hyderabad",
      year: "2022-2025",
      cgpa: "9.26 CGPA"
    },
    {
      degree: "Intermediate",
      field: "MPC",
      institution: "St. J. College, Karimnagar",
      year: "2019-2021",
      cgpa: "95%"
    },
    {
      degree: "High School",
      field: "Secondary Education",
      institution: "St. John's High School, Karimnagar",
      year: "2019",
      cgpa: "9.7 CGPA"
    }
  ];

  const achievements = [
    "Solved over 100 problems on LeetCode",
    "Awarded a 5-star Golden Badge in Python on HackerRank",
    "Received a 4-star Silver Badge in SQL on HackerRank"
  ];

  return (
    <section id="education" className="py-20 bg-muted/30 relative">
      <FloatingLogos section="education" />
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Education & <span className="bg-gradient-text bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic journey and notable achievements that shaped my expertise in 
            data science and technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-sm text-muted-foreground">{edu.field}</p>
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {edu.cgpa}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{edu.institution}</p>
                  <p className="text-xs text-muted-foreground">{edu.year}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements & Goals */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Achievements</h3>
            </div>

            <div className="space-y-4 mb-12">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-4 shadow-card hover:shadow-elegant transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-foreground">{achievement}</p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Goals */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Career Goals</h3>
            </div>

            <Card className="p-6 shadow-card">
              <p className="text-muted-foreground leading-relaxed">
                Aspiring to become a leading Data Scientist specializing in machine learning 
                and AI-driven solutions. Passionate about leveraging data to solve real-world 
                problems and drive innovation in technology. Currently focusing on expanding 
                expertise in cloud technologies, DevOps practices, and advanced analytics.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;