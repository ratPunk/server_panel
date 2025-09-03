import "@css/marquee.css";

interface MarqueeProps {
    text: string;
    count: number;
    display?: string | undefined;
}

function Marquee({text = "🔥 Скидка 20% на все серверы этой недели! 🔥", count = 8, display}: MarqueeProps) {

    const spanArray: any[] = new Array(count).fill(String(text));

    return (
        <>
        <div className="marquee-container" style={{display: display}}>
            <div className="marquee-content">
                {spanArray.map((item) => (
                    <span>{item}</span>
                ))}
            </div>
        </div>
        </>
)
}

export default Marquee
