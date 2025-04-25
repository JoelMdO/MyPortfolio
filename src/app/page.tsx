'use client'
import AircraftStream from "./components/section_1/section_1_part_1/aircraft";
import { useEffect, useRef, useState } from "react";
import Section1_Part2 from "./components/section_1/section_1_part_2/main_section_1_part_2";
import ShapesPage from "./components/section_2/shapes_page_2";
import Section1_Part1 from "./components/section_1/section_1_part_1/main_section_1_part_1";



  export default function Home() {
    //
    const nextSectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [isMotionEnd, setMotionEnd] = useState<boolean>(true);
    //
    // function to scroll to next section
    const scrollToNext = () => {
      nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
      setIsVisible(true);
    }, 500);
 }
      console.log('isMotionEnd', isMotionEnd);
      
    //
    return (
      <>
      {/* <section className="bg-black w-full h-screen relative flex">
          {isMotionEnd ? (<Section1_Part1 setMotionEnd={setMotionEnd}/> 
          ):(<Section1_Part2 scrollToNext={scrollToNext}/>)}
      </section> */}
      <section ref={nextSectionRef} className="h-screen bg-background-blue w-full flex">
          <ShapesPage type="tube-left" visible={isVisible} />
          <div className=" absolute bottom-2 right-0 flex w-[200px] h-[200px]">
          <ShapesPage type="tube-right" visible={isVisible} />
          </div>
      </section>
      </>
    ) 
  }

