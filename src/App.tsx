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
        </m.div>

        {/* Hero Section with Creative Entrance */}
        <section className={tw("min-h-screen flex items-center justify-center relative overflow-hidden")}>
          {/* Hero Image positioned above text */}
          <div className={tw("absolute inset-0 flex items-center justify-center z-10 pointer-events-none")}>
            <m.img
              src="/marban.png"
              alt="Profile"
              className={tw("h-80 md:h-96 lg:h-[500px] object-contain smooth-transform")}
              initial={{ opacity: 0, y: 200, scale: 0.8 }}
              animate={{ opacity: 1, y: -50, scale: 1 }}
              transition={{ duration: 2, delay: 3.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                filter: "drop-shadow(0 20px 40px rgba(0, 122, 255, 0.4))"
              }}
            />
          </div>

          <m.div
            style={{ 
              y: heroParallax,
              x: mousePosition.x * 0.1,
            }}
            className={tw("text-center z-5 px-6 smooth-transform")}
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
              
              {/* Continuous Scrolling Marquee */}
              <div className={tw("relative overflow-hidden mb-12 h-24 md:h-32 lg:h-40")}>
                <m.div
                  className={tw("flex items-center whitespace-nowrap")}
                  animate={{
                    x: [0, -2000],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.6 }}
                >
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className={tw("flex items-center gap-8 mr-8")}>
                      <span className={tw("text-4xl md:text-6xl lg:text-8xl font-black text-textPrimary hero-text")}>
                        Developer
                      </span>
                      <m.div
                        className={tw("text-2xl md:text-4xl lg:text-6xl")}
                        animate={{ 
                          rotate: [0, 360],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        ✦
                      </m.div>
                      <span className={tw("text-4xl md:text-6xl lg:text-8xl font-black text-gradient hero-text")}>
                        Designer
                      </span>
                      <m.div
                        className={tw("text-2xl md:text-4xl lg:text-6xl")}
                        animate={{ 
                          rotate: [0, -360],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        ⚡
                      </m.div>
                    </div>
                  ))}
                </m.div>
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
        </section>

        {/* About Section */}
        <section className={tw("py-24 px-6 max-w-4xl mx-auto relative")}>
          <m.div
            className={tw("text-center")}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <m.h2 className={tw("text-3xl md:text-5xl font-bold mb-8 text-textPrimary")}>
              About <span className={tw("text-gradient")}>Me</span>
            </m.h2>
            
            <m.p className={tw("text-lg md:text-xl text-textSecondary leading-relaxed mb-8")}>
              I am <span className={tw("text-accent font-semibold")}>Gowtham Sree Charan Reddy</span>, 
              currently pursuing CSE with AIML at SRMIST. I love developing and designing digital 
              experiences that make a difference.
            </m.p>
            
            <m.p className={tw("text-base md:text-lg text-textSecondary leading-relaxed")}>
              My journey in tech is just beginning, and I'm excited to learn, grow, and create 
              amazing projects that impact people's lives. Every line of code I write is a step 
              towards building something extraordinary.
            </m.p>
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

        {/* Contact Section */}
        <section className={tw("py-32 px-6 relative overflow-hidden")}>
          <div className={tw("max-w-4xl mx-auto text-center")}>
            <m.div
              className={tw("flex justify-center mb-8")}
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true }}
            >
              <m.div
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={tw("text-6xl")}
              >
                🚀
              </m.div>
            </m.div>

            <m.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className={tw("text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-textPrimary smooth-text")}
            >
              Ready to <span className={tw("text-gradient")}>collaborate</span>?
            </m.h1>
            
            <m.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className={tw("text-xl md:text-2xl text-textSecondary mb-12 leading-relaxed max-w-3xl mx-auto")}
            >
              Let's turn your ideas into reality with cutting-edge technology and creative design solutions.
            </m.p>

            <m.a
              href="mailto:iamgowthamsree@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={tw("inline-flex items-center gap-3 apple-button text-lg group")}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start a Project</span>
              <m.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </m.div>
            </m.a>
          </div>
        </section>

        <Footer />
      </main>
    </LazyMotion>
  );
}

export default App;