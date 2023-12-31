import React from "react";
import "../styles/Button.css";

interface ButtonProps {
    children?: React.ReactNode;
    type: "galaxy" | "lifted";
    onClick: () => void;
    buttonNativeProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({children, type, onClick, buttonNativeProps}) => (
    <button className={type} onClick={onClick} {...buttonNativeProps}>
        <span>{children}</span>
    </button>
);
