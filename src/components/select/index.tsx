import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
type Props = {
  placeholder?: string;
  value?: string;
  containerClassName?: string;
  className?: string;
  options?: string[];
  onChange?: any;
};

export const Select = ({ options = [], placeholder, onChange, value }: Props) => {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState("");
  const wrapperRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setSelected(value)
  }, [value])

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: { target: any }) {
      if (wrapperRef.current && !wrapperRef.current?.contains(event.target)) {
        setActive(false)
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const handleChange = (option: string) => {
    setSelected(option) 
    onChange(option)
  }

  return (
    <div
      ref={wrapperRef}
      onClick={() => setActive(!active)}
      className="border-b cursor-pointer relative min-w-[200px]"
    >
      <div
        className={classNames(
          selected ? "text-black" : "text-gray-400 text-center",
          "font-CourierBold"
        )}
      >
        {selected || placeholder}
      </div>
      {active && (
        <div className="absolute bg-white min-w-[200px] space-y-4  border-black border-4 rounded-lg top-6">
          {options.map((option) => (
            <div
              onClick={() => handleChange(option)}
              className="cursor-pointer border-b p-2 hover:font-CourierBold"
              key={option}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
