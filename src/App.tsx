import { lazy, Suspense, useEffect, useState } from "react";
import { tw } from "../twind/twind";
import { LazyMotion, domAnimation, useScroll } from "motion/react"
import * as m from "motion/react-m"
import ScrollLine from "./components/ScrollLine";

const StarSVG = lazy(() => import("./svgs/star"));
const Paragraph = lazy(() => import("./components/Paragraph"));
const Corner = lazy(() => import("./components/Corner"));
const ServicesSection = lazy(() => import("./components/Skills"));
const CommentSection = lazy(() => import("./components/CommentSection"));
const LastSegment = lazy(() => import("./components/LastSegment"));
const Footer = lazy(() => import("./components/Footer"));
const Icons = lazy(() => import("./components/Icons"));

function App() {
  const { scrollY } = useScroll();
  const [bgPosition, setBgPosition] = useState("center top");

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setBgPosition(`center ${latest * -0.2}px`);
    });
  }, [scrollY]);

  return (
    <LazyMotion features={domAnimation} strict>
      <div className="mesh-gradient" />
      <ScrollLine />
      <main className={tw("min-h-screen relative")}>
        <header className={tw("fixed top-0 w-full z-50 glass-effect border-b border-glassBorder")}>
          <div className={tw("flex justify-between items-center p-6 px-8 max-w-7xl mx-auto")}>
            <m.h1
              className={tw("text-xl font-bold gradient-text")}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
            >
              [Gowtham sree.]
            </m.h1>
            
            <div className={tw("flex items-center gap-6")}>
              <m.div
                className={tw("hidden md:flex items-center gap-3 text-sm")}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className={tw("w-2 h-2 rounded-full bg-gradient-accent animate-pulse")} />
                <span className={tw("text-color-secondary")}>Ananthapur, India</span>
                <span className={tw("text-color-secondary")}>•</span>
                <span className={tw("text-color-secondary")}>
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
                className={tw("px-6 py-2 rounded-full glass-effect border border-glassBorder font-semibold hover:bg-gradient-accent transition-all duration-300 hover:scale-105")}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Résumé
              </m.a>
            </div>
          </div>
        </header>

        <section className={tw("min-h-screen flex items-center justify-center relative pt-20")}>
          <div className={tw("text-center z-10 px-4")}>
            <m.div
              className={tw("mb-8")}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className={tw("text-xl md:text-2xl mb-4 text-color-secondary")}>
                Hello, I am Gowtham and I am a
              </h3>
              
              <div className={tw("flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8")}>
                <m.h1
                  className={tw("text-6xl md:text-8xl lg:text-9xl font-bold gradient-text")}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  Designer
                </m.h1>
                
                <m.div
                  className={tw("hidden md:block")}
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{ rotate: 360, opacity: 1 }}
                  transition={{ duration: 2, delay: 1.2 }}
                >
                  <StarSVG className={tw("text-4xl lg:text-6xl text-accent floating-animation")} />
                </m.div>
                
                <m.h1
                  className={tw("text-6xl md:text-8xl lg:text-9xl font-bold text-shimmer")}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.4 }}
                >
                  Developer
                </m.h1>
              </div>
            </m.div>
          </div>
          
          <Suspense fallback={<div>Loading...</div>}>
            <Icons />
          </Suspense>
          
          <div className={tw("absolute bottom-0 w-full flex justify-center")}>
            <m.img
              src="/marban.png"
              alt="Marban"
              className={tw("h-96 md:h-[500px] lg:h-[600px] object-contain floating-animation")}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
            />
          </div>
        </section>

        <div className={tw("relative py-32 px-8 max-w-6xl mx-auto")}>
          <Corner />
          <div className={tw("glass-effect rounded-3xl p-8 md:p-12")}>
            <Paragraph
              text={`I am Gowtham sree charan reddy, currently pursuing CSE with AIML at SRMIST. I love developing and designing but the actual problem occurred when it comes to these type of projects is skills. I am learning more skills to develop and design amazing experiences.`}
            />
          </div>
        </div>

        <div className={tw("max-w-7xl mx-auto px-8 py-24")}>
          <ServicesSection />
        </div>

        <div className={tw("py-32")}>
          <m.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={tw("text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-20 gradient-text")}
          >
            People around here<br />love my{" "}
            <span className={tw("inline-block px-4 py-2 rounded-2xl glass-effect border border-glassBorder neon-glow")}>
              work
            </span>
          </m.h1>
          <CommentSection />
        </div>

        <LastSegment />
        <Footer />
      </main>
    </LazyMotion>
  );
}

export default App;