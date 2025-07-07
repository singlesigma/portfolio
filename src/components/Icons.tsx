import { useState, useEffect, lazy } from "react";
import { useScroll } from "motion/react";
import * as m from "motion/react-m"
import { tw } from "../../twind/twind";

const BallsSVG = lazy(() => import("../svgs/balls"));
const BeanSVG = lazy(() => import("../svgs/bean"));
const MSVG = lazy(() => import("../svgs/m"));
const SpringSVG = lazy(() => import("../svgs/spring"));
const StarSVG = lazy(() => import("../svgs/star"));

export default function Icons() {
  const { scrollY } = useScroll();
  const [top, setTop] = useState("0px");
  
  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setTop(`${latest * -0.2}px`);
    });
  }, [scrollY]);

  const iconData = [
    { 
      Component: BallsSVG, 
      className: "text-6xl md:text-8xl lg:text-9xl",
      gradient: "from-purple-400 to-pink-600",
      position: { left: "10%", top: "20%" },
      rotation: 45,
      delay: 0.2
    },
    { 
      Component: SpringSVG, 
      className: "text-6xl md:text-8xl lg:text-9xl",
      gradient: "from-blue-400 to-cyan-500",
      position: { left: "25%", top: "5%" },
      rotation: -30,
      delay: 0.4
    },
    { 
      Component: StarSVG, 
      className: "text-4xl md:text-6xl lg:text-7xl",
      gradient: "from-yellow-400 to-orange-500",
      position: { left: "5%", top: "60%" },
      rotation: 60,
      delay: 0.6
    },
    { 
      Component: MSVG, 
      className: "text-6xl md:text-8xl lg:text-9xl",
      gradient: "from-green-400 to-blue-500",
      position: { right: "20%", top: "10%" },
      rotation: -45,
      delay: 0.8
    },
    { 
      Component: BeanSVG, 
      className: "text-6xl md:text-8xl lg:text-9xl",
      gradient: "from-red-400 to-pink-500",
      position: { right: "10%", top: "50%" },
      rotation: 30,
      delay: 1.0
    },
    { 
      Component: StarSVG, 
      className: "text-4xl md:text-6xl lg:text-7xl",
      gradient: "from-indigo-400 to-purple-500",
      position: { right: "5%", top: "75%" },
      rotation: -60,
      delay: 1.2
    }
  ];

  return (
    <m.div
      style={{ top }}
      className={tw("absolute inset-0 pointer-events-none overflow-hidden")}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.8 }}
    >
      {iconData.map((icon, index) => (
        <m.div
          key={index}
          className={tw("absolute")}
          style={icon.position}
          initial={{ 
            scale: 0, 
            rotate: 0,
            opacity: 0
          }}
          animate={{ 
            scale: 1, 
            rotate: icon.rotation,
            opacity: 0.8
          }}
          transition={{
            duration: 1.2,
            delay: icon.delay,
            ease: [0.25, 0.8, 0.25, 1],
          }}
          whileHover={{
            scale: 1.2,
            rotate: icon.rotation + 180,
            transition: { duration: 0.5 }
          }}
        >
          <div className={tw("relative")}>
            <div className={tw(`absolute inset-0 bg-gradient-to-r ${icon.gradient} opacity-20 blur-xl rounded-full`)} />
            <icon.Component 
              className={tw(`${icon.className} bg-gradient-to-r ${icon.gradient} bg-clip-text text-transparent floating-animation`)} 
            />
          </div>
        </m.div>
      ))}
    </m.div>
  );
}