import React from 'react';
import { useScroll, useTransform } from 'motion/react';
import * as m from "motion/react-m"
import { tw } from "../../twind/twind";

const ScrollLine: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <div className={tw("fixed top-0 right-4 h-full flex items-start z-30")}>
      <m.div
        style={{
          height,
          opacity,
          width: '2px',
          background: 'var(--accent)',
        }}
        className={tw("rounded-full smooth-transform")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </div>
  );
};

export default ScrollLine;