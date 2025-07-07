import { useEffect, useState } from "react";
import * as m from "motion/react-m";
import { tw } from "../../twind/twind";
import { useScroll, useTransform } from "motion/react";

interface FloatingElementData {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  shape: string;
}

interface FloatingElementItemProps {
  element: FloatingElementData;
}

function FloatingElementItem({ element }: FloatingElementItemProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 2000], [element.y, element.y - 500]);

  return (
    <m.div
      className={tw("absolute opacity-10")}
      style={{
        left: element.x,
        y,
        width: element.size,
        height: element.size,
      }}
      animate={{
        x: [0, 50, 0],
        rotate: [0, 360],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 10 + element.id * 2,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {element.shape === 'circle' && (
        <div className={tw("w-full h-full bg-accent rounded-full")} />
      )}
      {element.shape === 'square' && (
        <div className={tw("w-full h-full bg-purple-400 rounded-lg")} />
      )}
      {element.shape === 'triangle' && (
        <div 
          className={tw("w-0 h-0")}
          style={{
            borderLeft: `${element.size / 2}px solid transparent`,
            borderRight: `${element.size / 2}px solid transparent`,
            borderBottom: `${element.size}px solid #10b981`,
          }}
        />
      )}
    </m.div>
  );
}

export default function FloatingElements() {
  const [elements, setElements] = useState<FloatingElementData[]>([]);

  useEffect(() => {
    const newElements = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 40 + 20,
      speed: Math.random() * 0.5 + 0.1,
      shape: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)]
    }));
    setElements(newElements);
  }, []);

  return (
    <div className={tw("fixed inset-0 pointer-events-none z-0 overflow-hidden")}>
      {elements.map((element) => (
        <FloatingElementItem key={element.id} element={element} />
      ))}
    </div>
  );
}