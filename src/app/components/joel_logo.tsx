import React, { useRef } from "react"
import Image from "next/image";
import '../styles/section_2/joel_logo.css';

interface JoelLogoProps {
    isTaller: {isBoolean: boolean, heightMeasure: number};
    nextSectionRef: React.RefObject<HTMLDivElement | null>;
}

const JoelLogo: React.FC<JoelLogoProps> = ({isTaller, nextSectionRef}) => {
    //
    const mobilePosition: string = "top-[55vh] left-[20vw]";
    const tallMobilePosition: string = "top-[57vh] left-[18vw]";
    //
    const scrollNext = () =>{
        nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    //

    return (
        <>
        <div className={`joel-logo flex relative ${isTaller.isBoolean? tallMobilePosition : mobilePosition} md:top-[60vh] md:left-[25vw] md:m-1`}>
        <button className="cursor-pointer" type="button" onClick={scrollNext}>{} 
        <Image src="/JoeLogo2025.png" width={80} height={80} alt="Joel Logo"/>
        </button>
        </div>
        </>
    )
}

export default JoelLogo;