import React from "react";
import { OrbitControls, CameraShake } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Particles } from "../../components/Particles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import audio from "../../media/audio.mp3";

const Home = () => {
  const [props, setProps] = React.useState({
    focus: 3.72,
    speed: 63.4,
    aperture: 2.6,
    fov: 54,
    curl: 0.5,
  });
  const audioRef = React.useRef(null);
  const [hasStarted, setHasStarted] = React.useState(false);

  const handleOnClick = (type) => {
    // if (type==='noise')


    if (hasStarted) {
      setProps({
        focus: 3.72,
        speed: 63.4,
        aperture: 2.6,
        fov: 54,
        curl: 0.5,
      });
      audioRef.current.pause();
    } else {
      setProps({
        focus: 3.27,
        speed: 15.9,
        aperture: 4.2,
        fov: 54,
        curl: 0.1,
      });
      audioRef.current.play();
    }
    setHasStarted(_flag => !_flag);
  };
  // const props = useControls({
  //   focus: { value: 5.1, min: 3, max: 7, step: 0.01 },
  //   speed: { value: 100, min: 0.1, max: 100, step: 0.1 },
  //   aperture: { value: 1.8, min: 1, max: 5.6, step: 0.1 },
  //   fov: { value: 50, min: 0, max: 200 },
  //   curl: { value: 0.25, min: 0.01, max: 0.5, step: 0.01 },
  // });
  return (
    <>
      <Box sx={{ width: "100%", height: "90%" }}>
        <Canvas height="600px">
          <OrbitControls
            makeDefault
            autoRotate
            autoRotateSpeed={0.5}
            zoomSpeed={0.1}
          />
          <CameraShake
            yawFrequency={1}
            maxYaw={0.05}
            pitchFrequency={1}
            maxPitch={0.05}
            rollFrequency={0.5}
            maxRoll={0.5}
            intensity={0.2}
          />
          <Particles {...props} />
        </Canvas>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "0",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Button onClick={handleOnClick}>{hasStarted ? "Stop" : "Start"}</Button>
      </Box>
      <audio controls autoPlay ref={audioRef} style={{ display: "none" }}>
        <source src={audio} type="audio/mpeg" />
      </audio>
    </>
  );
};

export default Home;
