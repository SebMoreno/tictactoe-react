import React from "react";
import "../styles/Button.css";

interface ButtonProps {
    children?: React.ReactNode;
    type: "galaxy" | "lifted";
    onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({children, type, onClick}) => (
    <button className={type} onClick={onClick}>
        <span>{children}</span>
    </button>
);
