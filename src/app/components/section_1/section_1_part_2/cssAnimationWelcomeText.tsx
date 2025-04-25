import React, { useEffect, useState, useRef } from "react";
import "../../../styles/drone_css_style.css";
import WelcomeText from "./welcome";

interface CssAnimationWelcomeTextProps {
  setIsAnimationCSSEnded: (isAnimationCSSEnded: boolean) => void;
};

const CssAnimationWelcomeText: React.FC<CssAnimationWelcomeTextProps> = ({ setIsAnimationCSSEnded }) => {
    const [dots, setDots] = useState<{ x: number; y: number }[]>([]);
    const [shapeDots, setShapeDots] = useState<{ x: number; y: number, color: string }[]>([]);
    const [animationPhase, setAnimationPhase] = useState<"dots" | "shape" >("dots");
    const [isShaped, setIsShaped] = useState(false);
    const pathRef = useRef<SVGPathElement | null>(null);
    //
    
    // Define shadow colors (from .box class)
  const shadowColors = [
    "#fff", // First shadow color
    "#fff", // Second shadow color
    "#bc13fe", // Third shadow color
    "#bc13fe", // Fourth shadow color
    "#bc13fe", // Fifth shadow color
    "#bc13fe", // Sixth shadow color (inset)
  ];

  //
  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;  
    ///--------------------------------------------------------
    // Animate the path
    ///--------------------------------------------------------
    const length = path.getTotalLength();
    const numDots = 40; // Number of dots
    const newDots: { x: number; y: number }[] = [];
    const newStrokeDots: { x: number; y: number, color: string }[] = [];

    for (let i = 0; i < numDots; i++) {
      const point = path.getPointAtLength((i / numDots) * length);
      newDots.push({ x: point.x, y: point.y});
    }

    const timermain = setTimeout(() => {
     
      setDots(newDots);
    
    ///--------------------------------------------------------
    /// Animate the stroke with cicles purple and white
    ///--------------------------------------------------------
    for (let i = 0; i < numDots; i++) {
      const point = path.getPointAtLength((i / numDots) * length);
      const color = shadowColors[i % shadowColors.length]; 
      newStrokeDots.push({ x: point.x, y: point.y, color});
    }
    //   // Move to the next animation phase after 3 seconds
      const time = setTimeout(() => setShapeDots(newStrokeDots), 1000);
      const time1 = setTimeout(() => setAnimationPhase("shape"), 2000);
      const time2 = setTimeout(() => {
        console.log('doing "shape to true');
        setIsShaped(true);
      }, 2500);

      return () => {
        clearTimeout(timermain);
        clearTimeout(time);
        clearTimeout(time1);
        clearTimeout(time2);
      };
    }, 9000); 

  }, []);
  
  // Useffect to set the animation phase
  useEffect(() => {
    if(isShaped) {
    setTimeout(() => {
      console.log('doing setisanimation');
      
      setIsAnimationCSSEnded(true);
    }, 1000);}
  }, [isShaped]);  

  
  //
  return (
    <>
    <div className="absolute bottom-0 right-0 m-1.5">
      <svg width="200" height="103" viewBox="0 0 377 143" xmlns="http://www.w3.org/2000/svg"
      className={`svg-shape-welcome ${animationPhase}`} // Apply animation class based on phase
      >
       <defs>
          {/* Neon Gradient */}
          <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0fa" /> {/* Green */}
            <stop offset="50%" stopColor="#f4c428" /> {/* Yellow */}
            <stop offset="100%" stopColor="#0fa" /> {/* Green */}
          </linearGradient>
          {/* Neon Glow Filter */}
          <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          ref={pathRef} // Use ref to reference the path
          id="animatedPath"
          d="M20 0.5H357C367.77 0.5 376.5 9.23045 376.5 20V123C376.5 133.77 367.77 142.5 357 142.5H20C9.23045 142.5 0.500001 133.77 0.5 123V20L0.506836 19.4971C0.769373 9.12709 9.12709 0.769372 19.4971 0.506836L20 0.5Z"
          stroke={animationPhase === "shape" ? "url(#neonGradient)" : "transparent"}
          strokeWidth="3"
          fill="transparent"
          filter={animationPhase === "shape" ?"url(#neonGlow)" : "none"}
        />
        {dots.map((dot, index) => (
          <circle
            key={index}
            cx={dot.x}
            cy={dot.y}
            r="2"
            fill="white" // Use the color from the dot object
            className={`circles ${animationPhase}`}
          />
        ))}
        {/*Filling the dots*/}
        {shapeDots.map((dot, index) => (
          <circle
            key={index}
            cx={dot.x}
            cy={dot.y}
            r="2"
            fill={dot.color} // Use the color from the dot object
            className={`circles ${animationPhase}`}
          />
        ))}
        {/* Add text in the center */}
        {isShaped ? (<foreignObject x="0" y="0" width="100%" height="100%">
          <div className = "flex justify-center items-center h-full"> 
            <WelcomeText
              onAnimationEnd={() => console.log("Animation Ended")}
              isAnimationEnded={false}
            />
          </div>
        </foreignObject>) : null}
      </svg>
     </div>
    </>
  );
};

export default CssAnimationWelcomeText;