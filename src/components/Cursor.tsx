import { useEffect, useState } from "react";
import * as m from "motion/react-m";
import { tw } from "../../twind/twind";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseEnterElement = () => setIsHovering(true);
    const handleMouseLeaveElement = () => setIsHovering(false);

    // Mouse events
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Add hover listeners to interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('button, a, [role="button"], .card-hover, .apple-button');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnterElement);
        el.addEventListener('mouseleave', handleMouseLeaveElement);
      });
    };

    // Initial setup
    addHoverListeners();

    // Re-add listeners when DOM changes
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      
      const interactiveElements = document.querySelectorAll('button, a, [role="button"], .card-hover, .apple-button');
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnterElement);
        el.removeEventListener('mouseleave', handleMouseLeaveElement);
      });
      
      observer.disconnect();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <m.div
        className={tw("fixed w-4 h-4 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-difference")}
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: isClicking ? 0.6 : isHovering ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
          mass: 0.5,
        }}
      />
      
      {/* Cursor trail */}
      <m.div
        className={tw("fixed w-8 h-8 border border-accent rounded-full pointer-events-none z-[9998] opacity-60")}
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isClicking ? 0.4 : isHovering ? 2.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          mass: 0.8,
        }}
      />
      
      {/* Outer glow */}
      <m.div
        className={tw("fixed w-12 h-12 border border-accent/30 rounded-full pointer-events-none z-[9997] opacity-30")}
        animate={{
          x: position.x - 24,
          y: position.y - 24,
          scale: isClicking ? 0.2 : isHovering ? 3 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
          mass: 1,
        }}
      />
    </>
  );
};

export default CustomCursor;