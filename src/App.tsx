import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { DeviceForm, DeviceList, DeviceProvider } from './Devices';

const App: React.FC = () => {
  return (
    <DeviceProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          {/* Top Navigation Bar */}
          <nav className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
              <div className="text-lg font-bold">Phone Store</div>
              <div>
                <Link to="/" className="mx-2 hover:underline">Home</Link>
                <Link to="/devices" className="mx-2 hover:underline">Devices List</Link>
                <Link to="/sale-list" className="mx-2 hover:underline">Sale List</Link>
                <Link to="/mobile-info" className="mx-2 hover:underline">Mobile Info</Link>
                <Link to="/register-id" className="mx-2 hover:underline">Register ID</Link>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-grow p-4">
            <Routes>
              <Route path="/" element={<div>Welcome to Phone Store</div>} />
              <Route path="/devices" element={<DeviceList />} />
              <Route path="/add-device" element={<DeviceForm />} />
            </Routes>
          </main>
        </div>
      </Router>
    </DeviceProvider>
  );
};

export default App;
