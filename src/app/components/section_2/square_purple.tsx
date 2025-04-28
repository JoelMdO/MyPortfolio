import { useEffect, useState } from "react";
import jsonText from "../../constants/text.json";
import { motion } from "framer-motion";

interface SquarePurpleProps {
  type: string;
  isTaller: { isBoolean: boolean; heightMeasure: number };
}
const SquarePurple: React.FC<SquarePurpleProps> = ({ type, isTaller }) => {
  //
  let properties: string = "";
  let className: string = "";
  const [isMirror, setIsMirror] = useState<boolean>(false);
  //--------------------------------------------------------
  // To define the position on tall mobiles.
  ///--------------------------------------------------------
  let mobilePosition: string = "top-[35vh] left-[25vw]";
  let tallMobilePosition: string = "top-[38vh] left-[26vw]";
  //
  useEffect(() => {
    if (type === "mirror") {
      setIsMirror(true);
    }
  }, [type]);
  //
  switch (type) {
    case "purple-main":
      mobilePosition = " top-[29vh] left-[20vw]";
      tallMobilePosition = " top-[32vh] left-[20vw]";
      properties =
        "square-purple-main w-[65vw] h-[35vh]  md:top-[23vh] md:left-[18vw] bg-green-faded-square-light dark:bg-purple-square-dark";
      className = "";
      break;
    case "purple-back":
      mobilePosition = "top-[43vh] left-[29vw]";
      tallMobilePosition = "top-[45vh] left-[29vw]";
      properties =
        "square-purple-back w-[65vw] h-[35vh]  md:top-[38vh] md:left-[25vw] bg-green-square-light dark:bg-purple-faded-square-dark";
      className = "";
      break;
    default:
      mobilePosition = mobilePosition;
      tallMobilePosition = tallMobilePosition;
      properties =
        "square-mirror  w-[65vw] h-[37vh] top-[18rem] left-[3rem] md:top-[29vh] md:left-[22vw]";
      className =
        "mt-4 ml-8 block text-justify-right tracking-wider dark:text-gray-article-body-dark-theme text-gray-article-body-light-theme text-[12px] sm:text-[14px] md:text-[1.7rem] xl:text-[2.1rem] text-shadow-shadow text-shadow-lg font-geist-jura font-bold w-[80%]";
      break;
  }
  //
  return (
    <>
      <div
        className={`flex relative rounded-3xl md:w-[55vw] md:h-[45vh] ${properties} ${
          isTaller.isBoolean ? tallMobilePosition : mobilePosition
        }`}
      >
        {isMirror ? (
          <div className="flex-col justify-center items-center">
            <div className="absolute top-0 left-[10%] right-[40%] border-2 border-stroke-purple-light-square shadow-2xl dark:shadow-amber-300 shadow-white" />
            <div className="absolute top-[1%] left-[11%] right-[40%] h-1 border-6 dark:border-amber-300 border-white filter blur-lg" />
            {/* Animate each span */}
            {Object.values(jsonText.About_me)
              .slice(0, 3)
              .map((text, index) => (
                <motion.span
                  key={index}
                  className={`${className}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    ease: "easeIn",
                    delay: index * 3, // Delay each span by 1 second
                  }}
                >
                  {text}
                </motion.span>
              ))}
            <div className="absolute bottom-[1%] left-[40%] right-[11%] h-1 border-6 dark:border-amber-300 border-white filter blur-lg" />
            <div className="absolute bottom-0 left-[40%] right-[11%] border-2 border-stroke-purple-light-square shadow-2xl dark:shadow-amber-300 shadow-white" />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SquarePurple;
