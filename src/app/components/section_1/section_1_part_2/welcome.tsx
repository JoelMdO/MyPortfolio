import '../../../styles/text_welcome.css';
import text from '../../../constants/text.json'
import { useEffect } from 'react';

type AnimationProps = {
    onAnimationEnd: () => void;
    isAnimationEnded: boolean;
  };

const WelcomeText: React.FC<AnimationProps> = ({ onAnimationEnd, isAnimationEnded }) => {
    //
    useEffect(() => {
        // Example: call after animation duration
        const timer = setTimeout(() => {
          onAnimationEnd();
        }, 12000); // match your animation time
    
        return () => clearTimeout(timer);
      }, []);
    //
    return (    
        <>
        <h2 className=' text-2xl md:text-6xl'>
        <span className="green">{text.Section_1["Neon-Green"]}</span>
        <span className="white">{text.Section_1["Neon-White"]}</span>
        <span className="red">{text.Section_1["Neon-Red"]}</span>
        </h2>
        </>
    )
}

export default WelcomeText;
