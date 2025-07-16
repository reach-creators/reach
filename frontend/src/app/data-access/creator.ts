export interface Creator {
  id?: number;
  name: string;
  salesPerMonth?: number;
  itemsSold?: number;
  niches: string[];
  region?: string;
}
