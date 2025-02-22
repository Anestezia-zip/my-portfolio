import { Html, useProgress } from "@react-three/drei";
import placeholderImage from "/assets/dekstop-pic.png";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html  
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "250px"
      }}
    >
      <div>
        <img
          src={placeholderImage}
          alt="3D Model Placeholder"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        <p style={{ fontSize: "20px", color: "#fff", marginTop: "10px", textAlign: "center" }}>
          {progress.toFixed(0)}%
        </p>
      </div>
    </Html>
  );
};

export default CanvasLoader;
