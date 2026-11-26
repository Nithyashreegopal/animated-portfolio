import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Raw mouse coordinates (for zero-latency pinpoint inner dot)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring-smoothed coordinates for trailing outer ring
  const ringX = useSpring(mouseX, { damping: 28, stiffness: 380, mass: 0.18 });
  const ringY = useSpring(mouseY, { damping: 28, stiffness: 380, mass: 0.18 });

  // Check if device is desktop with a mouse pointer on mount
  useEffect(() => {
    const checkIsDesktop = () => {
      const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
      const hasHover = window.matchMedia("(hover: hover)").matches;
      const isLargeScreen = window.innerWidth >= 1024;
      setIsDesktop(hasFinePointer && hasHover && isLargeScreen);
    };

    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  // Track mouse coordinates and window visibility
  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDesktop, isVisible, mouseX, mouseY]);

  // Handle interactive element hovering via event delegation
  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest(
        'a, button, input, textarea, select, [role="button"], .cursor-pointer'
      );
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => window.removeEventListener("mouseover", handleMouseOver);
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      {/* 1. Precision Center Dot (Instant response, sticks right at pointer) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 0 : isClicking ? 0.7 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />

      {/* 2. Sleek Trailing Ring (Smooth spring physics, expands elegantly over clickable targets) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] border border-black/45"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? (isClicking ? 1.3 : 1.55) : isClicking ? 0.85 : 1,
          backgroundColor: isHovering ? "rgba(0, 0, 0, 0.05)" : "transparent",
          borderColor: isHovering ? "rgba(0, 0, 0, 0.75)" : "rgba(0, 0, 0, 0.35)",
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          scale: { type: "spring", stiffness: 320, damping: 22 },
          backgroundColor: { duration: 0.2 },
          borderColor: { duration: 0.2 },
          opacity: { duration: 0.2 },
        }}
      />
    </>
  );
}
