"use client";
import React, { useEffect } from "react";

export default function ModelViewer({ glbSrc, usdzSrc, alt = "3D model" }) {
  useEffect(() => {
    // Dynamically load model-viewer script only on client
    if (!window.customElements.get("model-viewer")) {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js";
      document.head.appendChild(script);
    }
  }, []);

  return (
    <model-viewer
      src={glbSrc}
      alt={alt}
      ar
      ar-modes="scene-viewer quick-look webxr"
      auto-rotate
      camera-controls
      style={{ width: "100%", height: "400px", background:"#e2e2e2" }}
    />
  );
}
