'use client';
import React from "react";
import { motion } from "framer-motion";

type ShapesPageProps = {
    visible: boolean;
    type: string;
};

const ShapesPage: React.FC<ShapesPageProps> = ({ visible, type}) => {
//
let color: string = "";
let windowPosition = 500;
let width: string = "368", height: string = "645", viewBox: string = "0 0 368 645", x: string = "356.02", y: string = "711.692", rectWidth: string = "792", rectHeight: string = "16", rx: string = "8", transform: string = "rotate(-116.875 356.02 711.692)";

switch (type) {
    case "tube-left":
     color = "#28F498";
     windowPosition = - 500;
     width = width;
     height= height;
     viewBox= viewBox
     x=x; 
     y=y; 
     rectWidth= rectWidth;
     rectHeight= rectHeight;
     rx=rx;
     transform=transform;
     break;
    case "tube-right":
     color = "rgba(244, 196, 40, 1)";
     windowPosition = -300;
     width = "573";
     height= "443";
     viewBox= "0 0 573 443";
     x="-3"; 
     y="549.201"; 
     rectWidth= "792";
     rectHeight= "16";
     rx="8";
     transform="rotate(-44.2047 -3 549.201)";
     break;
}
//
return (
    <div>
    <motion.div
    initial={{ y: -200, opacity: 0 }}
    animate={
        // visible ? { y: 0, opacity: 1 } : {}
        visible
          ? {
              y: typeof window !== "undefined" ? window.innerHeight + windowPosition: 600, // fall near bottom
              opacity: 1,
            }
          : {}
    }
    // transition={{ type: "spring", stiffness: 60 }}
    transition={{ type: "spring", stiffness: 70, damping: 10 }}
    >
    <svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x={x} y={y} width={rectWidth} height={rectHeight} rx={rx} transform={transform} fill={color} fillOpacity="0.9"/>
    </svg>
    </motion.div>
</div>
);
}

export default ShapesPage;