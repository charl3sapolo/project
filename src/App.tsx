import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import IncomingItems from './pages/IncomingItems';
import OutgoingItems from './pages/OutgoingItems';
import Contractors from './pages/Contractors';
import Overseers from './pages/Overseers';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header title="Brick'd" />
                <main className="flex-1 max-w-4xl mx-auto w-full">
                  <Dashboard />
                </main>
                <footer className="p-4 text-center text-gray-500 text-sm">
                  <div className="max-w-4xl mx-auto">
                    Brick'd © {new Date().getFullYear()}
                  </div>
                </footer>
              </>
            }
          />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/incoming" element={<IncomingItems />} />
          <Route path="/outgoing" element={<OutgoingItems />} />
          <Route path="/contractors" element={<Contractors />} />
          <Route path="/overseers" element={<Overseers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;