import { useEffect, useState } from "react";
import * as m from "motion/react-m";
import { tw } from "../../twind/twind";
import { MotionValue } from "motion/react";

interface CodeBackgroundProps {
  parallax: MotionValue<number>;
}

export default function CodeBackground({ parallax }: CodeBackgroundProps) {
  const [codeLines, setCodeLines] = useState<string[]>([]);

  const sampleCode = [
    "const developer = new Person('Gowtham');",
    "function createAmazingThings() {",
    "  return passion + creativity + code;",
    "}",
    "class Designer extends Creative {",
    "  constructor() {",
    "    super();",
    "    this.vision = 'pixel-perfect';",
    "  }",
    "}",
    "const skills = ['React', 'TypeScript', 'Design'];",
    "if (idea.isAwesome()) {",
    "  buildIt();",
    "}",
    "// Dreams become reality through code",
    "export default Innovation;",
    "const future = await buildTomorrow();",
    "console.log('Hello, World! 🚀');",
    "function solveProblems(creativity) {",
    "  return creativity * effort;",
    "}",
    "const portfolio = new Portfolio({",
    "  projects: getAllProjects(),",
    "  passion: Infinity",
    "});",
  ];

  useEffect(() => {
    const lines = [];
    for (let i = 0; i < 50; i++) {
      lines.push(sampleCode[Math.floor(Math.random() * sampleCode.length)]);
    }
    setCodeLines(lines);
  }, []);

  return (
    <m.div
      className={tw("fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-10")}
      style={{ y: parallax }}
    >
      <div className={tw("absolute inset-0 bg-gradient-to-br from-accent/10 to-purple-500/10")} />
      
      <div className={tw("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 h-full")}>
        {Array.from({ length: 3 }).map((_, colIndex) => (
          <div key={colIndex} className={tw("space-y-4")}>
            {codeLines.slice(colIndex * 17, (colIndex + 1) * 17).map((line, index) => (
              <m.div
                key={index}
                className={tw("font-mono text-xs md:text-sm text-accent/40")}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 0.4, x: 0 }}
                transition={{
                  duration: 2,
                  delay: (colIndex * 17 + index) * 0.1,
                  ease: "easeOut"
                }}
              >
                <span className={tw("text-purple-400/60 mr-2 text-xs")}>{String(index + 1).padStart(2, '0')}</span>
                {line}
              </m.div>
            ))}
          </div>
        ))}
      </div>
      
      {/* Animated code particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <m.div
          key={i}
          className={tw("absolute w-1 h-1 bg-accent rounded-full")}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      {/* Matrix-like falling characters */}
      {Array.from({ length: 15 }).map((_, i) => (
        <m.div
          key={`matrix-${i}`}
          className={tw("absolute font-mono text-accent/30 text-sm")}
          style={{
            left: `${Math.random() * 100}%`,
            top: `-20px`,
          }}
          animate={{
            y: [0, window.innerHeight + 100],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        >
          {String.fromCharCode(0x30A0 + Math.random() * 96)}
        </m.div>
      ))}
    </m.div>
  );
}