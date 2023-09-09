import "../styles/Button.css";

export const Button = ({children, type, onClick, buttonNativeProps}) => (
    <button className={type} onClick={onClick} {...buttonNativeProps}>
        <span>{children}</span>
    </button>
);
