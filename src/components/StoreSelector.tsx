import React from 'react';
import { ChevronRight, Store } from 'lucide-react';
import { StoreInfo } from '../types';

interface StoreSelectorProps {
  store: StoreInfo;
  onSelect: () => void;
}

const StoreSelector: React.FC<StoreSelectorProps> = ({ store, onSelect }) => {
  return (
    <div className="flex items-center mb-4">
      <div 
        className="flex-1 bg-blue-100 p-4 rounded-lg text-blue-800 mr-2 flex items-center justify-between cursor-pointer shadow-sm hover:shadow-md transition-shadow"
        onClick={onSelect}
        role="button"
        tabIndex={0}
        aria-label={`Select store: ${store.name}`}
      >
        <span className="text-lg font-medium">{store.name}</span>
        <ChevronRight size={20} />
      </div>
      
      <div className="bg-blue-100 p-3 rounded-lg flex items-center justify-center text-blue-800 cursor-pointer hover:shadow-md transition-shadow">
        <Store size={24} />
      </div>
    </div>
  );
};

export default StoreSelector;