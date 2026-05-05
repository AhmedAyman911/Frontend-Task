'use client';

import React, { useState } from 'react';
import { Search, RefreshCw, TrendingUp } from 'lucide-react';
import Image from 'next/image';


interface Product {
    id: string;
    name: string;
    status: 'In Stock' | 'Out of Stock' | 'Low Stock';
    imageUrl: string;
    revenue: number;
    sales: number;
    reviews: number;
    views: number;
    active: boolean;
}

const MOCK_PRODUCTS: Product[] = [
    {
        id: '1',
        name: 'Liam Anderson Red',
        status: 'In Stock',
        imageUrl: '/1.jpg',
        revenue: 1240.22,
        sales: 1909,
        reviews: 2102,
        views: 3022,
        active: true,
    },
    {
        id: '2',
        name: 'Ava Reynolds Blue',
        status: 'In Stock',
        imageUrl: '/2.jpg',
        revenue: 1240.22,
        sales: 1909,
        reviews: 2102,
        views: 3022,
        active: true,
    },
    {
        id: '3',
        name: 'Jackson White Blue',
        status: 'In Stock',
        imageUrl: '/1.jpg',
        revenue: 1240.22,
        sales: 1909,
        reviews: 2102,
        views: 3022,
        active: true,
    },
    {
        id: '4',
        name: 'Bennett Reynolds Blue',
        status: 'In Stock',
        imageUrl: '/1.jpg',
        revenue: 1240.22,
        sales: 1909,
        reviews: 2102,
        views: 3022,
        active: true,
    },
    {
        id: '5',
        name: 'Run Reynolds Blue',
        status: 'In Stock',
        imageUrl: '/2.jpg',
        revenue: 1240.22,
        sales: 1909,
        reviews: 2102,
        views: 3022,
        active: true,
    },
];


interface ProductListProps {
    products?: Product[];
    totalItems?: number;
    growthPercent?: number;
}

const ProductList: React.FC<ProductListProps> = ({
    products = MOCK_PRODUCTS,
    totalItems = 3280,
    growthPercent = 8.33,
}) => {
    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
    const [searchQuery, setSearchQuery] = useState('');
    const [activeToggles, setActiveToggles] = useState<Record<string, boolean>>(
        Object.fromEntries(products.map((p) => [p.id, p.active]))
    );

    const toggleSelectAll = () => {
        if (selectedIds.size === products.length) {
            setSelectedIds(new Set());
        } else {
            setSelectedIds(new Set(products.map((p) => p.id)));
        }
    };

    const toggleSelect = (id: string) => {
        const next = new Set(selectedIds);

        if (next.has(id)) {
            next.delete(id);
        } else {
            next.add(id);
        }

        setSelectedIds(next);
    };

    const toggleActive = (id: string) => {
        setActiveToggles((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const filteredProducts = products.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="card border-0 shadow rounded-5 overflow-hidden" style={{ background: '#fff' }}>
            <div className="card-body pb-0">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center gap-2">
                        <h5 className="fw-bold mb-0 fs-5" style={{ color: '#111827' }}>
                            {totalItems.toLocaleString()} Item
                        </h5>
                        <span
                            className="badge d-flex align-items-center gap-1 px-2 py-1 rounded-pill"
                            style={{ background: '#D1FAE5', color: '#065F46', fontSize: '11px', fontWeight: 600 }}
                        >
                            <TrendingUp size={12} />+{growthPercent}%
                        </span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <button
                            className="btn btn-link text-secondary p-0 fw-semibold text-decoration-none"
                            style={{ fontSize: '14px', color: '#6B7280' }}
                        >
                            See More
                        </button>
                        <button className="btn btn-link p-0 text-secondary">
                            <Search size={17} />
                        </button>
                    </div>
                </div>

                <div
                    className="d-flex align-items-center gap-2 rounded-3 px-3 py-2 mb-3"
                    style={{ background: '#F9FAFB', border: '1px solid #F3F4F6' }}
                >
                    <Search size={15} color="#9CA3AF" />
                    <input
                        type="text"
                        className="border-0 bg-transparent w-100 outline-none"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ fontSize: '14px', color: '#374151', outline: 'none' }}
                    />
                    <button className="btn btn-link p-0 text-secondary" onClick={() => setSearchQuery('')}>
                        <RefreshCw size={14} color="#9CA3AF" />
                    </button>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-hover mb-0 align-middle" style={{ fontSize: '14px' }}>
                    <thead style={{ background: '#F9FAFB' }}>
                        <tr>
                            <th className="ps-4 pe-2 py-3 border-0" style={{ width: 40 }}>
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    checked={selectedIds.size === products.length && products.length > 0}
                                    onChange={toggleSelectAll}
                                    style={{ cursor: 'pointer' }}
                                />
                            </th>
                            <th className="ps-2 py-3 border-0 text-muted fw-semibold" style={{ minWidth: 100 }}>
                                Product Name
                            </th>
                            <th className="py-3 border-0 text-muted fw-semibold">Revenue</th>
                            <th className="py-3 border-0 text-muted fw-semibold">Sales</th>
                            <th className="py-3 border-0 text-muted fw-semibold">Reviews</th>
                            <th className="py-3 border-0 text-muted fw-semibold">Views</th>
                            <th className="pe-4 py-3 border-0 text-muted fw-semibold" style={{ width: 1 }}>Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map((product) => (
                            <tr
                                key={product.id}
                                style={{
                                    background: selectedIds.has(product.id) ? '#EFF6FF' : 'transparent',
                                    transition: 'background 0.15s',
                                }}
                            >
                                <td className="ps-4 pe-2 border-0">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        checked={selectedIds.has(product.id)}
                                        onChange={() => toggleSelect(product.id)}
                                        style={{ cursor: 'pointer' }}
                                    />
                                </td>

                                <td className="ps-2 border-0">
                                    <div className="d-flex align-items-center gap-3">
                                        <div
                                            className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                                            style={{
                                                width: 46,
                                                height: 46,
                                            }}
                                        >
                                            <Image
                                                src={product.imageUrl}
                                                alt="card"
                                                width={32}
                                                height={32}
                                                style={{ objectFit: "cover" }}
                                                loading="eager"
                                            />
                                        </div>
                                        <div>
                                            <div className="fw-semibold" style={{ color: '#111827' }}>
                                                {product.name}
                                            </div>
                                            <div style={{ fontSize: '12px', color: '#6B7280' }}>{product.status}</div>
                                        </div>
                                    </div>
                                </td>

                                <td className="border-0 fw-semibold" style={{ color: '#111827' }}>
                                    ${product.revenue.toFixed(2)}
                                </td>

                                <td className="border-0 fw-semibold" style={{ color: '#111827' }}>
                                    {product.sales.toLocaleString()}
                                </td>

                                <td className="border-0" style={{ color: '#6B7280' }}>
                                    {product.reviews.toLocaleString()}
                                </td>

                                <td className="border-0" style={{ color: '#6B7280' }}>
                                    {product.views.toLocaleString()}
                                </td>

                                <td className="border-0">
                                    <div className="form-check form-switch mb-0">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id={`switch-${product.id}`}
                                            checked={activeToggles[product.id]}
                                            onChange={() => toggleActive(product.id)}
                                            style={{
                                                width: '44px',
                                                height: '24px',
                                                cursor: 'pointer',
                                                backgroundColor: activeToggles[product.id] ? '#3B82F6' : '#D1D5DB',
                                                borderColor: activeToggles[product.id] ? '#3B82F6' : '#D1D5DB',
                                            }}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductList;