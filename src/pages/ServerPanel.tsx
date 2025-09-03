import * as React from 'react';
import "@css/serverpanel.css";
import SideBar from "@modules/SideBar";
import Button from "@components/Button";
import {FaPlay, FaPowerOff, FaStop} from "react-icons/fa6";
import {RiResetLeftLine} from "react-icons/ri";
import { useSearchParams } from 'react-router-dom';
import {FiCpu} from "react-icons/fi";
// import { LineChart } from '@mui/x-charts/LineChart';
// import { dataset, updateDataset } from '../typescript/DataSet';
// import {useEffect, useState} from "react";
import CPUChart from "@components/Charts/CPUChart";

function ServerPanel() {
    const [searchParams] = useSearchParams();
    const serverId = searchParams.get('serverid');

    // const [data, setData] = useState(dataset);
    //
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setData(updateDataset()); // Обновляем данные каждые 1.5 сек
    //     }, 350);
    //
    //     return () => clearInterval(interval);
    // }, []);

    return (
        <>
            <div id={"ServerPanel"}>
                <SideBar />
                <div id={"Panel"}>
                    <div className="server-info">
                        <div className="server-left-info">
                            <h1>Minecraft</h1>
                            <h3>#{serverId}</h3>
                        </div>
                        </div>
                        <div className={"button-actions"}>
                            <Button icon={<FaPlay/>} text={"Запустить"} color={"#10b981"}/>
                            <Button icon={<RiResetLeftLine/>} text={"Перезапустить"} color={"#3b82f6"}/>
                            <Button icon={<FaStop/>} text={"Остановить"} color={"#f97316"}/>
                            <Button icon={<FaPowerOff/>} text={"Выключить"} color={"#ef4444"}/>
                        </div>
                        <div className={"resource-monitoring"}>
                            <h1>Мониторинг ресурсов</h1>
                            <p className={"resource-type"}><FiCpu/> <b> CPU</b>: График нагрузки, процессы, top consumers</p>
                            <div className={"resource-monitoring-chart"}>
                                <p>Процессор: 8.0 (на 4-ядерной системе)</p>
                            {/*<LineChart*/}
                            {/*    dataset={data}*/}
                            {/*    xAxis={[{ dataKey: 'x' }]}*/}
                            {/*    series={[{ dataKey: 'y', color: 'var(--primary-color)', }*/}
                            {/*    ]}*/}
                            {/*    height={300}*/}
                            {/*/>*/}
                                <CPUChart />
                            </div>
                        </div>
                    </div>
                </div>
            </>
    )
}

export default ServerPanel
