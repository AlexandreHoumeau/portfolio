import React from "react";

export type IButton = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: React.FC<IButton> = ({
  className = "",
  children,
  ...rest
}) => {
  return (
    <div className="relative z-10 -rotate-2">
      <button
        className={`w-[200px] h-[50px] active:translate-x-1 active:translate-y-1 relative text-black rounded z-50 border-black border-2 text-2xl font-Courier ${className}`}
        {...rest}
      >
        {children}
      </button>
      <div className="bg-black absolute w-[200px] z-10 h-[50px] top-1 -right-1 rounded" />
    </div>
  );
};
