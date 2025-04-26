import React from 'react';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import IncomingItems from './pages/IncomingItems';
import OutgoingItems from './pages/OutgoingItems';
import Contractors from './pages/Contractors';
import Overseers from './pages/Overseers';

function App() {
  const path = window.location.pathname;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {path === '/' && (
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
      )}
      {path === '/inventory' && <Inventory />}
      {path === '/incoming' && <IncomingItems />}
      {path === '/outgoing' && <OutgoingItems />}
      {path === '/contractors' && <Contractors />}
      {path === '/overseers' && <Overseers />}
    </div>
  );
}

export default App;