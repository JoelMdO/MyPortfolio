import Image from "next/image";
import { motion } from "framer-motion";

interface AircraftStreamProps {
  type: string;
  setMotionEnd: (value: boolean) => void;
  screenWidth: number;
  screenHeight: number;
}

const AircraftStream: React.FC<AircraftStreamProps> = ({ type, setMotionEnd, screenWidth, screenHeight }) => {

    ///--------------------------------------------------------
    // Aircraft Stream, located on different parts of the screen
    ///--------------------------------------------------------
    let aircraftWidth : number = 80;
    let aircraftHeight: number = 80;

    if(screenWidth <= 375){
       aircraftWidth = 50;
       aircraftHeight = 50;
    } else if(screenWidth <= 768){
       aircraftWidth = 70;
       aircraftHeight = 70;
    } else {
       aircraftWidth = aircraftWidth;
       aircraftHeight = aircraftHeight;
    }
    
    
    console.log('screenWidth', screenWidth);
    console.log('screenHeight', screenHeight);
    
    let positionX, positionY, animatePositionX, animatePositionY: number;
    switch (type) {
        case "left-1":
            positionX = -100;
            positionY = -60;
            animatePositionX = screenWidth + aircraftWidth; //1250 // 900
            animatePositionY = -screenHeight + (2 * aircraftHeight) +160; //-550 // -350
        break;
        case "right-1":
            positionX = -150;
            positionY = -10;
            animatePositionX = screenWidth + aircraftWidth; //350 // 950
            animatePositionY = -screenHeight + (2 * aircraftHeight) - 160; // -330 //580
        break;
        default:
            positionX = -80;
            positionY = -10;
            animatePositionX = screenWidth + aircraftWidth;//1100 // 500
            animatePositionY = -screenHeight + aircraftHeight +30; //-550 // -300
        break;
    }

    //

    return (
        <>
        <motion.div
        initial={{ x: positionX, y: positionY }}
        animate={{ x: animatePositionX, y: animatePositionY }}
        transition={{ duration: 5, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 flex flex-row"
        onAnimationComplete={() => setMotionEnd(false)}
        >
        <div className=" flex flex-row">
        <Image src={"/Aircraft.svg"} alt="aircraft" width={aircraftWidth} height={aircraftHeight} className="absolute right-2" />
        {/* Jet stream */}
        <Image src={"/Streams.svg"} alt="jet stream" width={255} height={100} className="absolute bottom-[-4] left-[-5]" />
       </div>
       <svg className="relative right-[75] bottom-[10]">
        {/*<path
        d="M5 32 C0 32 -10 40 -20 32"
        className="jet-stream"
        stroke="lightblue"
        strokeWidth="2"
        fill="none"
        /> */}
        </svg>
       </motion.div>
       </>
    );
    
}

export default AircraftStream;