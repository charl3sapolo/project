import React from 'react';
import ReportItem from './ReportItem';
import { ReportItem as ReportItemType } from '../types';

interface ReportsListProps {
  items: ReportItemType[];
}

const ReportsList: React.FC<ReportsListProps> = ({ items }) => {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <ReportItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ReportsList;