import React from "react";
import "../styles/Button.css";

interface ButtonProps {
    children?: React.ReactNode;
    type: "galaxy" | "lifted";
    onClick: () => void;
    buttonNativeProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export class Button extends React.Component<ButtonProps> {
    render() {
        const {children, type, onClick, buttonNativeProps} = this.props;
        return (
            <button className={type} onClick={onClick} {...buttonNativeProps}>
                <span>{children}</span>
            </button>
        );
    }
}
