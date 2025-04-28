"use client";
import React from "react";
import { motion } from "framer-motion";
import "../../styles/section_2/shapes_svg.css";
import Arrow from "./arrow";
import AboutMe from "./about_me";
import SquarePurple from "./square_purple";
import ThemeSwitch from "./theme_switch";
import JoelLogo from "../joel_logo";

type Section2Props = {
  isVisible?: boolean;
  setIsDarkMode: (value: boolean | ((prevState: boolean) => boolean)) => void;
  isDarkMode: boolean;
  isTaller: { isBoolean: boolean; heightMeasure: number };
  nextSectionRef: React.RefObject<HTMLDivElement | null>;
};

const Section2: React.FC<Section2Props> = ({
  isVisible,
  setIsDarkMode,
  isDarkMode,
  isTaller,
  nextSectionRef,
}) => {
  //
  const pageComponents = [
    {
      id: 1,
      component: <AboutMe isTaller={isTaller} />,
      classParam: "w-60 md:w-80",
      top: "",
      left: "",
      delay: 0.4,
    },
    {
      id: 2,
      component: (
        <Arrow type="blue" isTaller={isTaller} isDarkMode={isDarkMode} />
      ),
      classParam: "",
      top: "",
      left: "",
      delay: 0.1,
    },
    {
      id: 3,
      component: (
        <Arrow type="red" isTaller={isTaller} isDarkMode={isDarkMode} />
      ),
      classParam: "",
      top: "",
      left: "",
      delay: 0.1,
    },
    {
      id: 4,
      component: (
        <Arrow type="blue-1" isTaller={isTaller} isDarkMode={isDarkMode} />
      ),
      classParam: "",
      top: "",
      left: "",
      delay: 0.1,
    },
    {
      id: 5,
      component: <div className="line-opposite"></div>,
      classParam: "",
      top: "",
      left: "",
      delay: 0,
    },
    {
      id: 6,
      component: <SquarePurple type={"purple-main"} isTaller={isTaller} />,
      classParam: "",
      top: "",
      left: "",
      delay: 0.4,
    },
    {
      id: 7,
      component: <SquarePurple type={"purple-back"} isTaller={isTaller} />,
      classParam: "",
      top: "",
      left: "",
      delay: 0.4,
    },
    {
      id: 8,
      component: <SquarePurple type={"mirror"} isTaller={isTaller} />,
      classParam: "",
      top: "",
      left: "",
      delay: 0.4,
    },
    {
      id: 9,
      component: (
        <JoelLogo isTaller={isTaller} nextSectionRef={nextSectionRef} />
      ),
      classParam: "",
      top: "25vh",
      left: "20vw",
      delay: 0.2,
    },
  ];
  //
  return (
    <>
      {isVisible ? (
        <section className="flex relative w-full h-screen bg-white-background dark:bg-background-blue">
          {/** THEME TOGGLE*/}
          <ThemeSwitch setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
          {/** MOTION DIV*/}
          {pageComponents.map((component) => (
            <motion.div
              key={component.id}
              className={`absolute ${component.classParam}`}
              initial={{ y: -200, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{
                type: "spring",
                stiffness: 60,
                delay: component.delay,
              }}
              style={{
                top: component.top,
                left: component.left,
              }}
            >
              {component.component}
            </motion.div>
          ))}
          {/** YELLOW ROTATE LINE*/}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="line-rotated"></div>
          </motion.div>
        </section>
      ) : null}
    </>
  );
};

export default Section2;
