import React from 'react';
import DashboardCard from './DashboardCard';
import { DashboardItem } from '../types';

interface DashboardGridProps {
  items: DashboardItem[];
}

const DashboardGrid: React.FC<DashboardGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-6">
      {items.map((item) => (
        <DashboardCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default DashboardGrid;