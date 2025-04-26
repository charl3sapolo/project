import React, { useState } from 'react';
import { ArrowLeft, Search, MoreVertical, Barcode, ChevronRight, ArrowUp } from 'lucide-react';
import { incomingItems } from '../data/mockData';

interface InventoryItem {
  name: string;
  quantity: number;
  unit: string;
  costPerUnit: number;
  projectId: string;
  description: string;
  imageUrl: string;
}

const IncomingItems: React.FC = () => {
  const currentItem = incomingItems[0];
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState<InventoryItem>({
    name: '',
    quantity: 0,
    unit: '',
    costPerUnit: 0,
    projectId: '',
    description: '',
    imageUrl: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'quantity' || name === 'costPerUnit' ? parseFloat(value) || 0 : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('https://construction.contactmanagers.xyz/docs/inventory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit inventory item');
      }

      // We don't need to store the result, just show success
      await response.json(); // Still parse to ensure valid JSON
      alert('Item added successfully!');
      setFormData({
        name: '',
        quantity: 0,
        unit: '',
        costPerUnit: 0,
        projectId: '',
        description: '',
        imageUrl: ''
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

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

        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-4 mb-4 shadow">
          <h2 className="text-lg font-semibold mb-4">Add New Inventory Item</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Item Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 rounded-lg border border-gray-300"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                className="w-full p-2 rounded-lg border border-gray-300"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Unit</label>
              <select
                name="unit"
                value={formData.unit}
                onChange={handleInputChange}
                className="w-full p-2 rounded-lg border border-gray-300"
                required
              >
                <option value="">Select unit</option>
                <option value="pcs">Pieces</option>
                <option value="kg">Kilograms</option>
                <option value="m">Meters</option>
                <option value="l">Liters</option>
                <option value="box">Box</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Cost Per Unit</label>
              <input
                type="number"
                name="costPerUnit"
                value={formData.costPerUnit}
                onChange={handleInputChange}
                step="0.01"
                className="w-full p-2 rounded-lg border border-gray-300"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Project ID</label>
              <input
                type="text"
                name="projectId"
                value={formData.projectId}
                onChange={handleInputChange}
                className="w-full p-2 rounded-lg border border-gray-300"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Image URL</label>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleInputChange}
                className="w-full p-2 rounded-lg border border-gray-300"
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full p-2 rounded-lg border border-gray-300 h-24 resize-none"
            />
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
            >
              {loading ? 'Submitting...' : 'Add Item'}
            </button>
          </div>
          
          {error && <div className="text-red-500 mt-2">{error}</div>}
        </form>

        {formData.imageUrl && (
          <div className="flex flex-col items-center justify-center mb-4">
            <div className="w-32 h-32 mb-2">
              <img
                src={formData.imageUrl || "https://via.placeholder.com/128"}
                alt="Item preview"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm text-gray-600">Item Preview</p>
          </div>
        )}
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