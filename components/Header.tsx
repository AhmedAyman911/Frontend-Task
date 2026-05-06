import { Search, Calendar, FolderInput  } from "lucide-react";

export default function Header() {
  return (
    <div className="d-flex justify-content-between align-items-center p-md-5 p-4 flex-wrap gap-3">
      <div>
        <h2 className="fw-semibold mb-1">Welcome Back Ahmed Ayman</h2>
        <p className="mb-0">
          You have <span className="text-primary fw-semibold">2 unread</span> notifications
        </p>
      </div>

      <div className="d-flex align-items-center gap-2 flex-wrap">
        <div className="d-flex align-items-center bg-white border rounded-pill px-3" style={{ height: "42px" }}>
          <Search size={16} className="text-muted me-2" />
          <input
            type="text"
            className="form-control border-0 shadow-none p-0"
            placeholder="Search..."
            style={{ width: "150px" }}
          />
        </div>

        <div className="d-flex align-items-center bg-white border rounded-pill px-3 position-relative"
          style={{ height: "42px" }}>
          <span className="text-muted small me-2">Date</span>

          <input
            type="date"
            className="position-absolute top-0 start-0 w-100 h-100 opacity-0 cursor-pointer"
          />
          <Calendar size={16} className="text-muted me-2" />
        </div>
        
        <button className="btn border btn-light rounded-pill d-flex align-items-center gap-2 px-3">
          Export Document
          <FolderInput  size={16} />
        </button>
      </div>
    </div>
  );
}
