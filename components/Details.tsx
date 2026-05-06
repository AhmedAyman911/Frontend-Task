"use client";

import { ChevronRight, Star, Package, Users, TrendingUp, MapPin, Calendar } from "lucide-react";

const storeData = {
  name: "New York Store",
  location: "New York, USA",
  memberSince: "Jan 2021",
  badge: "Performance Seller",
  performanceScore: 78,
  activeMembers: 12,
  rating: 4.8,
  totalSales: 2500,
  totalRevenue: "$24,802",
  responseRate: 92,
  onTimeDelivery: 88,
  totalReviews: 1240,
};

const reviews = [
  { name: "Ahmed M.", rating: 5, date: "Mar 12, 2025", comment: "Great seller! Product arrived quickly and exactly as described." },
  { name: "Sara K.", rating: 4, date: "Mar 8, 2025", comment: "Good quality and smooth communication throughout the process." },
  { name: "James T.", rating: 5, date: "Feb 28, 2025", comment: "Excellent packaging and very fast delivery. Would buy again." },
];

const cardStyle = {
  background: "white",
  borderRadius: 24,
  border: "1px solid #eef0f5",
  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
};

function ProgressBar({ value, color = "#3b6fd4" }: { value: number; color?: string }) {
  return (
    <div style={{ height: 6, background: "#f0f2f5", borderRadius: 4, overflow: "hidden" }}>
      <div style={{ width: `${value}%`, height: "100%", background: color, borderRadius: 4, transition: "width 0.6s ease" }} />
    </div>
  );
}

export default function StoreDetailsPage() {
  return (
    <div style={{ background: "#f4f6fb", minHeight: "100vh", fontFamily: "'Nunito', sans-serif" }}>
      <div className="container px-4 py-4" >
        <div className="d-flex align-items-center gap-2 mb-4">
          <span style={{ color: "#8a94a6", fontSize: 13 }}>Stores</span>
          <ChevronRight size={13} color="#8a94a6" />
          <span style={{ color: "#2d3748", fontSize: 13, fontWeight: 600 }}>New York Store</span>
        </div>

        <div className="mb-4 p-4" style={cardStyle}>
          <div className="row align-items-center g-3">
            <div className="col-auto">
              <div style={{ width: 64, height: 64, borderRadius: 14, background: "#3b6fd4", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 26, fontWeight: 700 }}>N</div>
            </div>
            <div className="col">
              <div className="d-flex align-items-center gap-2 mb-1">
                <h5 className="mb-0 fw-bold" style={{ fontSize: 20, color: "#1a1a2e" }}>{storeData.name}</h5>
                <span style={{ background: "#e8f0fd", color: "#3b6fd4", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 20 }}>{storeData.badge}</span>
                <span style={{ background: "#eaf3de", color: "#3b6d11", fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 20 }}>Top Rated</span>
              </div>
              <div className="d-flex align-items-center gap-3">
                <span style={{ fontSize: 12, color: "#8a94a6", display: "flex", alignItems: "center", gap: 4 }}><MapPin size={12} />{storeData.location}</span>
                <span style={{ fontSize: 12, color: "#8a94a6", display: "flex", alignItems: "center", gap: 4 }}><Calendar size={12} />Member since {storeData.memberSince}</span>
                <span style={{ fontSize: 12, color: "#f39c12" }}>
                  {'★'.repeat(5)}{" "}
                  <span style={{ color: "#8a94a6" }}>{storeData.rating} ({storeData.totalReviews.toLocaleString()} reviews)</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-3 mb-4">
          {[
            { label: "Total Revenue", value: storeData.totalRevenue, icon: <TrendingUp size={18} color="#3b6fd4" />, trend: "+8.33%", up: true },
            { label: "Total Sales", value: storeData.totalSales.toLocaleString(), icon: <Package size={18} color="#27ae60" />, trend: "+8.33%", up: true },
            { label: "Active Members", value: storeData.activeMembers, icon: <Users size={18} color="#f39c12" />, trend: "+2", up: true },
            { label: "Total Reviews", value: storeData.totalReviews.toLocaleString(), icon: <Star size={18} color="#e74c3c" />, trend: "+8.33%", up: true },
          ].map((s, i) => (
            <div className="col-6 col-md-3" key={i}>
              <div
                className="p-3 h-100"
                style={{ ...cardStyle, transition: "transform 0.2s, box-shadow 0.2s", cursor: "default" }}>
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "#f4f6fb", display: "flex", alignItems: "center", justifyContent: "center" }}>{s.icon}</div>
                  <span style={{ fontSize: 11, fontWeight: 700, color: s.up ? "#27ae60" : "#e74c3c", background: s.up ? "#eaf3de" : "#fdecea", padding: "2px 8px", borderRadius: 20 }}>{s.trend}</span>
                </div>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#1a1a2e" }}>{s.value}</div>
                <div style={{ fontSize: 12, color: "#8a94a6" }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-3">
          <div className="col-md-5">
            <div className="p-4 h-100" style={cardStyle}>
              <h6 className="fw-bold mb-3" style={{ fontSize: 14, color: "#1a1a2e" }}>Performance Overview</h6>
              {[
                { label: "Overall Performance", value: storeData.performanceScore, color: "#3b6fd4" },
                { label: "On-time Delivery", value: storeData.onTimeDelivery, color: "#27ae60" },
                { label: "Response Rate", value: storeData.responseRate, color: "#f39c12" },
                { label: "Customer Satisfaction", value: 95, color: "#8e44ad" },
              ].map((p, i) => (
                <div className="mb-3" key={i}>
                  <div className="d-flex justify-content-between mb-1">
                    <span style={{ fontSize: 12, color: "#4a5568" }}>{p.label}</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: p.color }}>{p.value}%</span>
                  </div>
                  <ProgressBar value={p.value} color={p.color} />
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-7">
            <div className="p-4 h-100" style={cardStyle}>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-bold mb-0" style={{ fontSize: 14, color: "#1a1a2e" }}>Recent Reviews</h6>
                <button style={{ fontSize: 12, color: "#3b6fd4", background: "none", border: "none", fontWeight: 600, cursor: "pointer" }}>See All</button>
              </div>
              <div className="d-flex flex-column gap-2">
                {reviews.map((r, i) => (
                  <div key={i} style={{ borderRadius: 14, border: "1px solid #eef0f5", padding: "12px 16px", background: "#fafbff" }}>
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <span style={{ fontWeight: 700, fontSize: 13, color: "#1a1a2e" }}>{r.name}</span>
                        <span style={{ fontSize: 11, color: "#f39c12", marginLeft: 8 }}>{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</span>
                      </div>
                      <span style={{ fontSize: 11, color: "#8a94a6" }}>{r.date}</span>
                    </div>
                    <p style={{ fontSize: 12, color: "#4a5568", marginTop: 4, marginBottom: 0 }}>{r.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}