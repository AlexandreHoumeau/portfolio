import React, { FC } from "react";

export type IButton = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const IconButton: FC<IButton> = ({
  className = "",
  children,
  ...rest
}) => {
  return (
    <div className="relative z-50">
      <button
        className={`
        rounded-full z-50 relative font-Constructio active:translate-x-1 active:translate-y-1 border-2 border-black md:h-[54px] md:w-[54px] h-[27px] w-[27px] p-1 flex justify-center items-center
        ${className}
      `}
        {...rest}
      >
        {children}
      </button>
      <div className="bg-black absolute md:h-[54px] md:w-[54px] h-[27px] w-[27px] z-10 top-1 -right-1 rounded-full" />
    </div>
  );
};
