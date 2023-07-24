import { clsx } from "clsx";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "bg-blue-500 text-white py-1 px-4 rounded-sm border cursor-pointer whitespace-nowrap",
        "hover:bg-blue-700 hover:border-transparent",
        props.className
      )}
    />
  );
};
