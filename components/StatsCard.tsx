import { TrendingUp, TrendingDown } from "lucide-react";

type StatsCardProps = {
  title: string;
  value: string | number;
  decimal?: string;
  change: number;
  isIncrease?: boolean;
  period: string;
};

export default function StatsCard({
  title,
  value,
  decimal,
  change,
  isIncrease = true,
  period,
}:StatsCardProps) {
  return (
    <div
      className="card border-0 rounded-5 shadow-sm d-flex flex-column w-100"
      style={{ height: "150px" }}
    >
      <div className="d-flex justify-content-between align-items-start mb-2 p-3">
        <div>
          <p className="fw-semibold mb-1 small">{title}</p>

          <h3 className="fw-bold mb-0">
            ${value}
            {decimal && <span className="text-muted">.{decimal}</span>}
          </h3>
        </div>
        <span
          className={`badge rounded-pill d-flex align-items-center gap-1 px-3 py-2 ${
            isIncrease
              ? "bg-success-subtle text-success"
              : "bg-danger-subtle text-danger"
          }`}
        >
          {isIncrease ? (
            <TrendingUp size={14} />
          ) : (
            <TrendingDown size={14} />
          )}
          {isIncrease ? "+" : "-"}
          {change}%
        </span>
      </div>

      <div
        className="mt-auto px-3 py-2 rounded-bottom-5"
        style={{ background: "#f5f6fa" }}
      >
        <p className="mb-0 text-muted small ">{period}</p>
      </div>
    </div>
  );
}