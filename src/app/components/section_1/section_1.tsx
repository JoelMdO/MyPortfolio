import { useState } from "react";
import Section1_Part1 from "./section_1_part_1/section_1_part_1";
import Section1_Part2 from "./section_1_part_2/section_1_part_2";

interface Section1Props {
  nextSectionRef: React.RefObject<HTMLDivElement | null>;
  setIsVisible: (isVisible: boolean) => void;
}

const Section1: React.FC<Section1Props> = ({
  nextSectionRef,
  setIsVisible,
}) => {
  const [isMotionEnd, setMotionEnd] = useState<boolean>(true);
  ///--------------------------------------------------------
  // Handle Scroll to Section 2 once the animation ends.
  ///--------------------------------------------------------
  const scrollToNext = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      setIsVisible(true);
    }, 800);
  };
  //
  return (
    <>
      <section className="bg-black w-full h-screen relative flex">
        {isMotionEnd ? (
          <Section1_Part1 setMotionEnd={setMotionEnd} />
        ) : (
          <Section1_Part2 scrollToNext={scrollToNext} />
        )}
      </section>
    </>
  );
};

export default Section1;
