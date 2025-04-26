import React from 'react';
import { Package } from 'lucide-react';
import { StockSummary as StockSummaryType } from '../types';

interface StockSummaryProps {
  stockData: StockSummaryType;
}

const StockSummary: React.FC<StockSummaryProps> = ({ stockData }) => {
  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow-sm mb-6 flex items-center">
      <div className="mr-3 text-blue-500">
        <Package size={32} />
      </div>
      <div className="flex-1 flex items-center border-r border-blue-200 pr-4">
        <div>
          <p className="text-blue-700 text-sm">Current Stock</p>
          <p className="text-2xl font-bold text-blue-800">{stockData.currentStock.toFixed(2)}</p>
        </div>
      </div>
      <div className="pl-4 flex-1">
        <p className="text-blue-700 text-sm">Stock Value</p>
        <p className="text-2xl font-bold text-blue-800">${stockData.stockValue.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default StockSummary;