import React from 'react';
import { ArrowLeft, Search, FileText } from 'lucide-react';

const Contractors: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-blue-500 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <a href="/" className="p-2 -m-2">
              <ArrowLeft size={24} />
            </a>
            <h1 className="text-xl font-semibold ml-4">Contractor</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-1">
              <Search size={24} />
            </button>
            <button className="p-1">
              <FileText size={24} />
            </button>
          </div>
        </div>
      </header>

      <div className="bg-blue-500 text-white px-4 py-2">
        <div className="flex justify-between">
          <div>NO.OF CONTRACTOR: 0</div>
        </div>
      </div>

      <main className="flex-1 p-4">
        <div className="flex flex-col items-center justify-center flex-1 text-center mt-20">
          <div className="w-32 h-32 mb-4">
            <img
              src="https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=256"
              alt="Add contractor"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <p className="text-lg font-semibold text-gray-700">No Data</p>
          <p className="text-gray-500">Add Contractor</p>
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

export default Contractors;