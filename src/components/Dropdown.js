import { useEffect, useState, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef(); // divEl.current will give us a direct reference to the element

  // run this the first time Dropdown componenet is rendered
  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }
      // if there's a click event, but target is not the dropdown box, we should close the dropdown
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    // watch for click event anywhere in the document
    // ran the handler whenever click happens
    document.addEventListener('click', handler, true);
    
    // this is a hidden feature for useEffect
    // will be called when dropdown component got removed from the screen
    // this will be different is second arg is not an empty array
    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    // CLOSE DROPDOWN
    setIsOpen(false);
    // WHAT OPTION DID THE USER CLICK ON???
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || 'Select...'}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
