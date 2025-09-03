import "@css/card.css";
import type { ReactNode } from "react";

interface CardProps {
    title?: string;
    children?: ReactNode; // Заменяем content на children
}

function Card({ title, children }: CardProps) {
    return (
        <div className={"card"} data-title={title}>
            {children} {/* Используем children вместо content */}
        </div>
    );
}

export default Card;