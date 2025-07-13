export interface Brand {
  id?: number;
  name: string;
  logo?: string; // Use string for URL
  revenuePerMonth?: number;
  itemsSold?: number;
  averageUnitPrice?: number;
  niches: string[];
  region?: string;
} 