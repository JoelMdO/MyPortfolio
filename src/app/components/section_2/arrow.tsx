interface ArrowProps {
  type: string;
  isTaller: { isBoolean: boolean; heightMeasure: number };
  isDarkMode: boolean;
}

const Arrow: React.FC<ArrowProps> = ({ type, isTaller, isDarkMode }) => {
  //
  let color: string = "#f00";
  //--------------------------------------------------------
  // To define the position on tall mobiles.
  ///--------------------------------------------------------
  let mobilePosition: string = "top-[75vh] left-[2vw]";
  let tallMobilePosition: string = "top-[85vh] left-[2vw]";
  let desktoPosition: string = "md:bottom-[8vh] md:left-[10vw]";
  //
  let moreProperties: string = "rotate-6 scale-y-[-1]";
  //
  switch (type) {
    case "blue":
      color = "rgba(56, 111, 159, 1)";
      mobilePosition = "top-[10vh] left-[1vw]";
      tallMobilePosition = "top-[15vh] left-[7.5vw]";
      desktoPosition = "md:top-[14vh] md:left-[10vw]";
      moreProperties = "";
      break;
    case "blue-1":
      color = "rgba(56, 111, 159, 1)";
      mobilePosition = "top-[75vh] left-[65vw]";
      tallMobilePosition = "top-[80vh] left-[65vw]";
      desktoPosition = "md:bottom-[4vh] md:left-[80vw]";
      moreProperties = "scale-x-[-1]";
      break;
    default:
      color = color;
      mobilePosition = mobilePosition;
      tallMobilePosition = tallMobilePosition;
      desktoPosition = desktoPosition;
      moreProperties = moreProperties;
      break;
  }
  return (
    <>
      <div
        className={`w-[70px] h-[70px] md:w-[120px] md:h-[120px] flex relative  ${moreProperties} ${desktoPosition} ${
          isTaller.isBoolean ? tallMobilePosition : mobilePosition
        }`}
      >
        <svg
          width="300"
          height="200"
          viewBox="0 0 514 513"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter
              id="drop-shadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feDropShadow
                dx="5"
                dy="5"
                stdDeviation="5"
                floodColor={`${isDarkMode ? "white" : "black"}`}
              />
            </filter>
          </defs>
          <path
            id="animatedPath"
            d="M513.437 512.317L511.674 511.141M511.674 511.141L134.19 259.397L300.8 0.872364L237.477 19.6578L1.71483 289.148L439.62 512.334L511.674 511.141Z"
            stroke={color}
            strokeWidth="3"
            fill={color}
            filter="url(#drop-shadow)"
          />
        </svg>
      </div>
    </>
  );
};

export default Arrow;
