import React, { useState } from 'react';
import dynamic from "next/dynamic";
import CssAnimationWelcomeText from './cssAnimationWelcomeText';
//
const CssAnimationLeft = dynamic(() => import("./cssAnimationLeft"), { ssr: false });
const CssAnimationRight = dynamic(() => import("./cssAnimationRight"), { ssr: false });
const CssAnimationName = dynamic(() => import("./cssAnimationName"), { ssr: false });
//
interface Section1_Part2Props {
    scrollToNext: () => void;
}

const Section1_Part2: React.FC<Section1_Part2Props> = ({ scrollToNext }) => {
    //
    const [isAnimationCSSEnded, setIsAnimationCSSEnded] = useState<boolean>(false);
    isAnimationCSSEnded ? scrollToNext() : null;
   //
    return (
        <>
        <div className="bg-black w-full h-screen flex relative">
        <div className="flex flex-row absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-full w-[95%]" > 
        <CssAnimationLeft />
        <CssAnimationName/>
        <CssAnimationRight />
        </div>
        <CssAnimationWelcomeText setIsAnimationCSSEnded={setIsAnimationCSSEnded} />
        </div>
        </>
    )
}
export default Section1_Part2;