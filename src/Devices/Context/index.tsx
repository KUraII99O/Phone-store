import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define types for devices and sales
interface Device {
  id: string;
  name: string;
  model: string;
  price: number;
}

interface Sale {
  id: string;
  deviceId: string;
  quantity: number;
  total: number;
}

interface DeviceContextProps {
  devices: Device[];
  sales: Sale[];
  addDevice: (device: Device) => void;
  removeDevice: (id: string) => void;
  addSale: (sale: Sale) => void;
}

const DeviceContext = createContext<DeviceContextProps | undefined>(undefined);

export const DeviceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [sales, setSales] = useState<Sale[]>([]);

  const addDevice = (device: Device) => {
    setDevices([...devices, device]);
  };

  const removeDevice = (id: string) => {
    setDevices(devices.filter(device => device.id !== id));
  };

  const addSale = (sale: Sale) => {
    setSales([...sales, sale]);
  };

  return (
    <DeviceContext.Provider value={{ devices, sales, addDevice, removeDevice, addSale }}>
      {children}
    </DeviceContext.Provider>
  );
};

export const useDeviceContext = () => {
  const context = useContext(DeviceContext);
  if (!context) {
    throw new Error('useDeviceContext must be used within a DeviceProvider');
  }
  return context;
};
