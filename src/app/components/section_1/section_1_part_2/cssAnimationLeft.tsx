import React, { useEffect, useState, useRef } from "react";
import "../../../styles/drone_css_style.css";

const CssAnimationLeft =() => {
    const [dots, setDots] = useState<{ x: number; y: number }[]>([]);
    const [fillDots, setFillDots] = useState<{ x: number; y: number }[]>([]);
    const [animationPhase, setAnimationPhase] = useState<"dots" | "shape" | "filled">("dots");
    const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    const numDots = 30; // Number of dots
    const newDots = [];

    for (let i = 0; i < numDots; i++) {
      const point = path.getPointAtLength((i / numDots) * length);
      newDots.push({ x: point.x, y: point.y });
    }

    setDots(newDots);
 
    /// Trigger filling the SVG with circles after the animation
    const timer1 = setTimeout(() => {
      const svgWidth = 514; // Width of the SVG viewBox
      const svgHeight = 513; // Height of the SVG viewBox
      const fillDots: { x: number; y: number }[] = [];
      const numFillDots = 30; 

      // Use the existing SVG element for `isPointInFill`
      const svg = path.ownerSVGElement;
      if (!svg) return;

      for (let i = 0; i < numFillDots; i++) {
        let x, y;
        let isInside = false;

        // Keep generating random points until one is inside the shape
        while (!isInside) {
          x = Math.random() * svgWidth;
          y = Math.random() * svgHeight;

          const point = svg.createSVGPoint();
          point.x = x;
          point.y = y;

          isInside = path.isPointInFill(point); // Check if the point is inside the shape
        }

        if (x !== undefined && y !== undefined) {
          fillDots.push({ x, y });
        }
      }

      setFillDots(fillDots);
      // Move to the next animation phase after 3 seconds
      const timer2 = setTimeout(() => setAnimationPhase("filled"), 7500);
      //
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };

    }, 1000); // Delay to match the fadeIn animation duration
  }, []);
    //
  return (
    <>
      <svg width="300" height="200" viewBox="0 0 514 513" xmlns="http://www.w3.org/2000/svg"
      className={`svg-shape ${animationPhase}`} // Apply animation class based on phase
      >
      <defs>
            <linearGradient id="gradientFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(244, 196, 40, 1)" />
            <stop offset="100%" stopColor="rgba(119, 223, 197, 1)" />
            </linearGradient>
        </defs>
        <path
          ref={pathRef} // Use ref to reference the path
          id="animatedPath"
          d="M513.437 512.317L511.674 511.141M511.674 511.141L134.19 259.397L300.8 0.872364L237.477 19.6578L1.71483 289.148L439.62 512.334L511.674 511.141Z" 
          stroke="transparent"
          strokeWidth="3"
          fill={animationPhase === "filled" ? "url(#gradientFill)" : "rgba(0, 0, 0, 0.1)"}
        />
        {dots.map((dot, index) => (
          <circle
            key={index}
            cx={dot.x}
            cy={dot.y}
            r="3"
            fill="white"
            className={`circles ${animationPhase}`}
          />
        ))}
        {/* Render circles to fill the SVG */}
        {fillDots.map((dot, index) => (
          <circle
            key={`fill-dot-${index}`}
            cx={dot.x}
            cy={dot.y}
            r="3"
            fill="white"
            className={`circles ${animationPhase}`}// Flashing effect applied here
          />
        ))}
      </svg>
    </>
  );
};

export default CssAnimationLeft;