import "@css/link.css";

interface LinkProps {
    href: string;
    text?: string;
    icon?: string;
}

function Link({href, text, icon}: LinkProps) {

    return (
        <div className={"link"}>
            {icon}

            <a className={'styles-link'} href={href}>{text}</a>

        </div>
    )
}

export default Link
