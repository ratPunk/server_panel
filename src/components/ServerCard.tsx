import "@css/servercard.css";
import Button from "@components/Button";
import {useNavigate} from "react-router-dom";


type ServerCard = {
    serverName: string;
    serverId: string;
    serverState: string;
}

interface CardProps {
    cardItem: ServerCard;
}

function TariffCard({cardItem}: CardProps) {
    const navigate = useNavigate();

    const getServerStatusText = (state: string): string => {
        switch (state) {
            case 'on':
                return 'Включён';
            case 'pause':
                return 'Приостановлен';
            case 'off':
                return 'Выключен';
            default:
                return state;
        }
    };

    const handleClick = (serverId: string) => {
        return () => { // Возвращаем функцию, а не вызываем сразу
            navigate(`/account/serverpanel?serverid=${serverId}`);
        };
    };

    return (
        <>
            <div className="card-server fadeInUp">
                <div className="card-header">
                    <h2 className="server-name">{cardItem.serverName}</h2>
                    <span className={`server-status server-${cardItem.serverState}`}>
                    {getServerStatusText(cardItem.serverState)}
                    </span>
                </div>
                <div className="card-footer">
                    <span className="server-id">#{cardItem.serverId}</span>
                    {cardItem.serverId && <Button onClick={handleClick(cardItem.serverId)} text={"Панель управления"}/>}
                </div>
                </div>
            </>
            )
            }

            export default TariffCard
