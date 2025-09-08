import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import CodingIllustration from "@/components/CodingIllustration";
import { Github, Linkedin, FileText, User, Home, FolderGit2 } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const routes: Record<string, string> = {
      home: "/",
      about: "/about",
      work: "/projects",
      contact: "/contact",
    };
    const route = routes[sectionId];
    if (route) {
      window.location.href = route;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const orbitingIcons = [
    { icon: Home, label: "Home", section: "home" },
    { icon: User, label: "About", section: "about" },
    { icon: FolderGit2, label: "Projects", section: "work" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/" },
    { icon: Github, label: "GitHub", href: "https://github.com/" },
    { icon: FileText, label: "Resume", href: "/resume.pdf" },
  ];

  // 3D tilt for the central card
  const cardRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);
  const [orbitRadius, setOrbitRadius] = useState<number>(240);

  useEffect(() => {
    const cardEl = cardRef.current;
    if (!cardEl) return;

    const handleMove = (e: MouseEvent) => {
      const rect = cardEl.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const midX = rect.width / 2;
      const midY = rect.height / 2;
      const rotateY = ((x - midX) / midX) * 10; // max 10deg
      const rotateX = -((y - midY) / midY) * 10;
      cardEl.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const reset = () => {
      cardEl.style.transform = "rotateX(0deg) rotateY(0deg)";
    };

    cardEl.addEventListener("mousemove", handleMove);
    cardEl.addEventListener("mouseleave", reset);
    return () => {
      cardEl.removeEventListener("mousemove", handleMove);
      cardEl.removeEventListener("mouseleave", reset);
    };
  }, []);

  // Measure image to keep orbit ring tight to the subject box
  useEffect(() => {
    const updateRadius = () => {
      const img = imgRef.current;
      if (!img) return;
      const rect = img.getBoundingClientRect();
      const computed = Math.max(rect.width, rect.height) / 2 + 72; // 72px padding outside image
      setOrbitRadius(computed);
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

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
        <div className="relative">
          {/* Central workspace image with 3D tilt */}
          <div className="relative z-20" style={{ perspective: "1000px" }}>
            <div
              ref={cardRef}
              className="transform-gpu transition-transform duration-150 will-change-transform"
            >
              <div ref={imgRef} className="select-none pointer-events-none">
                <CodingIllustration width={540} />
              </div>
            </div>
          </div>

          {/* Orbiting icons as a smooth spinning ring */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-30">
            <div className="relative animate-ring" style={{ width: orbitRadius * 2 + "px", height: orbitRadius * 2 + "px" }}>
              {orbitingIcons.map((item, index) => {
                const IconComponent = item.icon;
                const angle = (360 / orbitingIcons.length) * index;
                const radius = orbitRadius;
                const itemStyle = {
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`,
                } as React.CSSProperties;
                const onClick = () => {
                  if ((item as any).href) {
                    window.open((item as any).href as string, "_blank", "noopener,noreferrer");
                    return;
                  }
                  if ((item as any).section) scrollToSection((item as any).section as string);
                };
                return (
                  <div
                    key={item.label}
                    className="absolute left-1/2 top-1/2"
                    style={itemStyle}
                  >
                    <div className="animate-counter-rotate">
                      <Button
                        onClick={onClick}
                        className="pointer-events-auto w-14 h-14 md:w-16 md:h-16 rounded-full bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 shadow-icon hover:shadow-glow transition-all duration-300 hover:scale-110 group"
                        variant="ghost"
                      >
                        <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-primary/80 transition-colors duration-300" />
                      </Button>
                    </div>
                  </div>
                );
              })}

              {/* Decorative dots tied to ring motion */}
              {[0, 90, 180, 270].map((deg, i) => (
                <div key={i} className="absolute left-1/2 top-1/2" style={{ transform: `translate(-50%, -50%) rotate(${deg}deg) translate(175px)` }}>
                  <div className={`rounded-full ${i % 2 === 0 ? "w-2 h-2 bg-kawaii-pink" : "w-3 h-3 bg-kawaii-mint"} opacity-60 animate-pulse`} />
                </div>
              ))}
            </div>
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