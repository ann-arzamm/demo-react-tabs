import React, { useState } from 'react';

export default function Tab({ children }) {
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, opacity: 0 });

  function moveHighlight(e) {
    // update highlight to move the highlight
    setHighlightStyle({
      // browser's mouse movement event handler
      // layerX will calculate an offset from the left corner of the tab element
      // 150 is a half of the highlight element's width
      left: e.nativeEvent.layerX - 150,
    })
  }

  function hideHighlight(e) {
    setHighlightStyle({
      opacity: 0.8,
    })
  }

  return (
    <div className="tab" onMouseOut={hideHighlight} onMouseMove={moveHighlight}>
      <div className="highlight" style={highlightStyle} />
        {children}
    </div>
  )
}
