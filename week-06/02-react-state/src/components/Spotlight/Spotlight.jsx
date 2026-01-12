import { useEffect, useState } from "react";
import './Spotlight.css'

export default function Spotlight({ position }) {
  const [flicker, setFlicker] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlicker(0.8 + Math.random() * 0.4); 
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="overlay"></div>
      <div
        className="spotlight"
        style={{
          left: position.x + 32,
          top: position.y + 32,
          transform: `translate(-50%, -50%) scale(${flicker})`,
        }}
      />
    </>
  );
}
