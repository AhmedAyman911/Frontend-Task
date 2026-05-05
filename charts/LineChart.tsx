"use client";

import { useEffect, useRef } from "react";
import * as echarts from "echarts";

const data = [
  { name: "Jan", total: 350, success: 340 },
  { name: "Feb", total: 600, success: 520 },
  { name: "Mar", total: 800, success: 700 },
  { name: "Apr", total: 500, success: 450 },
  { name: "May", total: 900, success: 820 },
  { name: "Jun", total: 400, success: 340 },
  { name: "Jul", total: 600, success: 520 },
  { name: "Aug", total: 600, success: 700 },
  { name: "Sep", total: 500, success: 250 },
  { name: "Oct", total: 900, success: 820 },
  { name: "Nov", total: 900, success: 820 },
  { name: "Dec", total: 900, success: 800 },
];

export default function TransactionsChart() {
  const chartRef = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    if (!chartRef.current) return;
    const chart = echarts.init(chartRef.current);
 
    chart.setOption({
      grid: { left: 50, right: 20, top: 30, bottom: 30 },
      xAxis: {
        type: "category",
        data: data.map((d) => d.name),
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { color: "#888" },
        boundaryGap: false,
      },
      yAxis: {
        type: "value",
        min: 0,
        max: 1000,
        interval: 100,
        splitLine: { lineStyle: { type: "dashed", color: "#e5e7eb" } },
        axisLabel: { color: "#888" },
      },
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "cross", crossStyle: { color: "#ccc" } },
      },
      legend: {
        top: 0,
        right: 0,
        data: ["Total", "Success"],
        textStyle: { color: "#555", fontSize: 12 },
        icon: "circle",
        itemWidth: 8,
        itemHeight: 8,
      },
      series: [
        {
          name: "Total",
          type: "line",
          data: data.map((d) => d.total),
          smooth: true,
          smoothMonotone: "x",
          lineStyle: { color: "#3b82f6", width: 3 },
          itemStyle: { color: "#3b82f6" },
          symbol: "circle",
          symbolSize: 7,
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(59,130,246,0.18)" },
              { offset: 1, color: "rgba(59,130,246,0)" },
            ]),
          },
        },
        {
          name: "Success",
          type: "line",
          data: data.map((d) => d.success),
          smooth: true,
          smoothMonotone: "x",
          lineStyle: { color: "#111", width: 3 },
          itemStyle: { color: "#111" },
          symbol: "circle",
          symbolSize: 7,
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(17,17,17,0.10)" },
              { offset: 1, color: "rgba(17,17,17,0)" },
            ]),
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
    <div className="card p-3 border-0 shadow-sm rounded-5">
      <h5 className="fw-semibold mb-3 px-4">Transactions Overview</h5>
      <div ref={chartRef} style={{ height: 200 }} />
    </div>
  );
}