import "../styles/Button.css";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps {
    children?: ReactNode;
    type: "galaxy" | "lifted";
    onClick: () => void;
    buttonNativeProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}

export const Button: FC<ButtonProps> = ({children, type, onClick, buttonNativeProps}) => (
    <button className={type} onClick={onClick} {...buttonNativeProps}>
        <span>{children}</span>
    </button>
);
