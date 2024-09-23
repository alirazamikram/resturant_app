import React from "react";

// Define the types for your props
interface ButtonProps {
  onClick?: () => void; // Optional onClick handler
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type = "button",
  disabled = false,
  className = "",
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
