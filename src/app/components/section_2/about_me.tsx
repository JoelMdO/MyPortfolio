import '../../styles/section_2/about_me.css';

interface AboutMeProps {
    isTaller: {isBoolean: boolean, heightMeasure: number};
}

const AboutMe: React.FC<AboutMeProps> = ({ isTaller }) => {
    
    //
    ///--------------------------------------------------------
    // To define the position on tall mobiles.
    ///--------------------------------------------------------
    const mobilePosition: string = "top-[15vh] left-[15vw]";
    const tallMobilePosition: string = "top-[20vh] left-[19vw]";
    //

    return (
        <>
          <div className={`absolute ${isTaller.isBoolean? tallMobilePosition : mobilePosition } w-full md:top-[15vh] md:left-[16vw]`}>
        <h2>
            <span className="font-geist-krona-one font-bold text-2xl md:text-4xl text-blue-letters dark:text-white-letters">About me:</span>
        </h2>
        </div>
        </>
    )
}

export default AboutMe;