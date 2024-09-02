// src/components/Preview.js
import React, { useEffect, useRef } from "react";

const Preview = ({ html, css, js }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open();
    doc.write(`
      <!DOCTYPE html>
      <html>
      <head><style>${css}</style></head>
      <body>${html}<script>${js}</script></body>
      </html>
    `);
    doc.close();
  }, [html, css, js]);

  return (
    <iframe
          ref={iframeRef}
          title="review"
      style={{
        width: "100%",
        height: "100%",
        border: "1px solid #ccc",
        borderRadius: "4px",
        backgroundColor: "#fff",
      }}
    />
  );
};

export default Preview;
