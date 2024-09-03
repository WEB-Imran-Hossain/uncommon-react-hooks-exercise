import React, { useInsertionEffect } from 'react';

function MyComponent() {
  // This style will be applied to our component
  const myStyle = `
    body {
     color: #ff0066; /* Bright pink color for the text */
    }
  `;

  // useInsertionEffect runs BEFORE the browser paints the screen
  useInsertionEffect(() => {
    // Inject the style into the document's head section
    const styleElement = document.createElement('style');
    styleElement.innerHTML = myStyle;
    document.head.appendChild(styleElement);

    // Cleanup: Remove the style when the component unmounts
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []); // Empty dependency array means this runs only once, when the component mounts

  // This is what our component will render
  return <h1 className='my-10 text-center'>Hello, world!</h1>;
}

export default MyComponent;