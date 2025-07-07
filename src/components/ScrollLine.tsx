import React from 'react';
import { useScroll, useTransform } from 'motion/react';
import * as m from "motion/react-m"
import { tw } from "../../twind/twind";

const ScrollLine: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const width = useTransform(scrollYProgress, [0, 1], ['3px', '6px']);

  return (
    <div className={tw("fixed top-0 right-4 h-full flex items-start z-50")}>
      <m.div
        style={{
          height,
          width,
          background: 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)',
        }}
        className={tw("rounded-full shadow-glow")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default ScrollLine;