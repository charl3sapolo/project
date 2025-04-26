import React from 'react';
import StoreSelector from '../components/StoreSelector';
import DashboardGrid from '../components/DashboardGrid';
import SectionTitle from '../components/SectionTitle';
import ReportsList from '../components/ReportsList';
import { currentStore, dashboardItems, reportItems } from '../data/mockData';

const Dashboard: React.FC = () => {
  const handleStoreSelect = () => {
    // In a real app, this would open a store selection modal or navigate to a store selection page
    console.log('Store selection clicked');
  };

  return (
    <div className="p-4">
      <StoreSelector store={currentStore} onSelect={handleStoreSelect} />
      
      <SectionTitle title="Dashboard" />
      <DashboardGrid items={dashboardItems} />
      
      <SectionTitle title="Reports and Expenses" />
      <ReportsList items={reportItems} />
    </div>
  );
};

export default Dashboard;