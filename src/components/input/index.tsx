import classNames from "classnames";
import React, { FC } from "react";

type Props = {
  placeholder?: string;
  value?: string;
  containerClassName?: string;
  className?: string;
  onChange?: any,
  error?: boolean
};

export const Input = ({
  placeholder,
  value,
  containerClassName,
  className,
  onChange,
  error,
  ...props
}: Props) => {
  return (
    <div className={classNames(containerClassName, error ? 'border-red-400 error' : '', 'border-b')}>
      <input
        onChange={e => onChange(e)}
        className={classNames(className, error && 'placeholder-red-400', 'focus:ring-brand-yellow font-Courier focus:border-brand-yellow focus:shadow-outline border-none focus:outline-none')}
        placeholder={placeholder}
        value={value}
        {...props}
      />
    </div>
  );
};
