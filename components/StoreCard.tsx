"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";

const members = [
    { src: "https://i.pravatar.cc/40?img=11", alt: "Member 1" },
    { src: "https://i.pravatar.cc/40?img=12", alt: "Member 2" },
    { src: "https://i.pravatar.cc/40?img=13", alt: "Member 3" },
];

export default function StoreCard({title}:{title:string}) {
    return (
        <div className="card border-0 shadow-sm rounded-5 p-3" style={{ height: "120px" }}>
            <div className="d-flex align-items-center justify-content-between mb-3">
                <h6 className="mb-0 fw-bold" style={{ fontSize: 21, color: "#1a1a1a" }}>
                    {title} Store
                </h6>
                <button
                    className="btn btn-link p-0 text-decoration-none d-flex align-items-center gap-1"
                    style={{ fontSize: 13, color: "#3b6fd4" }}
                >
                    See More
                    <ChevronRight size={14} />
                </button>
            </div>

            <div className="d-flex align-items-center justify-content-between">
                <div>
                    <p className="mb-0 fw-bold" style={{ fontSize: 13, color: "#1a1a1a" }}>
                        Performance Seller - 78%
                    </p>
                    <p className="mb-0 text-secondary" style={{ fontSize: 12 }}>
                        12 Active Members
                    </p>
                </div>

                <div className="d-flex align-items-center">
                    <div className="d-flex">
                        {members.map((m, i) => (
                            <div
                                key={i}
                                style={{
                                    width: 34,
                                    height: 34,
                                    borderRadius: "50%",
                                    border: "2px solid #fff",
                                    marginLeft: i === 0 ? 0 : -10,
                                    overflow: "hidden",
                                    position: "relative",
                                    flexShrink: 0,
                                }}
                            >
                                <Image
                                    src={m.src}
                                    alt={m.alt}
                                    fill
                                    sizes="34px"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        ))}
                    </div>
                    <span
                        className="fw-semibold ms-1"
                        style={{ fontSize: 13, color: "#555" }}
                    >
                        +9
                    </span>
                </div>
            </div>
        </div>
    );
}