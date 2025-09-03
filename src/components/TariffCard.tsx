import "@css/tariffcard.css";
import Button from "@components/Button";
import { LuMemoryStick} from "react-icons/lu";
import {GrStorage} from "react-icons/gr";
import {MdNetworkCheck} from "react-icons/md";
import {HiOutlineCpuChip} from "react-icons/hi2";


type Tariff = {
    price: number;
    tariffName: string;
    image?: string;
    processor: string;
    memory: string;
    storage: string;
    network: string;
    description: string;
    isFavorite?: boolean;
}

interface CardProps {
    cardItem:Tariff;
}

function TariffCard({cardItem}: CardProps) {

    const display: string = cardItem.isFavorite ? "" : "none";

    return (
        <>
            <div className='card-tariff'>
                <div className="server-card-horizontal">
                    <div className="server-badge" style={{display: display}}>Популярный</div>

                    <div className="server-image-container">
                    <img src={cardItem.image} alt="Dedicated Server" className="server-image-horizontal" loading="lazy"/>
                    </div>

                    <div className="server-content">
                        <h3 className="server-title">{cardItem.tariffName}</h3>

                        <div className="price-container">
                            <span className="server-price-horizontal">{new Intl.NumberFormat('ru-RU').format(cardItem.price)} ₽</span>
                            <span className="price-period">/месяц</span>
                        </div>

                        <div className="specs-grid">
                            <div className="spec">
                                <HiOutlineCpuChip size={24} color={"#fff"}/>
                                <div className="spec-value">{cardItem.processor}</div>
                                <div className="spec-label">Процессор</div>
                            </div>
                            <div className="spec">
                                <LuMemoryStick size={24} color={"#fff"}/>
                                <div className="spec-value">{cardItem.memory}</div>
                                <div className="spec-label">Память</div>
                            </div>
                            <div className="spec">
                                <GrStorage size={24} color={"#fff"}/>
                                <div className="spec-value">{cardItem.storage}</div>
                                <div className="spec-label">Хранилище</div>
                            </div>
                            <div className="spec">
                                <MdNetworkCheck size={24} color={"#fff"}/>
                                <div className="spec-value">{cardItem.network}</div>
                                <div className="spec-label">Сеть</div>
                            </div>
                        </div>

                        <p className="server-description">
                            {cardItem.description}
                        </p>

                        <Button text={"Выбрать"}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TariffCard
