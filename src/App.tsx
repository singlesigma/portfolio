import { lazy, Suspense, useEffect, useState } from "react";
import { tw } from "../twind/twind";
import { LazyMotion, domAnimation, useScroll, useTransform } from "motion/react"
import * as m from "motion/react-m"
import ScrollLine from "./components/ScrollLine";
import FloatingElements from "./components/FloatingElements";
import CodeBackground from "./components/CodeBackground";

const Paragraph = lazy(() => import("./components/Paragraph"));
const Corner = lazy(() => import("./components/Corner"));
const ServicesSection = lazy(() => import("./components/Skills"));
const CommentSection = lazy(() => import("./components/CommentSection"));
const ProjectsSection = lazy(() => import("./components/ProjectsSection"));
const LastSegment = lazy(() => import("./components/LastSegment"));
const Footer = lazy(() => import("./components/Footer"));
const Icons = lazy(() => import("./components/Icons"));

function App() {
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Advanced parallax effects
  const heroParallax = useTransform(scrollY, [0, 1500], [0, -400]);
  const iconsParallax = useTransform(scrollY, [0, 1000], [0, -200]);
  const backgroundParallax = useTransform(scrollY, [0, 2000], [0, -300]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <LazyMotion features={domAnimation} strict>
      <ScrollLine />
      <FloatingElements />
      <CodeBackground parallax={backgroundParallax} />
      
      {/* Custom cursor */}
      <m.div
        className={tw("fixed w-6 h-6 bg-accent rounded-full pointer-events-none z-50 mix-blend-difference")}
        animate={{
          x: mousePosition.x / 2 + (typeof window !== 'undefined' ? window.innerWidth / 2 : 0) - 12,
          y: mousePosition.y / 2 + (typeof window !== 'undefined' ? window.innerHeight / 2 : 0) - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.3,
        }}
      />

      <main className={tw("min-h-screen bg-background relative")}>
        {/* Navigation */}
        <header className={tw("fixed top-0 w-full z-40 glass-nav")}>
          <div className={tw("max-w-7xl mx-auto px-6 py-4 flex justify-between items-center")}>
            <m.h1
              className={tw("text-xl font-bold text-textPrimary")}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Gowtham Sree
            </m.h1>
            
            <div className={tw("flex items-center gap-8")}>
              <m.div
                className={tw("hidden md:flex items-center gap-4 text-sm text-textSecondary")}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <m.div 
                  className={tw("w-2 h-2 bg-green-400 rounded-full")}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span>Ananthapur, India</span>
                <span>•</span>
                <span>
                  {new Date().toLocaleTimeString("en-US", {
                    timeZone: "Asia/Kolkata",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })}
                </span>
              </m.div>
              
              <m.a
                href="https://drive.google.com/file/d/1QDok8LCtduRpiNaupw27OFMPu0OK3Oqc/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className={tw("apple-button")}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </m.a>
            </div>
          </div>
        </header>

        {/* Hero Section with Creative Entrance */}
        <section className={tw("min-h-screen flex items-center justify-center relative overflow-hidden")}>
          <m.div
            style={{ 
              y: heroParallax,
              x: mousePosition.x * 0.1,
            }}
            className={tw("text-center z-10 px-6 smooth-transform")}
          >
            <m.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <m.p 
                className={tw("text-xl md:text-2xl text-textSecondary mb-8 smooth-text")}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Hello, I'm Gowtham and I'm a
              </m.p>
              
              <div className={tw("flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-12")}>
                <m.h1
                  className={tw("text-7xl md:text-9xl lg:text-[12rem] font-black text-textPrimary smooth-text hero-text")}
                  initial={{ opacity: 0, rotateX: 90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  transition={{ duration: 1.5, delay: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  Designer
                </m.h1>
                
                <m.div
                  className={tw("text-6xl md:text-8xl")}
                  initial={{ opacity: 0, rotate: -360, scale: 0 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  transition={{ duration: 2, delay: 2.2, type: "spring", stiffness: 100 }}
                >
                  <m.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    ✦
                  </m.div>
                </m.div>
                
                <m.h1
                  className={tw("text-7xl md:text-9xl lg:text-[12rem] font-black text-gradient smooth-text hero-text")}
                  initial={{ opacity: 0, rotateX: -90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  transition={{ duration: 1.5, delay: 2.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  Developer
                </m.h1>
              </div>
            </m.div>
          </m.div>
          
          {/* Creative Floating Icons */}
          <Suspense fallback={null}>
            <m.div 
              style={{ 
                y: iconsParallax,
                x: mousePosition.x * 0.05,
              }} 
              className={tw("smooth-transform")}
            >
              <Icons />
            </m.div>
          </Suspense>
          
          {/* Hero Image with Creative Animation */}
          <div className={tw("absolute bottom-0 w-full flex justify-center")}>
            <m.img
              src="/marban.png"
              alt="Profile"
              className={tw("h-96 md:h-[500px] lg:h-[650px] object-contain smooth-transform")}
              initial={{ opacity: 0, y: 200, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 2, delay: 3.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                filter: "drop-shadow(0 20px 40px rgba(0, 122, 255, 0.3))"
              }}
            />
          </div>
        </section>

        {/* About Section */}
        <section className={tw("py-32 px-6 max-w-6xl mx-auto relative")}>
          <div className={tw("glass p-8 md:p-16 relative overflow-hidden")}>
            <Corner />
            <Paragraph
              text="I am Gowtham Sree Charan Reddy, currently pursuing CSE with AIML at SRMIST. I love developing and designing digital experiences that make a difference. My journey in tech is just beginning, and I'm excited to learn, grow, and create amazing projects that impact people's lives. Every line of code I write is a step towards building something extraordinary."
            />
          </div>
        </section>

        {/* Skills Section */}
        <section className={tw("py-32 px-6 max-w-7xl mx-auto")}>
          <m.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={tw("text-5xl md:text-7xl font-bold text-center mb-20 text-textPrimary smooth-text")}
          >
            Skills & <span className={tw("text-gradient")}>Expertise</span>
          </m.h2>
          <ServicesSection />
        </section>

        {/* Projects Section */}
        <section className={tw("py-32 px-6 max-w-7xl mx-auto")}>
          <m.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={tw("text-5xl md:text-7xl font-bold text-center mb-20 text-textPrimary smooth-text")}
          >
            Featured <span className={tw("text-gradient")}>Projects</span>
          </m.h2>
          <ProjectsSection />
        </section>

        {/* Testimonials with Slicing Animation */}
        <section className={tw("py-32 relative overflow-hidden")}>
          <m.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className={tw("text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-32 text-textPrimary smooth-text")}
          >
            What people say about my{" "}
            <span className={tw("text-gradient")}>work</span>
          </m.h1>
          <CommentSection />
        </section>

        <LastSegment />
        <Footer />
      </main>
    </LazyMotion>
  );
}

export default App;