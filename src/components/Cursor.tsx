import { useEffect, useState } from "react";
import { motion } from "motion/react"
import { tw } from "../../twind/twind";
import { FaAt } from "react-icons/fa6";
import { AiFillSmile } from "react-icons/ai";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const [isSmiley, setIsSmiley] = useState(false);
  const [textHeight, setTextHeight] = useState(0);
  const [isClicking, setIsClicking] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnterButton = () => {
      setIsHoveringButton(true);
      setTextHeight(0);
    };

    const handleSmiley = () => {
      setIsSmiley(true);
      setIsHoveringButton(true);
      setTextHeight(0);
    };

    const handleMouseLeaveButton = () => {
      setIsHoveringButton(false);
    };

    const handleLeaveSmiley = () => {
      setIsSmiley(false);
      setIsHoveringButton(false);
    };

    const handleMouseEnterText = (event: Event) => {
      if (!isHoveringButton) {
        const target = event.target as HTMLElement;
        const lineHeight = parseFloat(window.getComputedStyle(target).lineHeight);
        setTextHeight(lineHeight);
      }
    };

    const handleMouseLeaveText = () => {
      if (!isHoveringButton) {
        setTextHeight(0);
      }
    };

    const handleDragStart = () => setIsDragging(true);
    const handleDragEnd = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("dragstart", handleDragStart);
    window.addEventListener("dragend", handleDragEnd);

    document.querySelectorAll("button, a").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnterButton);
      el.addEventListener("mouseleave", handleMouseLeaveButton);
    });

    document.querySelectorAll("img#marban").forEach((el) => {
      el.addEventListener("mouseenter", handleSmiley);
      el.addEventListener("mouseleave", handleLeaveSmiley);
    });

    document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnterText);
      el.addEventListener("mouseleave", handleMouseLeaveText);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("dragstart", handleDragStart);
      window.removeEventListener("dragend", handleDragEnd);

      document.querySelectorAll("button, a").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnterButton);
        el.removeEventListener("mouseleave", handleMouseLeaveButton);
      });
      
      document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnterText);
        el.removeEventListener("mouseleave", handleMouseLeaveText);
      });
    };
  }, [isHoveringButton]);

  return (
    <motion.div
      className={tw("hidden lg:flex fixed top-0 left-0 items-center justify-center pointer-events-none rounded-full z-50")}
      style={{
        height: isHoveringButton ? "50px" : textHeight ? `${textHeight}px` : "25px",
        width: isHoveringButton ? "50px" : textHeight ? "8px" : "25px",
        background: textHeight
          ? "linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)"
          : isHoveringButton
          ? "rgba(255, 255, 255, 0.1)"
          : isClicking
          ? "transparent"
          : "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(20px)",
        border: isHoveringButton || textHeight
          ? "1px solid rgba(255, 255, 255, 0.3)"
          : isClicking
          ? "3px solid rgba(255, 255, 255, 0.5)"
          : "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      }}
      animate={{
        x: position.x - (isHoveringButton ? 25 : textHeight ? 4 : 12.5),
        y: position.y - (isHoveringButton ? 25 : textHeight ? textHeight / 2 : 12.5),
        scale: isClicking ? 0.8 : isDragging ? 1.3 : 1,
      }}
      transition={{
        duration: 0.15,
        ease: [0.25, 0.8, 0.25, 1],
      }}
    >
      {isHoveringButton && (
        isSmiley ? (
          <AiFillSmile className={tw("text-2xl text-yellow-400")} />
        ) : (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={tw("text-xl text-white")}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ x: 0, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </motion.svg>
        )
      )}
    </motion.div>
  );
};

export default CustomCursor;