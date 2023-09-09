import React from "react";
import "../styles/Button.css";

interface ButtonProps {
    children?: React.ReactNode;
    type: "galaxy" | "lifted";
    onClick: () => void;
    style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({children, type, onClick, style}) => (
    <button style={style} className={type} onClick={onClick}>
        <span>{children}</span>
    </button>
);
