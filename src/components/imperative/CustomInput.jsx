import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  // Expose the focusInput method to the parent
  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    },
  }));

  return <input ref={inputRef} placeholder="Enter text here..." className='my-10 text-center' />;
});

export default CustomInput;
