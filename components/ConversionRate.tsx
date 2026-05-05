'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react';

interface ConversionStep {
  label: string;
  percentage: number;
  value: number;
}
 
interface ConversionData {
  month: string;
  year: number;
  steps: ConversionStep[];
}

const MOCK_DATA: ConversionData = {
  month: 'January',
  year: 2025,
  steps: [
    { label: 'Product Views', percentage: 29, value: 6575 },
    { label: 'Add to Cart', percentage: 29, value: 6575 },
    { label: 'Checkout Initiated', percentage: 29, value: 6575 },
    { label: 'Completed Purchases', percentage: 29, value: 6575 },
    { label: 'Repeat Purchases', percentage: 29, value: 6575 },
    { label: 'Refund Rate', percentage: 29, value: 6575 },
    { label: 'Abandoned Carts', percentage: 29, value: 6575 },
  ],
};

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];


interface ConversionRateProps {
  data?: ConversionData;
}

const ConversionRate: React.FC<ConversionRateProps> = ({ data = MOCK_DATA }) => {
  const [monthIndex, setMonthIndex] = useState(MONTHS.indexOf(data.month));
  const [year] = useState(data.year);

  const prevMonth = () => setMonthIndex((m) => (m === 0 ? 11 : m - 1));
  const nextMonth = () => setMonthIndex((m) => (m === 11 ? 0 : m + 1));


  return (
    <div
      className="card border-0 shadow rounded-5"
      style={{ background: '#fff', minWidth: 270, maxHeight:480 }}
    >
      <div className="card-body d-flex flex-column gap-3 p-4">
        <div className="d-flex align-items-center justify-content-between">
          <h6 className="fw-bold mb-0" style={{ color: '#111827' }}>
            Conversion Rate
          </h6>
          <div className="d-flex align-items-center gap-1">
            <span style={{color: '#6B7280' }}>Last Year</span>
            <Calendar size={13} color="#9CA3AF" />
          </div>
        </div>

        <div
          className="d-flex align-items-center justify-content-between rounded-3 px-3 py-2"
          style={{ background: '#F9FAFB', border: '1px solid #F3F4F6' }}
        >
          <button
            className="btn btn-link p-0 text-secondary"
            onClick={prevMonth}
            aria-label="Previous month"
          >
            <ChevronLeft size={16} color="#374151" />
          </button>
          <span className="fw-semibold" style={{ fontSize: '14px', color: '#111827' }}>
            {MONTHS[monthIndex]} {year}
          </span>
          <button
            className="btn btn-link p-0 text-secondary"
            onClick={nextMonth}
            aria-label="Next month"
          >
            <ChevronRight size={16} color="#374151" />
          </button>
        </div>

        <div className="d-flex flex-column gap-1">
          {data.steps.map((step, i) => (
            <div
              key={step.label}
              className="d-flex align-items-center justify-content-between"
              style={{
                borderBottom: i < data.steps.length - 1 ? '1px solid #F3F4F6' : 'none',
              }}
            >

              <div className="flex-grow-1 me-3">
                <div
                  className="fw-semibold mb-1"
                  style={{ fontSize: '11px', color: '#111827' }}
                >
                  {step.label}
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span style={{ fontSize: '12px', color: '#6B7280' }}>
                    {step.percentage}%
                  </span>
                </div>
              </div>

              <span
                className="fw-bold"
                style={{ fontSize: '13px', color: '#111827', minWidth: 40, textAlign: 'right' }}
              >
                {step.value.toLocaleString()}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-1 mx-auto">
          <button
            className="btn btn-link p-0 d-flex align-items-center gap-1 text-decoration-none fw-semibold"
            style={{ fontSize: '14px', color: '#3B82F6' }}
          >
            Learn More <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConversionRate;