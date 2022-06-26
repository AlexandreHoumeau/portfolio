import React, { FC } from "react";

export type IButton = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const RoundedButton: FC<IButton> = ({
  className = "",
  children,
  ...rest
}) => {
  return (
    <div className="relative z-10">
      <button
        style={{ fontFamily: 'Constructio'}}
        className={`rounded-full relative bg-white font-Constructio active:translate-x-1 active:translate-y-1 z-50 border-2 border-black md:h-[54px] h-[27px] md:w-[200px] w-[100px] ${className}`}
        {...rest}
      >
        {children}
      </button>
      <div className="bg-black absolute md:h-[54px] h-[27px] md:w-[200px] w-[100px] z-10 top-1 -right-1 rounded-full" />
    </div>
  );
};
