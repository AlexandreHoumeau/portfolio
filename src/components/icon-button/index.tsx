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
    <button
      className={`
        rounded-full font-Constructio active:border-b-2 active:border-r-2 border-b-4 border-r-4 z-10 border-2 border-black h-[54px] w-[54px] flex justify-center items-center
        ${className}
      `}
      {...rest}
    >
      {children}
    </button>
  );
};
