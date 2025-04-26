import React from 'react';
import { ArrowLeft, Search, MoreVertical, Store } from 'lucide-react';
import { currentStore, inventoryItems } from '../data/mockData';

const Inventory: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-blue-500 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <a href="/" className="p-2 -m-2">
              <ArrowLeft size={24} />
            </a>
            <h1 className="text-xl font-semibold ml-4">Inventory</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-1">
              <Search size={24} />
            </button>
            <button className="p-1">
              <MoreVertical size={24} />
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Store size={20} />
          <span>{currentStore.name}</span>
        </div>
      </header>

      <div className="bg-blue-500 text-white px-4 py-2 flex justify-between">
        <div>QTY: {inventoryItems.reduce((sum, item) => sum + item.quantity, 0).toFixed(2)}</div>
        <div>
          TOTAL: ${inventoryItems.reduce((sum, item) => sum + item.buyPrice, 0).toFixed(2)}/
          ${inventoryItems.reduce((sum, item) => sum + item.sellPrice, 0).toFixed(2)}
        </div>
      </div>

      <main className="flex-1 p-4">
        {inventoryItems.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-sm mb-3">
            <div className="flex items-center p-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                <img
                  src="https://via.placeholder.com/48"
                  alt={item.name}
                  className="w-8 h-8 object-cover rounded"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                <p className="text-gray-500">{item.category}</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold">{item.quantity.toFixed(2)}</p>
                <p className="text-gray-500">
                  ${item.buyPrice.toFixed(2)}/${item.sellPrice.toFixed(2)}
                </p>
              </div>
              <button className="ml-4 p-2">
                <MoreVertical size={20} className="text-gray-400" />
              </button>
            </div>
          </div>
        ))}
      </main>

      <footer className="bg-white border-t fixed bottom-0 w-full">
        <div className="max-w-screen-xl mx-auto px-4 py-2 flex justify-around">
          <button className="p-2 text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
          </button>
          <button className="p-2 text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="relative">
            <button className="p-2 text-white bg-blue-500 rounded-full shadow-lg -mt-8">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
          <button className="p-2 text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
          <button className="p-2 text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Inventory;