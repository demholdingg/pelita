import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-8 py-3 rounded-md font-semibold transition-all duration-300 text-sm md:text-base";

  const variants = {
    primary: "bg-amber-400 text-green-900 hover:bg-amber-500",
    secondary: "bg-green-900 text-white hover:bg-green-800",
    outline:
      "border-2 border-white text-white hover:bg-white hover:text-green-900",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
