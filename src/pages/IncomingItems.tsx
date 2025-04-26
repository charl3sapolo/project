import React from 'react';
import { ArrowLeft, Search, MoreVertical, Barcode, ChevronRight, ArrowUp } from 'lucide-react';
import { incomingItems } from '../data/mockData';

const IncomingItems: React.FC = () => {
  const currentItem = incomingItems[0];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-blue-500 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <a href="/" className="p-2 -m-2">
              <ArrowLeft size={24} />
            </a>
            <h1 className="text-xl font-semibold ml-4">Incoming No({currentItem.id})</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-1">
              <Search size={24} />
            </button>
            <button className="p-1">
              <Barcode size={24} />
            </button>
            <button className="p-1">
              <MoreVertical size={24} />
            </button>
          </div>
        </div>
      </header>

      <div className="bg-blue-500 text-white px-4 py-2">
        <div className="flex justify-between mb-2">
          <div>TOTAL ENTRIES: {currentItem.totalEntries}</div>
        </div>
        <div className="flex justify-between">
          <div>QTY: {currentItem.quantity.toFixed(2)}</div>
          <div>TOTAL: ${currentItem.total.toFixed(2)}</div>
        </div>
      </div>

      <main className="flex-1 p-4">
        <div className="bg-blue-100 rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Document Properties</h2>
            <div className="flex items-center">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm mr-2">
                PAID
              </span>
              <button className="bg-blue-500 text-white p-2 rounded-full">
                <ArrowUp size={20} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Document's date</label>
              <input
                type="text"
                value={currentItem.date}
                readOnly
                className="w-full p-2 rounded-lg bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Document No</label>
              <input
                type="text"
                value={currentItem.documentNo}
                readOnly
                className="w-full p-2 rounded-lg bg-white"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Supplier</label>
            <button className="w-full p-2 rounded-lg bg-white flex justify-between items-center">
              <span className="text-gray-400">Select supplier</span>
              <ChevronRight size={20} />
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Comment</label>
            <textarea
              className="w-full p-2 rounded-lg bg-white h-24 resize-none"
              placeholder="Add a comment..."
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center flex-1 text-center">
          <div className="w-32 h-32 mb-4">
            <img
              src="https://via.placeholder.com/128"
              alt="Add incoming item"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-lg font-semibold text-gray-700">Add incoming item</p>
        </div>
      </main>

      <div className="fixed bottom-4 right-4">
        <button className="bg-blue-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center">
          <span className="text-2xl">+</span>
        </button>
      </div>
    </div>
  );
};

export default IncomingItems;