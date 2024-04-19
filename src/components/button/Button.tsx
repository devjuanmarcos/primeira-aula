import { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "normal" | "large";
  width?: "fit" | "full";
}

export const Button = ({ text, variant = "primary", size = "normal", width = "full" }: ButtonProps) => {
  let buttonClass = "transition-colors duration-300 font-semibold ";

  switch (variant) {
    case "primary":
      buttonClass +=
        "hover:bg-var-component-button-hover text-var-font-button bg-var-component-button-background ";
      break;
    case "secondary":
      buttonClass += "border border-var-component-button-border text-var-font-heading hover:bg-gray-200 ";
      break;
    case "tertiary":
      buttonClass += "";
      break;
    default:
      break;
  }

  switch (size) {
    case "small":
      buttonClass += "p-0.5 text-[0.75rem] rounded-[0.225rem] ";
      break;
    case "normal":
      buttonClass += "p-2 text-[0.875rem] rounded-md ";
      break;
    case "large":
      buttonClass += "p-3 rounded-md ";
      break;
    default:
      break;
  }

  if (width == "fit") {
    buttonClass += "w-fit px-3";
  } else if (width == "full") {
    buttonClass += "w-full ";
  }

  return <button className={buttonClass}>{text}</button>;
};
