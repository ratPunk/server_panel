import * as React from 'react';
import "@css/myserver.css";
import BannerNavigation from "@components/BannerNavigation";
import server from "@images/minecraft.png";
import ServerCard from "@components/ServerCard";

type ServerCard = {
    serverName: string;
    serverId: string;
    serverState: string;
}

const ServerCardsData: ServerCard[] = [
    {
        serverName: "Minecraft",
        serverId: "12-DA2-F3F-J46",
        serverState: "pause"
    },
    {
        serverName: "Minecraft",
        serverId: "12-DA2-F3F-J46",
        serverState: "on"
    },
    {
        serverName: "Minecraft",
        serverId: "12-DA2-F3F-J46",
        serverState: "off"
    },
]

function MyServer() {

    return (
        <>
            <div id={"MyServer"}>
                <BannerNavigation image={server} mainText={"Мои сервера"}/>
                <div className={"container"}>
                    {ServerCardsData.map(( item) => (
                        <ServerCard
                            cardItem={item}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default MyServer
