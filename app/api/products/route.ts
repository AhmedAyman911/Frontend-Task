import { NextResponse } from 'next/server';

const products = [
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

export async function GET() {
    return NextResponse.json(products);
}