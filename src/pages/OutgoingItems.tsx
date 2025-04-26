import React, { useState } from 'react';
import { ArrowLeft, Search, MoreVertical, Barcode, Upload } from 'lucide-react';
import { outgoingItems } from '../data/mockData';

const OutgoingItems: React.FC = () => {
  const currentItem = outgoingItems[0];
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    amount: '',
    description: '',
    date: new Date().toISOString().split('T')[0],
    project_id: '',
    receipt: null as File | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData(prev => ({
        ...prev,
        receipt: e.target.files![0]
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const formPayload = new FormData();
      formPayload.append('amount', formData.amount);
      formPayload.append('description', formData.description);
      formPayload.append('date', formData.date);
      formPayload.append('project_id', formData.project_id);
      if (formData.receipt) {
        formPayload.append('receipt', formData.receipt);
      }

      const response = await fetch('https://construction.contactmanagers.xyz/expenses', {
        method: 'POST',
        body: formPayload
      });

      if (!response.ok) {
        throw new Error('Failed to submit expense');
      }

      setSubmitMessage('Expense submitted successfully!');
      setFormData({
        amount: '',
        description: '',
        date: new Date().toISOString().split('T')[0],
        project_id: '',
        receipt: null
      });
    } catch (error) {
      setSubmitMessage(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
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
            <h1 className="text-xl font-semibold ml-4">Outgoing No({currentItem.id})</h1>
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
        {isFormOpen ? (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Add New Expense</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="amount">
                  Amount
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="description">
                  Description
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="date">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="project_id">
                  Project ID
                </label>
                <input
                  type="text"
                  id="project_id"
                  name="project_id"
                  value={formData.project_id}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="receipt">
                  Receipt (Image/PDF)
                </label>
                <div className="flex items-center">
                  <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded border border-gray-300 flex items-center">
                    <Upload size={16} className="mr-2" />
                    {formData.receipt ? formData.receipt.name : 'Choose file'}
                    <input
                      type="file"
                      id="receipt"
                      name="receipt"
                      onChange={handleFileChange}
                      className="hidden"
                      accept="image/*,.pdf"
                    />
                  </label>
                </div>
              </div>

              {submitMessage && (
                <div className={`mb-4 p-2 rounded ${submitMessage.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {submitMessage}
                </div>
              )}

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Expense'}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center flex-1 text-center">
            <div className="w-32 h-32 mb-4">
              <img
                src="https://via.placeholder.com/128"
                alt="Add outgoing item"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-lg font-semibold text-gray-700">Add outgoing item</p>
          </div>
        )}
      </main>

      {!isFormOpen && (
        <div className="fixed bottom-4 right-4">
          <button 
            onClick={() => setIsFormOpen(true)}
            className="bg-blue-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600"
          >
            <span className="text-2xl">+</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default OutgoingItems;