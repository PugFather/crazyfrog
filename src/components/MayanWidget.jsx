import { useEffect, useRef } from "react";
import loadMayan from "./loadMayan";

export default function Widget() {
  const mayan = useRef();
  useEffect(() => {
    (async function () {
      const mayanInstance = await loadMayan();
      mayan.current = mayanInstance;
      const config = {
        appIdentity: {
          name: "CrazyFrog",
          icon: "./logo.png",
          uri: "https://crazyfrog-five.vercel.app",
        },
      };
      mayan.current.init("mayanContainer", config);
    })();
    return () => {
      if (mayan.current && mayan.current.destroy) {
        mayan.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <div id="mayanContainer" />
    </div>
  );
}
