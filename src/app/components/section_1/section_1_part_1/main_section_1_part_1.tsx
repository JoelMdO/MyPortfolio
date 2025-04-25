import React, { useEffect, useRef, useState } from 'react';
import dynamic from "next/dynamic";

//
const AircraftStream = dynamic(() => import("./aircraft"), { ssr: false });
//
interface Section1_Part1Props {
    setMotionEnd: (value: boolean) => void;
}

const Section1_Part1: React.FC<Section1_Part1Props> = ({ setMotionEnd }) => {
    //
    const [screenHeight, setScreenHeight] = useState<number>(0);
    const [screenWidth, setScreenWidth] = useState<number>(0);
    
    //
    // Dynamically calculate screen size
    useEffect(() => {
        const updateScreenSize = () => {
        setScreenHeight(window.innerHeight);
        setScreenWidth(window.innerWidth);
        };

        // Set initial screen size
        updateScreenSize();

        // Update screen size on window resize
        window.addEventListener("resize", updateScreenSize);

        // Cleanup event listener on unmount
        return () => window.removeEventListener("resize", updateScreenSize);
    }, []);
   //
    return (
        <>
        <div className="bg-black w-full h-screen flex relative">
        <div>
        <AircraftStream type="right-1" setMotionEnd={setMotionEnd} screenHeight={screenHeight} screenWidth={screenWidth}/>
        <AircraftStream type="main" setMotionEnd={setMotionEnd} screenHeight={screenHeight} screenWidth={screenWidth}/>
        <AircraftStream type="left-1" setMotionEnd={setMotionEnd} screenHeight={screenHeight} screenWidth={screenWidth}/>
        </div>
        </div>
        </>
    )
}
export default Section1_Part1;