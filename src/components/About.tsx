import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "SQL", "Git",
    "Figma", "Adobe Creative Suite", "UI/UX Design", "Web Animation",
    "Responsive Design", "API Development"
  ];

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Company",
      period: "2022 - Present",
      description: "Leading frontend development for multiple client projects, focusing on React and modern web technologies."
    },
    {
      title: "Full Stack Developer",
      company: "Startup Inc",
      period: "2020 - 2022",
      description: "Developed full-stack applications using React, Node.js, and PostgreSQL. Collaborated with design teams to create user-friendly interfaces."
    },
    {
      title: "Web Developer",
      company: "Design Agency",
      period: "2018 - 2020",
      description: "Created responsive websites and web applications for various clients. Specialized in CSS animations and interactive user experiences."
    }
  ];

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              About <span className="bg-gradient-hero bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left column - About text */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">
                  Crafting Digital Experiences
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate developer and designer with over 5 years of experience creating 
                  beautiful, functional web applications. I believe in the power of clean code, 
                  thoughtful design, and delightful user experiences.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you can find me exploring new design trends, learning about 
                  emerging technologies, or working on personal creative projects. I'm always excited 
                  to take on new challenges and collaborate with fellow creators.
                </p>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">Skills & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-3 py-1 bg-card hover:bg-primary/10 transition-colors duration-300 animate-fade-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column - Experience */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Experience</h3>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card 
                    key={index}
                    className="border-border bg-card hover:shadow-card transition-all duration-300 hover:scale-[1.02] animate-fade-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <h4 className="text-lg font-semibold text-foreground">
                            {exp.title}
                          </h4>
                          <Badge variant="outline" className="w-fit text-xs">
                            {exp.period}
                          </Badge>
                        </div>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;