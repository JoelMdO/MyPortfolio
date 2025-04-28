"use client";
import AircraftStream from "./components/section_1/section_1_part_1/aircraft";
import { useEffect, useRef, useState } from "react";
import { proxy, snapshot } from "valtio";
import dynamic from "next/dynamic";

const Section1 = dynamic(() => import("./components/section_1/section_1"), {
  ssr: false,
});
const Section2 = dynamic(() => import("./components/section_2/section_2"), {
  ssr: false,
});

///--------------------------------------------------------
// Handle renders with a proxy based state (no top level setStates)
///--------------------------------------------------------
// export const visibilityState = proxy({
//   section1: false,
//   section2: false,
//   section3: false,
// });

export default function Home() {
  //
  const nextSectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isTaller, setIsTaller] = useState<{
    isBoolean: boolean;
    heightMeasure: number;
  }>({ isBoolean: false, heightMeasure: 800 });
  //

  ///--------------------------------------------------------
  // For Reponsiveness on tall devices
  ///--------------------------------------------------------
  useEffect(() => {
    const checkScreenSize = () => {
      const height = window.innerHeight;
      const width = window.innerWidth;

      if (height >= 800 && width <= 768) {
        setIsTaller({ isBoolean: true, heightMeasure: height });
      } else {
        setIsTaller({ isBoolean: false, heightMeasure: height });
      }
    };

    checkScreenSize(); // Check once on mount

    window.addEventListener("resize", checkScreenSize); // Check on resize
    return () => window.removeEventListener("resize", checkScreenSize); // Clean up
  }, []);

  ///--------------------------------------------------------
  // For Theme Change From Dark (default) to Light
  ///--------------------------------------------------------
  //
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [isDarkMode]);
  //
  return (
    <>
      <Section1 nextSectionRef={nextSectionRef} setIsVisible={setIsVisible} />
      <Section2
        isVisible={isVisible}
        setIsDarkMode={setIsDarkMode}
        isDarkMode={isDarkMode}
        isTaller={isTaller}
        nextSectionRef={nextSectionRef}
      />
      {/* <section ref={nextSectionRef}>
        <h1>next section</h1>
      </section> */}
    </>
  );
}
