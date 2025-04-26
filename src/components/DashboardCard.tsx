import React from 'react';
import * as LucideIcons from 'lucide-react';
import { DashboardItem } from '../types';

interface DashboardCardProps {
  item: DashboardItem;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ item }) => {
  // Dynamically get the icon component from Lucide
  const IconComponent = LucideIcons[item.icon as keyof typeof LucideIcons] || LucideIcons.Box;

  return (
    <a 
      href={item.link}
      className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex flex-col items-center h-full">
        <div className={`${item.color} p-3 rounded-lg mb-2`}>
          <IconComponent className="text-gray-700" size={24} />
        </div>
        <p className="text-center text-gray-800 font-medium">{item.title}</p>
        {item.count !== undefined && (
          <p className="text-2xl font-bold mt-auto">{item.count}</p>
        )}
      </div>
    </a>
  );
};

export default DashboardCard;