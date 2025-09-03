import "@css/byserver.css"
import Marquee from "@components/Marquee";
import server from "@images/server.jpg";
import minecraft from "@images/minecraft-cherry.png";
import BannerNavigation from "@components/BannerNavigation";
import * as React from "react";
import TariffCard from "@components/TariffCard";

interface CardProps {
    price: number;
    tariffName: string;
    image?: string;
    isFavorite?: boolean;
    processor: string;
    memory: string;
    storage: string;
    network: string;
    description: string;
}

const tariffCardsData: CardProps[] = [
    {
        price: 14500,
        tariffName: "Pulpy PRO",
        image: minecraft,
        isFavorite: false,
        processor: "Intel Xeon E-2288G (8 cores, 3.7GHz)",
        memory: "64 GB DDR4 ECC",
        storage: "2x512 GB NVMe SSD (RAID 1)",
        network: "1 Gbps Unlimited",
        description: "Выделенный физический сервер для максимальной производительности и контроля. Подходит для высоконагруженных систем и корпоративных приложений."
    },
    {
        price: 8900,
        tariffName: "Pulpy STANDARD",
        image: minecraft,
        isFavorite: false,
        processor: "Intel Xeon E-2276G (6 cores, 3.8GHz)",
        memory: "32 GB DDR4",
        storage: "1x512 GB NVMe + 1x1TB HDD",
        network: "500 Mbps Guaranteed",
        description: "Сбалансированный сервер для средних нагрузок. Идеален для веб-приложений и баз данных."
    },
    {
        price: 5200,
        tariffName: "Pulpy BASIC",
        image: minecraft,
        isFavorite: true,
        processor: "Intel Xeon E-2246G (6 cores, 3.6GHz)",
        memory: "16 GB DDR4",
        storage: "480 GB SSD",
        network: "100 Mbps Standard",
        description: "Бюджетное решение для небольших проектов и тестовых сред."
    },
    {
        price: 21800,
        tariffName: "Quantum EXTREME",
        image: minecraft,
        isFavorite: true,
        processor: "AMD EPYC 7742 (64 cores, 2.25GHz)",
        memory: "128 GB DDR4 ECC",
        storage: "4x1TB NVMe SSD (RAID 10)",
        network: "10 Gbps Premium",
        description: "Мощнейший сервер для ресурсоемких задач: машинное обучение, рендеринг, Big Data обработка."
    },
    {
        price: 7600,
        tariffName: "WebMaster PRO",
        image: minecraft,
        isFavorite: false,
        processor: "Intel Xeon E-2236 (6 cores, 3.4GHz)",
        memory: "24 GB DDR4",
        storage: "2x240 GB SSD (RAID 1)",
        network: "300 Mbps Unlimited",
        description: "Оптимизирован для веб-хостинга. Поддержка PHP, Node.js, Python. Ежедневные бэкапы."
    },
    {
        price: 12300,
        tariffName: "Database MASTER",
        image: minecraft,
        isFavorite: false,
        processor: "Intel Xeon Gold 6226R (16 cores, 2.9GHz)",
        memory: "48 GB DDR4 ECC",
        storage: "2x960 GB SSD + 4x2TB HDD (RAID 5)",
        network: "1 Gbps Low Latency",
        description: "Специализированный сервер для СУБД. Высокая скорость IOPS и отказоустойчивость."
    },
    {
        price: 3200,
        tariffName: "StartUp LITE",
        image: minecraft,
        isFavorite: true,
        processor: "Intel Xeon E-2136 (6 cores, 3.3GHz)",
        memory: "8 GB DDR4",
        storage: "240 GB SSD",
        network: "50 Mbps Standard",
        description: "Идеальный старт для начинающих проектов. Бесплатная миграция и техподдержка 24/7."
    },
    {
        price: 18700,
        tariffName: "GameServer ULTRA",
        image: minecraft,
        isFavorite: false,
        processor: "AMD Ryzen 9 5950X (16 cores, 3.4GHz)",
        memory: "64 GB DDR4",
        storage: "2x1TB NVMe SSD",
        network: "2 Gbps Gaming Optimized",
        description: "Оптимизирован для игровых серверов. Низкий пинг, DDoS защита, автоматические обновления."
    },
    {
        price: 9500,
        tariffName: "Media STREAM",
        image: minecraft,
        isFavorite: true,
        processor: "Intel Xeon E-2388G (8 cores, 3.2GHz)",
        memory: "32 GB DDR4",
        storage: "2x480 GB SSD + 4TB HDD",
        network: "1 Gbps Unlimited Traffic",
        description: "Сервер для стриминга и медиа контента. Поддержка GPU ускорения для кодирования видео."
    },
    {
        price: 14500,
        tariffName: "Enterprise SECURE",
        image: minecraft,
        isFavorite: false,
        processor: "Intel Xeon Silver 4310 (12 cores, 2.1GHz)",
        memory: "64 GB DDR4 ECC",
        storage: "2x800 GB SSD (Hardware RAID)",
        network: "1 Gbps with VPN",
        description: "Корпоративное решение с enhanced security. Шифрование данных, isolated network, аудит доступа."
    },
    {
        price: 2800,
        tariffName: "Dev TEST",
        image: minecraft,
        isFavorite: true,
        processor: "Intel Xeon E-2124 (4 cores, 3.3GHz)",
        memory: "4 GB DDR4",
        storage: "120 GB SSD",
        network: "30 Mbps Development",
        description: "Тестовый стенд для разработчиков. Доступ к Docker, Kubernetes, CI/CD инструментам."
    },
    {
        price: 16500,
        tariffName: "AI ACCELERATOR",
        image: minecraft,
        isFavorite: false,
        processor: "AMD EPYC 7B12 (64 cores, 2.25GHz)",
        memory: "96 GB DDR4",
        storage: "2x2TB NVMe SSD",
        network: "1 Gbps Research",
        description: "Сервер для AI/ML задач. Поддержка GPU вычислений, предустановленные фреймворки для deep learning."
    }
];

function ByServer() {

    return (
        <>
            <div id={"ByServer"}>
                <BannerNavigation image={server} mainText={"Создать сервер"}/>
                <Marquee />
                <div className="tariff-section-label">
                    <div className={"label-tariff fadeInDown"}><h1>Популярные</h1></div>
                    <div className={"secondary-label-tariff fadeInUp"}><h3>Выбирают чаще всего из-за оптимального соотношения цена-качество</h3></div>
                </div>

                <div className={"container-favorite-tariff"}>
                    {tariffCardsData
                        .filter(item => item.isFavorite === true)
                        .map(item => (
                            <TariffCard
                                cardItem={item}
                                isFavorite={item.isFavorite}
                            />
                        ))
                    }

                </div>

                <div className="tariff-section-label">
                    <div className={"label-tariff fadeInDown"}><h1>Все сервера</h1></div>
                    <div className={"secondary-label-tariff fadeInUp"}><h3>Замечательные предложения, среди которых вы
                        сможете подобрать сервер под себя</h3></div>
                    <div className={"container-favorite-tariff"}>
                        {tariffCardsData
                            .filter(item => item.isFavorite === false)
                            .map(item => (
                                <TariffCard
                                    cardItem={item}
                                    isFavorite={item.isFavorite}
                                />
                            ))
                        }
                    </div>
                    </div>
                </div>
            </>
            )
            }

            export default ByServer
