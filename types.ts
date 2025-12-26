
export interface Product {
  id: string;
  name: string;
  category: 'Crop' | 'Stock' | 'Fertilizer';
  price: number;
  unit: string;
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  lessons: number;
  thumbnail: string;
}

export interface CropDataPoint {
  date: string;
  wheat: number;
  corn: number;
  rice: number;
  soy: number;
}

export interface TruckOrder {
  id: string;
  type: string;
  capacity: string;
  destination: string;
  date: string;
  status: 'Pending' | 'In-Transit' | 'Delivered';
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
