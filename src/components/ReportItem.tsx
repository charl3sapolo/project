import React from 'react';
import * as LucideIcons from 'lucide-react';
import { ReportItem as ReportItemType } from '../types';

interface ReportItemProps {
  item: ReportItemType;
}

const ReportItem: React.FC<ReportItemProps> = ({ item }) => {
  // Dynamically get the icon component from Lucide
  const IconComponent = LucideIcons[item.icon as keyof typeof LucideIcons] || LucideIcons.File;

  return (
    <a 
      href={item.link}
      className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow mb-3 flex items-center"
    >
      <div className={`${item.color} p-3 rounded-lg mr-4`}>
        <IconComponent className="text-gray-700" size={24} />
      </div>
      <div className="flex-1">
        <p className="text-gray-800 font-medium">{item.title}</p>
        {item.value !== undefined && (
          <p className="text-2xl font-bold text-gray-900">${item.value.toFixed(2)}</p>
        )}
      </div>
    </a>
  );
};

export default ReportItem;