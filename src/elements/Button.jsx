import React from "react";
import "../styles/Button.css";

export class Button extends React.Component {
    render() {
        const {children, type, onClick, buttonNativeProps} = this.props;
        return (
            <button className={type} onClick={onClick} {...buttonNativeProps}>
                <span>{children}</span>
            </button>
        );
    }
}
