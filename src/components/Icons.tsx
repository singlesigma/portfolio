import { useState, useEffect } from "react";
import { useScroll, useTransform } from "motion/react";
import * as m from "motion/react-m"
import { tw } from "../../twind/twind";
import { 
  Code2, 
  Palette, 
  Smartphone, 
  Globe, 
  Zap, 
  Heart,
  Star,
  Sparkles
} from "lucide-react";

export default function Icons() {
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const iconData = [
    { 
      Icon: Code2, 
      size: "text-6xl md:text-7xl",
      position: { left: "10%", top: "20%" },
      delay: 0.2,
      color: "text-blue-400"
    },
    { 
      Icon: Palette, 
      size: "text-5xl md:text-6xl",
      position: { left: "25%", top: "5%" },
      delay: 0.4,
      color: "text-purple-400"
    },
    { 
      Icon: Smartphone, 
      size: "text-4xl md:text-5xl",
      position: { left: "5%", top: "60%" },
      delay: 0.6,
      color: "text-green-400"
    },
    { 
      Icon: Globe, 
      size: "text-6xl md:text-7xl",
      position: { right: "20%", top: "10%" },
      delay: 0.8,
      color: "text-cyan-400"
    },
    { 
      Icon: Zap, 
      size: "text-5xl md:text-6xl",
      position: { right: "10%", top: "50%" },
      delay: 1.0,
      color: "text-yellow-400"
    },
    { 
      Icon: Heart, 
      size: "text-4xl md:text-5xl",
      position: { right: "5%", top: "75%" },
      delay: 1.2,
      color: "text-red-400"
    },
    { 
      Icon: Star, 
      size: "text-3xl md:text-4xl",
      position: { left: "15%", top: "80%" },
      delay: 1.4,
      color: "text-orange-400"
    },
    { 
      Icon: Sparkles, 
      size: "text-4xl md:text-5xl",
      position: { right: "30%", top: "70%" },
      delay: 1.6,
      color: "text-pink-400"
    }
  ];

  return (
    <div className={tw("absolute inset-0 pointer-events-none overflow-hidden")}>
      {iconData.map((icon, index) => {
        const parallaxY = useTransform(scrollY, [0, 1000], [0, -50 - index * 10]);
        
        return (
          <m.div
            key={index}
            className={tw("absolute smooth-transform")}
            style={{
              ...icon.position,
              y: parallaxY,
              x: mousePosition.x * (index % 2 === 0 ? 1 : -1),
            }}
            initial={{ 
              opacity: 0,
              scale: 0,
              rotate: -180
            }}
            animate={{ 
              opacity: 0.6,
              scale: 1,
              rotate: 0
            }}
            transition={{
              duration: 1,
              delay: icon.delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{
              scale: 1.2,
              opacity: 1,
              rotate: 360,
              transition: { duration: 0.3 }
            }}
          >
            <m.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 4 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <icon.Icon className={tw(`${icon.size} ${icon.color} drop-shadow-lg`)} />
            </m.div>
          </m.div>
        );
      })}
    </div>
  );
}