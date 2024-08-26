import React, { useState } from 'react';
import { useDeviceContext } from '..';
import { useNavigate } from 'react-router-dom';

export const DeviceForm: React.FC = () => {
  const { addDevice } = useDeviceContext();
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState<number | ''>('');

  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && model && price) {
      addDevice({ id: Date.now().toString(), name, model, price: Number(price) });
      setName('');
      setModel('');
      setPrice('');
      navigate('/devices');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border border-gray-300 rounded-lg">
      <h2 className="text-lg font-bold mb-2">Add Device</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Model</label>
        <input
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number.parseFloat(e.target.value))}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Device</button>
    </form>
  );
};
