"use client";

import { useEffect, useRef } from "react";
import * as echarts from "echarts";

const data = [
  { month: "Jan", sales: 400 },
  { month: "Feb", sales: 600 },
  { month: "Mar", sales: 800 },
  { month: "Apr", sales: 500 },
  { month: "May", sales: 900 },
  { month: "Jun", sales: 750 },
  { month: "Jul", sales: 1100 },
  { month: "Aug", sales: 950 },
  { month: "Sep", sales: 1200 },
  { month: "Oct", sales: 1000 },
  { month: "Nov", sales: 1300 },
  { month: "Dec", sales: 1500 },
];

type ChartType = {
title: string;
}

export default function SalesBarChart({title}:ChartType) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;
    const chart = echarts.init(chartRef.current);

    chart.setOption({
      grid: { left: 40, right: 20, top: 20, bottom: 30 },
      xAxis: {
        type: "category",
        data: data.map((d) => d.month),
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { color: "#888" },
      },
      yAxis: {
        type: "value",
        splitLine: { lineStyle: { type: "dashed", color: "#e5e7eb" } },
        axisLabel: { color: "#888" },
      },
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "shadow" },
      },
      series: [
        {
          name: "Sales",
          type: "bar",
          data: data.map((d) => d.sales),
          itemStyle: {
            color: "#3b82f6",
            borderRadius: [0, 0, 0, 0],
          },
          barMaxWidth: 40,
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
      <h5 className="fw-semibold mb-3 px-4">{title}</h5>
      <div ref={chartRef} style={{ height: 200 }} />
    </div>
  );
}