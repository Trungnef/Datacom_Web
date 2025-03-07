// User Types
export type UserType = 'manufacturer' | 'brand' | 'retailer';

export interface User {
  id: string;
  name: string;
  email: string;
  type: UserType;
  company: string;
  location: {
    country: string;
    city: string;
  };
  certifications: string[];
  createdAt: string;
}

// Product Types
export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  jicfsCode?: string;
  allergens: string[];
  certifications: string[];
  dimensions: {
    width: number;
    height: number;
    depth: number;
    unit: string;
  };
  weight: {
    value: number;
    unit: string;
  };
  manufacturer: string;
  brand: string;
}

// Manufacturing Capability Types
export interface ManufacturingCapability {
  id: string;
  manufacturerId: string;
  productTypes: string[];
  productionCapacity: {
    value: number;
    unit: string;
    timeframe: string;
  };
  certifications: string[];
  allergenFree: string[];
  minimumOrderQuantity: number;
  leadTime: {
    value: number;
    unit: string;
  };
}

// Match Types
export interface Match {
  id: string;
  requesterId: string;
  requesterType: UserType;
  providerId: string;
  providerType: UserType;
  status: 'pending' | 'accepted' | 'rejected' | 'completed';
  requirements: {
    productType: string;
    volume: number;
    certifications: string[];
    allergenRequirements: string[];
    timeline: string;
    location: string;
  };
  matchScore: number;
  createdAt: string;
  updatedAt: string;
}

// Analytics Types
export interface AnalyticsData {
  matchesCount: number;
  successRate: number;
  averageResponseTime: number;
  topProducts: {
    name: string;
    count: number;
  }[];
  topManufacturers: {
    name: string;
    count: number;
  }[];
  marketTrends: {
    category: string;
    growth: number;
  }[];
}