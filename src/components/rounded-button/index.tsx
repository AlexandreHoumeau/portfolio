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
      <button
        className={`rounded-full bg-white font-Constructio active:border-b-2 active:border-r-2 border-b-4 border-r-4 z-10 border-2 border-black h-[54px] w-[200px] ${className}`}
        {...rest}
      >
        {children}
      </button>
  );
};
