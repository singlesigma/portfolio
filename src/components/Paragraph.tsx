import React, { useEffect, useState } from "react";
import { useTransform, useScroll } from "motion/react";
import * as m from "motion/react-m"
import { tw } from "../../twind/twind";

interface ParagraphProps {
  text: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
  const { scrollY } = useScroll();
  const words = text.split(" ");
  const [opacityValues, setOpacityValues] = useState<number[]>(
    new Array(words?.length).fill(0.3),
  );
  
  const transforms = words.map((_, index) => {
    const windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
    const start = windowHeight * (1.2 + index * 0.02) / 4;
    const end = windowHeight * (1.2 + index * 0.02) / 3;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useTransform(scrollY, [start, end], [0.3, 1]);
  });

  useEffect(() => {
    const unsubscribe = scrollY.on("change", () => {
      const newOpacityValues = transforms.map((transform) => transform.get());
      setOpacityValues(newOpacityValues);
    });

    return () => unsubscribe();
  }, [scrollY, words]);

  return (
    <div className={tw("relative z-10")}>
      <p className={tw('text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-textPrimary smooth-text')}>
        {words.map((word, index) => (
          word === "{}" ? <><br /><br /></> :
          <m.span
            key={index}
            style={{ opacity: opacityValues[index] }}
            className={tw('inline-block mr-3 transition-all duration-200 smooth-transform')}
            whileHover={{ 
              scale: 1.05,
              color: "#007aff",
              transition: { duration: 0.1 }
            }}
          >
            {word}
          </m.span>
        ))}
      </p>
    </div>
  );
};

export default Paragraph;