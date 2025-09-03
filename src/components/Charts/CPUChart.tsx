import React, { useState, useEffect } from 'react';
import { VictoryChart, VictoryLine, VictoryAxis, VictoryTheme } from 'victory';

interface DataPoint {
    x: Date;
    y: number;
}

const createCustomTheme = (width = 600, height = 300) => ({
    width,
    height,
    padding: 40,
    style: {
        parent: {
            backgroundColor: "transparent"
        }
    },
    axis: {
        style: {
            axis: {
                stroke: "#ccc",
                strokeWidth: 1
            },
            grid: {
                stroke: "#eee",
                strokeWidth: 1
            },
            ticks: {
                stroke: "#ccc",
                size: 5
            },
            tickLabels: {
                fontSize: 10,
                fill: "#666",
                padding: 5
            }
        }
    },
    line: {
        style: {
            data: {
                strokeWidth: 2
            }
        }
    }
});

interface CPUChartProps {
    width?: number;
    height?: number;
}

const CPUChart: React.FC<CPUChartProps> = ({ width = 1500, height = 300 }) => {
    const [cpuData, setCpuData] = useState<DataPoint[]>([]);
    const [memoryData, setMemoryData] = useState<DataPoint[]>([]);
    const [tempData, setTempData] = useState<DataPoint[]>([]);
    const customTheme = createCustomTheme(width, height);

    // Генерация тестовых данных
    useEffect(() => {
        // Инициализация начальных данных
        const initialData: DataPoint[] = [];
        const now = new Date();
        for (let i = 0; i < 60; i++) {
            const time = new Date(now.getTime() - (59 - i) * 1000);
            initialData.push({ x: time, y: 0 });
        }

        setCpuData(initialData);
        setMemoryData(initialData);
        setTempData(initialData);

        const interval = setInterval(() => {
            const now = new Date();

            setCpuData(prev => [
                ...prev.slice(-59),
                { x: now, y: Math.random() * 100 }
            ]);

            setMemoryData(prev => [
                ...prev.slice(-59),
                { x: now, y: 30 + Math.random() * 50 }
            ]);

            setTempData(prev => [
                ...prev.slice(-59),
                { x: now, y: 40 + Math.random() * 30 }
            ]);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Получаем последние значения
    const lastCpuValue = cpuData[cpuData.length - 1]?.y.toFixed(1) || '0';
    const lastMemoryValue = memoryData[memoryData.length - 1]?.y.toFixed(1) || '0';
    const lastTempValue = tempData[tempData.length - 1]?.y.toFixed(1) || '0';

    return (
        <>
            <div>
                <VictoryChart
                    theme={VictoryTheme.clean}
                    width={customTheme.width}
                    height={customTheme.height}
                    padding={customTheme.padding}
                >
                    {/* Ось X */}
                    <VictoryAxis
                        tickFormat={(x) => {
                            const date = new Date(x);
                            return date.toLocaleTimeString('ru-RU', {
                                hour: '2-digit',
                                minute: '2-digit',
                                second: '2-digit',
                                hour12: false // это ключевой параметр
                            });
                        }}
                        style={customTheme.axis.style}
                    />

                    {/* Ось Y */}
                    <VictoryAxis
                        dependentAxis
                        tickFormat={(y) => `${y}%`}
                        style={customTheme.axis.style}
                    />

                    {/* Линия загрузки CPU */}
                    <VictoryLine
                        data={cpuData}
                        style={{ data: { stroke: "#ff6b6b", strokeWidth: 2 } }}
                    />

                    {/* Линия использования памяти */}
                    <VictoryLine
                        data={memoryData}
                        style={{ data: { stroke: "#4ecdc4", strokeWidth: 2 } }}
                    />

                    {/* Линия температуры */}
                    <VictoryLine
                        data={tempData}
                        style={{ data: { stroke: "#ff9f43", strokeWidth: 2 } }}
                    />
                </VictoryChart>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                marginTop: '10px',
                fontSize: '14px',
                fontFamily: 'Arial, sans-serif'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span style={{
                        display: 'inline-block',
                        width: '12px',
                        height: '12px',
                        backgroundColor: '#ff6b6b',
                        borderRadius: '2px'
                    }}></span>
                    <span>CPU: {lastCpuValue}%</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span style={{
                        display: 'inline-block',
                        width: '12px',
                        height: '12px',
                        backgroundColor: '#4ecdc4',
                        borderRadius: '2px'
                    }}></span>
                    <span>Память: {lastMemoryValue}%</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span style={{
                        display: 'inline-block',
                        width: '12px',
                        height: '12px',
                        backgroundColor: '#ff9f43',
                        borderRadius: '2px'
                    }}></span>
                    <span>Температура: {lastTempValue}°C</span>
                </div>
            </div>
        </>
    );
};

export default CPUChart;