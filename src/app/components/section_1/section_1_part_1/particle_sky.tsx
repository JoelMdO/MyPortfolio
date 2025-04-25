// import { useCallback } from "react";
// import { Container, Engine } from "tsparticles-engine";
// import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles-slim";

// export default function ParticleSky() {
//     //
//     const particlesInit = useCallback(async (engine: Engine) => {
//       console.log(engine);
//       await loadSlim(engine);
//     }, []);
    
//     const particlesLoaded = useCallback(async (container: Container | undefined) => {
//       await console.log(container);
//     }, []);
//     //
//     return (
//       <>
//        <Particles
//           id="tsparticles"
//           init={particlesInit}
//           loaded={particlesLoaded}
//           options={{
//             particles: {
//               color: { value: "#88ccff" },
//               size: { value: 2 },
//               move: {
//                 enable: true,
//                 direction: "left",
//                 outModes: "out",
//                 speed: 2,
//               },
//               number: {
//                 value: 5, // 0 is okay if you're using emitters
//                 density: { enable: true, area: 800 },
//               },
//             },
//             emitters: {
//               direction: "left",
//               position: { x: 50, y: 50 }, // % of screen width & height
//               rate: {
//                 quantity: 5,
//                 delay: 0.1,
//               },
//             },
//           }}
//         />
//         </>
//     );
//   }