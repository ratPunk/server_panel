import "@css/button.css";

interface ButtonProps {
    text: string;
    onClick?: () => void;
    color?: string;
    icon?: string;
}

function Button({text, onClick, color, icon}: ButtonProps) {

    return (
        <>
            <button className={"button"} style={{backgroundColor: color}} onClick={onClick}>{icon} <span>{text}</span></button>
        </>
    )
}

export default Button
