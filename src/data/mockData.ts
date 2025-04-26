import { DashboardItem, ReportItem, StockSummary, StoreInfo, InventoryItem, IncomingItem, OutgoingItem } from '../types';

export const currentStore: StoreInfo = {
  name: 'Main Store',
  id: 'store-1',
};

export const stockSummary: StockSummary = {
  currentStock: 50.00,
  stockValue: 0.00,
};

export const dashboardItems: DashboardItem[] = [
  {
    id: 'inventory',
    title: 'Inventory',
    icon: 'package',
    color: 'bg-purple-100',
    link: '/inventory',
  },
  {
    id: 'incoming',
    title: 'Incoming Items',
    icon: 'package-plus',
    color: 'bg-blue-100',
    link: '/incoming',
  },
  {
    id: 'outgoing',
    title: 'Outgoing Items',
    icon: 'package-minus',
    color: 'bg-yellow-100',
    link: '/outgoing',
  },
  {
    id: 'overseers',
    title: 'Overseers',
    icon: 'users',
    count: 1,
    color: 'bg-purple-100',
    link: '/overseers',
  },
  {
    id: 'contractors',
    title: 'Contractors',
    icon: 'user',
    count: 0,
    color: 'bg-blue-100',
    link: '/contractors',
  },
  {
    id: 'documents',
    title: 'Documents',
    icon: 'file-text',
    count: 1,
    color: 'bg-pink-100',
    link: '/documents',
  },
];

export const reportItems: ReportItem[] = [
  {
    id: 'inventory-reports',
    title: 'Inventory Reports',
    icon: 'bar-chart-2',
    color: 'bg-yellow-100',
    link: '/reports/inventory',
  },
  {
    id: 'expenses',
    title: 'Expenses',
    icon: 'wallet',
    value: 0.00,
    color: 'bg-pink-100',
    link: '/reports/expenses',
  },
];

export const inventoryItems: InventoryItem[] = [
  {
    id: '1',
    name: 'Pagani Huayra',
    category: 'Fast Car',
    quantity: 50.00,
    buyPrice: 0.00,
    sellPrice: 0.00,
  },
];

export const incomingItems: IncomingItem[] = [
  {
    id: '000002',
    documentNo: '2',
    date: '26/04/2025',
    supplier: '',
    comment: '',
    totalEntries: 0,
    quantity: 0.00,
    total: 0.00,
    isPaid: true,
  },
];

export const outgoingItems: OutgoingItem[] = [
  {
    id: '000001',
    documentNo: '1',
    date: '26/04/2025',
    customer: '',
    discount: 0.0,
    comment: '',
    totalEntries: 0,
    quantity: 0.00,
    total: 0.00,
    isPaid: true,
  },
];