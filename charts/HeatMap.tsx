"use client";

import { useEffect, useRef } from "react";
import * as echarts from "echarts";

const HOURS = ["8am", "10am", "12pm", "2pm", "4pm", "6pm"];
const DAYS = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];

const HEATMAP_DATA = [
  
  [0,0,80],[0,1,60],[0,2,40],[0,3,30],[0,4,20],[0,5,10],
  
  [1,0,100],[1,1,80],[1,2,60],[1,3,50],[1,4,40],[1,5,20],
  
  [2,0,120],[2,1,100],[2,2,80],[2,3,70],[2,4,60],[2,5,30],
  
  [3,0,150],[3,1,130],[3,2,110],[3,3,100],[3,4,80],[3,5,50],
  
  [4,0,200],[4,1,180],[4,2,160],[4,3,140],[4,4,120],[4,5,80],
  
  [5,0,350],[5,1,600],[5,2,800],[5,3,700],[5,4,500],[5,5,250],
  
  [6,0,500],[6,1,900],[6,2,1400],[6,3,1800],[6,4,1100],[6,5,600],
  
  [7,0,600],[7,1,1100],[7,2,2100],[7,3,200],[7,4,800],[7,5,900],
  
  [8,0,480],[8,1,850],[8,2,1600],[8,3,1500],[8,4,900],[8,5,550],
  
  [9,0,300],[9,1,500],[9,2,900],[9,3,700],[9,4,450],[9,5,200],
  
  [10,0,200],[10,1,350],[10,2,600],[10,3,450],[10,4,300],[10,5,130],
  
  [11,0,160],[11,1,250],[11,2,400],[11,3,300],[11,4,200],[11,5,90],
 
  [12,0,130],[12,1,200],[12,2,300],[12,3,220],[12,4,150],[12,5,70],
  
  [13,0,100],[13,1,150],[13,2,220],[13,3,160],[13,4,110],[13,5,50],
  
  [14,0,80],[14,1,110],[14,2,160],[14,3,120],[14,4,80],[14,5,40],
  
  [15,0,60],[15,1,80],[15,2,120],[15,3,90],[15,4,60],[15,5,25],
];


export default function OrdersHeatmap() {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!chartRef.current) return;
        const chart = echarts.init(chartRef.current);

        chart.setOption({
            grid: { left: 20, right: 20, top: 40, bottom: 40 },
            xAxis: {
                type: "category",
                data: DAYS.map(String),
                axisLine: { show: false },
                axisTick: { show: false },
                axisLabel: { color: "#aab", fontSize: 12 },
                splitArea: { show: false },
            },
            yAxis: {
                type: "category",
                data: HOURS,
                axisLine: { show: false },
                axisTick: { show: false },
                axisLabel: { color: "#aab", fontSize: 12 },
                splitArea: { show: false },
            },
            visualMap: {
                min: 0,
                max: 2500,
                calculable: false,
                orient: "horizontal",
                left: "center",
                top: 0,
                show: true,
                text: ["2500", "0"],
                textStyle: { color: "#aab", fontSize: 11 },
                inRange: {
                    color: ["#dce9f7", "#a8cef5", "#1a6fd4"],
                },
                itemWidth: 14,
                itemHeight: 80,
            },
            tooltip: {
                position: "top",
                formatter: (p: any) =>
                    `Jan ${DAYS[p.data[0]]} · ${HOURS[p.data[1]]}<br/><b>${p.data[2].toLocaleString()} orders</b>`,
            },
            series: [
                {
                    type: "heatmap",
                    data: HEATMAP_DATA,
                    itemStyle: {
                        borderRadius: 7,
                        borderWidth: 3,
                        borderColor: "#fff",
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: "rgba(26,111,212,0.4)",
                        },
                    },
                    label: {
                        show: true,
                        formatter: (p: any) => (p.data[2] === 200 && p.data[0] === 3 && p.data[1] === 7 ? "200" : ""),
                        color: "#fff",
                        fontSize: 11,
                        fontWeight: "bold",
                    },
                },
            ],
        });

        const handleResize = () => chart.resize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            chart.dispose();
        };
    }, []);

    return (
        <div className="card border-0 shadow-sm rounded-5 p-3 w-100">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 px-4 mb-2">
                <h5 className="fw-semibold mb-0">Orders By Time</h5>
                <div className="d-flex align-items-center gap-2">
                    <div
                        className="d-flex align-items-center gap-2 px-3 py-1 rounded-3"
                        style={{ background: "#f4f6fb", fontSize: 13, color: "#555", border: "1px solid #e3e8f0" }}
                    >
                        <span>January 2025</span>
                    </div>
                </div>
            </div>
            <div ref={chartRef} style={{  height: 200 }} />
        </div>
    );
}