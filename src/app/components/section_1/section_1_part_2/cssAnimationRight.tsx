import React, { useEffect, useState, useRef } from "react";
import "../../../styles/drone_css_style.css";


const CssAnimationRight: React.FC = () => {
    const [dots, setDots] = useState<{ x: number; y: number }[]>([]);
    const [fillDots, setFillDots] = useState<{ x: number; y: number }[]>([]);
    const [animationPhase, setAnimationPhase] = useState<"dots" | "shape" | "filled">("dots");
    const pathRef = useRef<SVGPathElement | null>(null);
    //
    

  useEffect(() => {
    
    const timer = setTimeout(() => {
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
      const svgWidth = 461; // Width of the SVG viewBox
      const svgHeight = 508; // Height of the SVG viewBox
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
      const timer2 = setTimeout(() => setAnimationPhase("filled"), 1000);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      }
    }, 2000); // Delay to match the fadeIn animation duration
  }, 5000);
  }, []);
    //
  
  // Cleanup event listener on unmount
  return (
    <>
      <svg width="300" height="200" viewBox="0 0 461 508" xmlns="http://www.w3.org/2000/svg"
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
          d="M1.14313 506.798L2.67976 505.498M2.67976 505.498L331.66 227.184L146.526 1.2511L208.304 12.1353L459.872 240.944L70.7955 498.84L2.67976 505.498Z"
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

export default CssAnimationRight;