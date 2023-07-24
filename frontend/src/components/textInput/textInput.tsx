import { clsx } from "clsx";
import { InputHTMLAttributes } from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const TextInput = (props: TextInputProps) => {
  return (
    <input
      {...props}
      className={clsx(
        "bg-white py-1 px-4 block w-full",
        "appearance-none leading-normal",
        "border border-gray-300 rounded-sm",
        "focus:outline-none focus:shadow-outline",
        props.className
      )}
    />
  );
};
