import React, { useRef } from 'react';
import Draggable from 'react-draggable';

function App() {
  const iframeRef = useRef(null);
  return (
    <Draggable
        axis="both"
        handle=".draggable-handle"
      >
    <div ref={iframeRef}>
      
        <iframe
          
          className="draggable-handle"
          src="https://example.com" 
          title="Draggable Iframe"
          style={{border: "10px solid black"}}
        />
      
    </div>
    </Draggable>
  );
}

export default App;