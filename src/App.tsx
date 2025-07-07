import { lazy, Suspense, useEffect, useState } from "react";
import { tw } from "../twind/twind";
import { LazyMotion, domAnimation, useScroll, useTransform } from "motion/react"
import * as m from "motion/react-m"
import ScrollLine from "./components/ScrollLine";

const Paragraph = lazy(() => import("./components/Paragraph"));
const Corner = lazy(() => import("./components/Corner"));
const ServicesSection = lazy(() => import("./components/Skills"));
const CommentSection = lazy(() => import("./components/CommentSection"));
const LastSegment = lazy(() => import("./components/LastSegment"));
const Footer = lazy(() => import("./components/Footer"));
const Icons = lazy(() => import("./components/Icons"));

function App() {
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax effects
  const heroParallax = useTransform(scrollY, [0, 1000], [0, -200]);
  const iconsParallax = useTransform(scrollY, [0, 1000], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <LazyMotion features={domAnimation} strict>
      <ScrollLine />
      
      {/* Custom cursor */}
      <m.div
        className={tw("fixed w-4 h-4 bg-accent rounded-full pointer-events-none z-50 mix-blend-difference")}
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />

      <main className={tw("min-h-screen bg-background")}>
        {/* Navigation */}
        <header className={tw("fixed top-0 w-full z-40 glass-nav")}>
          <div className={tw("max-w-7xl mx-auto px-6 py-4 flex justify-between items-center")}>
            <m.h1
              className={tw("text-xl font-semibold text-textPrimary")}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Gowtham Sree
            </m.h1>
            
            <div className={tw("flex items-center gap-8")}>
              <m.div
                className={tw("hidden md:flex items-center gap-4 text-sm text-textSecondary")}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className={tw("w-2 h-2 bg-green-400 rounded-full animate-pulse")} />
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
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </m.a>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className={tw("min-h-screen flex items-center justify-center relative overflow-hidden")}>
          <m.div
            style={{ y: heroParallax }}
            className={tw("text-center z-10 px-6 smooth-transform")}
          >
            <m.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p className={tw("text-xl md:text-2xl text-textSecondary mb-6 smooth-text")}>
                Hello, I'm Gowtham and I'm a
              </p>
              
              <div className={tw("flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-8")}>
                <m.h1
                  className={tw("text-6xl md:text-8xl lg:text-9xl font-bold text-textPrimary smooth-text")}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  Designer
                </m.h1>
                
                <m.div
                  className={tw("text-4xl floating")}
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 1.2, delay: 1.2 }}
                >
                  ✦
                </m.div>
                
                <m.h1
                  className={tw("text-6xl md:text-8xl lg:text-9xl font-bold text-gradient smooth-text")}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  Developer
                </m.h1>
              </div>
            </m.div>
          </m.div>
          
          {/* Floating Icons */}
          <Suspense fallback={null}>
            <m.div style={{ y: iconsParallax }} className={tw("smooth-transform")}>
              <Icons />
            </m.div>
          </Suspense>
          
          {/* Hero Image */}
          <div className={tw("absolute bottom-0 w-full flex justify-center")}>
            <m.img
              src="/marban.png"
              alt="Profile"
              className={tw("h-96 md:h-[500px] lg:h-[600px] object-contain floating smooth-transform")}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </div>
        </section>

        {/* About Section */}
        <section className={tw("py-32 px-6 max-w-6xl mx-auto")}>
          <div className={tw("glass p-8 md:p-12 relative")}>
            <Corner />
            <Paragraph
              text="I am Gowtham Sree Charan Reddy, currently pursuing CSE with AIML at SRMIST. I love developing and designing digital experiences that make a difference. My journey in tech is just beginning, and I'm excited to learn, grow, and create amazing projects that impact people's lives."
            />
          </div>
        </section>

        {/* Skills Section */}
        <section className={tw("py-24 px-6 max-w-7xl mx-auto")}>
          <ServicesSection />
        </section>

        {/* Testimonials */}
        <section className={tw("py-32")}>
          <m.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className={tw("text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-20 text-textPrimary smooth-text")}
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