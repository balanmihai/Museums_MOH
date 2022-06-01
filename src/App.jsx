import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "Build/src.loader.js",
  dataUrl: "Build/src.data.unityweb",
  frameworkUrl: "Build/src.framework.js.unityweb",
  codeUrl: "Build/src.wasm.unityweb",
});

function App() {
  return (
      <>
        <div className="container">
          <Unity style={{
            width:"800px",
            height:"auto"
          }} unityContext={unityContext} />
        </div>
      </>
  )
}
export default App