export interface StoreInfo {
  name: string;
  id: string;
}

export interface StockSummary {
  currentStock: number;
  stockValue: number;
}

export interface DashboardItem {
  id: string;
  title: string;
  icon: string;
  count?: number;
  color: string;
  link: string;
}

export interface ReportItem {
  id: string;
  title: string;
  icon: string;
  value?: number;
  color: string;
  link: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  buyPrice: number;
  sellPrice: number;
  image?: string;
}

export interface IncomingItem {
  id: string;
  documentNo: string;
  date: string;
  supplier: string;
  comment: string;
  totalEntries: number;
  quantity: number;
  total: number;
  isPaid: boolean;
}

export interface OutgoingItem {
  id: string;
  documentNo: string;
  date: string;
  customer: string;
  discount: number;
  comment: string;
  totalEntries: number;
  quantity: number;
  total: number;
  isPaid: boolean;
}