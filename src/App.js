import React, { useRef } from 'react';
import Draggable from 'react-draggable';

function App() {
  const iframeRef = useRef(null);
  return (
    <Draggable
        axis="both" // Allow dragging in both x and y directions
        handle=".draggable-handle"
      >
    <div ref={iframeRef}>
      
        <iframe
          
          className="draggable-handle"
          src="http://localhost:5173/" // Replace with your desired iframe URL
          title="Draggable Iframe"
          style={{border: "2px solid black"}}
        />
      
    </div>
    </Draggable>
  );
}

export default App;