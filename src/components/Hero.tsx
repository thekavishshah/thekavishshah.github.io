import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter, FileText, User, Briefcase, Phone } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const orbitingIcons = [
    { icon: Github, label: "GitHub", section: "work", delay: "0s" },
    { icon: Linkedin, label: "LinkedIn", section: "contact", delay: "2.5s" },
    { icon: Mail, label: "Email", section: "contact", delay: "5s" },
    { icon: Twitter, label: "Twitter", section: "contact", delay: "7.5s" },
    { icon: FileText, label: "Resume", section: "about", delay: "10s" },
    { icon: User, label: "About", section: "about", delay: "12.5s" },
    { icon: Briefcase, label: "Work", section: "work", delay: "15s" },
    { icon: Phone, label: "Contact", section: "contact", delay: "17.5s" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Magical background */}
      <div className="absolute inset-0 bg-gradient-hero">
        {/* Floating magical particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-kawaii-lavender rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-kawaii-pink rounded-full animate-bounce-soft opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-kawaii-mint rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-kawaii-lavender rounded-full animate-float opacity-70" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-kawaii-pink rounded-full animate-bounce-soft opacity-30" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Central content */}
      <div className="relative z-10 flex items-center justify-center">
        {/* Orbiting icons container */}
        <div className="relative">
          {/* Central workspace image */}
          <div className="relative z-20">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full p-4 bg-gradient-orb shadow-glow animate-glow">
              <img
                src="/lovable-uploads/b7fb0b9c-2994-4c18-b85b-e5bc833473d3.png"
                alt="3D Kawaii Workspace"
                className="w-full h-full object-contain animate-float"
              />
            </div>
          </div>

          {/* Orbiting icons */}
          {orbitingIcons.map((item, index) => {
            const IconComponent = item.icon;
            const animationClass = index % 3 === 0 ? 'animate-orbit' : index % 3 === 1 ? 'animate-orbit-reverse' : 'animate-orbit-slow';
            
            return (
              <div
                key={item.label}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${animationClass}`}
                style={{ animationDelay: item.delay }}
              >
                <Button
                  onClick={() => scrollToSection(item.section)}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 shadow-icon hover:shadow-glow transition-all duration-300 hover:scale-110 group"
                  variant="ghost"
                >
                  <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-primary/80 transition-colors duration-300" />
                </Button>
              </div>
            );
          })}

          {/* Additional decorative orbiting elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit-slow">
            <div 
              className="w-3 h-3 bg-kawaii-lavender rounded-full opacity-60 animate-pulse"
              style={{ animationDelay: "3s" }}
            ></div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit-reverse">
            <div 
              className="w-2 h-2 bg-kawaii-pink rounded-full opacity-40 animate-pulse"
              style={{ animationDelay: "8s" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Title overlay */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center z-20">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-up">
          <span className="bg-gradient-orb bg-clip-text text-transparent">
            Creative Developer
          </span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Crafting magical digital experiences
        </p>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-muted-foreground text-sm">Click icons to explore</div>
      </div>
    </section>
  );
};

export default Hero;