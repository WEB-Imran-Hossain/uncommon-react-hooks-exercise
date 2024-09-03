import React, { useRef } from 'react';
import CustomInput from './CustomInput';

const ParentComponent = () => {
  const inputRef = useRef();

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focusInput(); // Use the focusInput method from CustomInput
    }
  };

  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={handleFocus}>Focus the Input</button>
    </div>
  );
};

export default ParentComponent;