import React from 'react';
import { useDeviceContext } from '..';
import { useNavigate } from 'react-router-dom';

export const DeviceList: React.FC = () => {
  const { devices, removeDevice } = useDeviceContext();
  const navigate = useNavigate();
  const handleAddDevice = () => {
    navigate('/add-device');
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Devices List</h2>
        <button
          onClick={handleAddDevice}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Device
        </button>
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Model</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {devices.map((device) => (
            <tr key={device.id}>
              <td className="py-2 px-4 border-b">{device.id}</td>
              <td className="py-2 px-4 border-b">{device.name}</td>
              <td className="py-2 px-4 border-b">{device.model}</td>
              <td className="py-2 px-4 border-b">${device.price.toFixed(2)}</td>
              <td className="py-2 px-4 border-b">
                <button onClick={() => removeDevice(device.id)} className="text-red-500">Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};