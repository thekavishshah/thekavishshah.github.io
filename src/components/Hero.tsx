import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-soft">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-kawaii-mint rounded-full opacity-30 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-kawaii-pink rounded-full opacity-25 animate-bounce-soft"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-kawaii-lavender rounded-full opacity-20 animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main heading */}
          <div className="space-y-4 animate-fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
              Hi, I'm{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Your Name
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Creative Developer & Designer
            </p>
          </div>

          {/* 3D Workspace Image */}
          <div className="relative max-w-2xl mx-auto my-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative group">
              <img
                src="/lovable-uploads/b7fb0b9c-2994-4c18-b85b-e5bc833473d3.png"
                alt="3D Kawaii Workspace"
                className="w-full h-auto rounded-3xl shadow-soft transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-hero opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I create beautiful, functional digital experiences with a passion for clean code 
              and delightful user interactions. Welcome to my creative workspace!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("work")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-card hover:shadow-soft transition-all duration-300 hover:scale-105"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 animate-fade-up" style={{ animationDelay: "0.9s" }}>
            <Button variant="ghost" size="sm" className="hover:scale-110 transition-transform duration-300">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:scale-110 transition-transform duration-300">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:scale-110 transition-transform duration-300">
              <Mail className="w-5 h-5" />
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("about")}
              className="hover:scale-110 transition-transform duration-300"
            >
              <ArrowDown className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;