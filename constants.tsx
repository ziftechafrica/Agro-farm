
import React from 'react';
// Import types from types.ts to ensure correct inference for components consuming these constants
import { Product, Course, CropDataPoint } from './types';

export const COLORS = {
  primary: '#16a34a',
  secondary: '#15803d',
  accent: '#f59e0b',
  background: '#f8fafc',
};

// Explicitly type MOCK_PRODUCTS as Product[] to ensure 'category' property matches the specific union type
export const MOCK_PRODUCTS: Product[] = [
  { id: '1', name: 'Premium Wheat Seeds', category: 'Crop', price: 45.0, unit: 'bag', image: 'https://picsum.photos/seed/wheat/400/300', description: 'High-yield organic wheat seeds.' },
  { id: '2', name: 'Yellow Maize', category: 'Crop', price: 32.5, unit: 'kg', image: 'https://picsum.photos/seed/corn/400/300', description: 'Sun-dried premium yellow corn.' },
  { id: '3', name: 'Poultry Stock (Broilers)', category: 'Stock', price: 120.0, unit: '10-pack', image: 'https://picsum.photos/seed/chicken/400/300', description: 'Healthy day-old broiler chicks.' },
  { id: '4', name: 'Organic Fertilizer', category: 'Fertilizer', price: 15.0, unit: 'liters', image: 'https://picsum.photos/seed/fertilizer/400/300', description: 'Bio-active liquid fertilizer.' },
  { id: '5', name: 'Basmati Rice', category: 'Crop', price: 55.0, unit: 'kg', image: 'https://picsum.photos/seed/rice/400/300', description: 'Long-grain aromatic basmati rice.' },
];

// Explicitly type MOCK_COURSES as Course[]
export const MOCK_COURSES: Course[] = [
  { id: 'c1', title: 'Hydroponics Mastery', instructor: 'Dr. Sarah Green', duration: '6h 30m', lessons: 12, thumbnail: 'https://picsum.photos/seed/hydro/400/250' },
  { id: 'c2', title: 'Smart Farming with IoT', instructor: 'Eng. Mike Tech', duration: '4h 15m', lessons: 8, thumbnail: 'https://picsum.photos/seed/iot/400/250' },
  { id: 'c3', title: 'Organic Pest Control', instructor: 'Farmer John', duration: '3h 45m', lessons: 6, thumbnail: 'https://picsum.photos/seed/pest/400/250' },
];

// Explicitly type CROP_INFLOW_DATA as CropDataPoint[]
export const CROP_INFLOW_DATA: CropDataPoint[] = [
  { date: 'Mon', wheat: 400, corn: 240, rice: 200, soy: 150 },
  { date: 'Tue', wheat: 300, corn: 139, rice: 221, soy: 180 },
  { date: 'Wed', wheat: 200, corn: 980, rice: 229, soy: 250 },
  { date: 'Thu', wheat: 278, corn: 390, rice: 200, soy: 210 },
  { date: 'Fri', wheat: 189, corn: 480, rice: 218, soy: 190 },
  { date: 'Sat', wheat: 239, corn: 380, rice: 250, soy: 300 },
  { date: 'Sun', wheat: 349, corn: 430, rice: 210, soy: 280 },
];

export const NavIcon = ({ d }: { d: string }) => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} />
  </svg>
);

export const ICONS = {
  home: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  shop: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
  learning: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  truck: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  crypto: "M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z",
  stats: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  contact: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  policy: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
};
