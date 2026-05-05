"use client";

import { useState } from "react";
import Image from "next/image";
import {
    ChevronLeft,
    ChevronRight,
    ChevronDown,
    ChevronUp,
    Search,
    Video,
} from "lucide-react";

const meetings = [
    {
        id: 1,
        category: "Product Design",
        categoryBg: "#e8f0fe",
        categoryColor: "#3b6fd4",
        title: "Meeting with Arthur Bell",
        time: "09:00 - 09:45 AM (UTC)",
        platform: "On Google Meet",
        avatars: [
            { src: "https://i.pravatar.cc/28?img=1", alt: "Attendee 1" },
            { src: "https://i.pravatar.cc/28?img=2", alt: "Attendee 2" },
            { src: "https://i.pravatar.cc/28?img=3", alt: "Attendee 3" },
        ],
        extraAttendees: 3,
    },
    {
        id: 2,
        category: "Marketing Business",
        categoryBg: "#e6f9f0",
        categoryColor: "#1a8a52",
        title: "Meeting with Leslie Perez",
        time: "09:00 - 09:45 AM (UTC)",
        platform: null,
        avatars: [],
        extraAttendees: 0,
    },
    {
        id: 3,
        category: "Brainstorming Session",
        categoryBg: "#fff0f0",
        categoryColor: "#d94040",
        title: "Meeting with Leslie Perez",
        time: "09:00 - 09:45 AM (UTC)",
        platform: null,
        avatars: [],
        extraAttendees: 0,
    },
];

type Meeting = (typeof meetings)[0];

function AvatarStack({
    avatars,
    extra,
}: {
    avatars: Meeting["avatars"];
    extra: number;
}) {
    return (
        <div className="d-flex align-items-center">
            <div className="d-flex" style={{ marginRight: extra > 0 ? 4 : 0 }}>
                {avatars.map((avatar, i) => (
                    <div
                        key={i}
                        style={{
                            width: 28,
                            height: 28,
                            borderRadius: "50%",
                            border: "2px solid #fff",
                            marginLeft: i === 0 ? 0 : -8,
                            overflow: "hidden",
                            position: "relative",
                            flexShrink: 0,
                        }}
                    >
                        <Image
                            src={avatar.src}
                            alt={avatar.alt}
                            fill
                            sizes="28px"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                ))}
            </div>
            {extra > 0 && (
                <span className="fw-semibold text-secondary" style={{ fontSize: 12 }}>
                    +{extra}
                </span>
            )}
        </div>
    );
}

function MeetingCard({ meeting }: { meeting: Meeting }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="card border-0 shadow-sm rounded-5 mb-3 w-100">
            <button
                className="btn p-3 d-flex align-items-center justify-content-between w-100 text-start rounded-5"
                style={{ background: "transparent", border: "none", outline: "none" }}
                onClick={() => setIsExpanded((prev) => !prev)}
                aria-expanded={isExpanded}
            >
                <div className="d-flex align-items-center gap-2 flex-wrap">
                    <span
                        className="badge rounded-2 px-2 py-1"
                        style={{
                            background: meeting.categoryBg,
                            color: meeting.categoryColor,
                            fontSize: 12,
                            fontWeight: 600,
                        }}
                    >
                        {meeting.category}
                    </span>

                </div>
                <span className="text-secondary ms-2 flex-shrink-0">
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} color="#bbb" />}
                </span>
            </button>
            <span
                className="fw-bold px-3 mb-2"
                style={{ fontSize: 14, color: "#1a1a1a", maxWidth: 240 }}
            >
                {meeting.title}
            </span>

            <div
                className={`collapse${isExpanded ? " show" : ""}`}
            >
                <div className="px-3 pb-3 pt-0">

                    <p className="mb-0 text-secondary" style={{ fontSize: 13 }}>
                        {meeting.time}
                    </p>

                    {(meeting.platform || meeting.avatars.length > 0) && (
                        <div className="d-flex align-items-center justify-content-between mt-2">
                            {meeting.platform ? (
                                <span
                                    className="d-flex align-items-center text-secondary"
                                    style={{ fontSize: 13 }}
                                >
                                    <Video size={14} className="me-1" />
                                    {meeting.platform}
                                </span>
                            ) : (
                                <span />
                            )}
                            {meeting.avatars.length > 0 && (
                                <AvatarStack avatars={meeting.avatars} extra={meeting.extraAttendees} />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function ScheduleCard() {
    const [activeTab, setActiveTab] = useState("Meetings");
    const tabs = ["Meetings", "Events", "Holiday"];

    return (
        <div
            className="d-flex align-items-center justify-content-center"
            style={{ background: "#f3f4f8", fontFamily: "'DM Sans', sans-serif" }}
        >
            <div
                className="card border-0 rounded-5 p-4 w-100"
                style={{height: 560, overflow: "hidden" }}
            >
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className="mb-0 fw-bold" style={{ fontSize: 22, color: "#1a1a1a" }}>
                        Schedule
                    </h5>
                    <div className="d-flex align-items-center gap-3">
                        <button
                            className="btn btn-link p-0 text-decoration-none fw-semibold"
                            style={{ fontSize: 13, color: "#3b6fd4" }}
                        >
                            See All
                        </button>
                        <button className="btn btn-link p-0 text-secondary d-flex align-items-center">
                            <Search size={18} />
                        </button>
                    </div>
                </div>

                <div className="card border-0 shadow-sm rounded-4 d-flex flex-row align-items-center justify-content-between px-3 py-2 mb-3">
                    <button
                        className="btn btn-light btn-sm rounded-3 p-1 d-flex align-items-center justify-content-center"
                        style={{ width: 28, height: 28 }}
                    >
                        <ChevronLeft size={15} color="#555" />
                    </button>
                    <span className="fw-bold" style={{ fontSize: 14, color: "#1a1a1a" }}>
                        January 2025
                    </span>
                    <button
                        className="btn btn-light btn-sm rounded-3 p-1 d-flex align-items-center justify-content-center"
                        style={{ width: 28, height: 28 }}
                    >
                        <ChevronRight size={15} />
                    </button>
                </div>

                <ul
                    className="nav mb-3"
                    style={{ borderBottom: "1.5px solid #e8e8e8" }}
                >
                    {tabs.map((tab) => (
                        <li className="nav-item" key={tab}>
                            <button
                                className="nav-link px-0 me-4 pb-2 bg-transparent"
                                style={{
                                    fontSize: 14,
                                    fontWeight: activeTab === tab ? 700 : 500,
                                    color: activeTab === tab ? "#1a1a1a" : "#aaa",
                                    border: "none",
                                    outline: "none",
                                    borderRadius: 0,
                                    boxShadow:
                                        activeTab === tab
                                            ? "inset 0 -2.5px 0 #3b6fd4"
                                            : "none",
                                    marginBottom: -1.5,
                                }}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        </li>
                    ))}
                </ul>

                <div style={{ overflowY: "auto", flex: 1 }}>
                    {meetings.map((m) => (
                        <MeetingCard key={m.id} meeting={m} />
                    ))}
                </div>
            </div>
        </div>
    );
}