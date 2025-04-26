import React, { useState } from 'react';
import { Menu, FileText, Info, X } from 'lucide-react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 z-10 bg-blue-500 text-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        <button 
          onClick={toggleMenu} 
          className="p-1 rounded-md hover:bg-blue-600 transition-colors"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <h1 className="text-xl font-semibold">{title}</h1>
        
        <div className="flex items-center space-x-4">
          <button 
            className="p-1 rounded-md hover:bg-blue-600 transition-colors"
            aria-label="Documents"
          >
            <FileText size={24} />
          </button>
          <button 
            className="p-1 rounded-md hover:bg-blue-600 transition-colors"
            aria-label="Information"
          >
            <Info size={24} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="absolute top-full left-0 w-64 bg-white text-gray-800 shadow-lg rounded-b-md p-4 z-20">
          <ul className="space-y-2">
            <li>
              <a href="/" className="block p-2 hover:bg-gray-100 rounded-md transition-colors">Dashboard</a>
            </li>
            <li>
              <a href="/inventory" className="block p-2 hover:bg-gray-100 rounded-md transition-colors">Inventory</a>
            </li>
            <li>
              <a href="/overseers" className="block p-2 hover:bg-gray-100 rounded-md transition-colors">Overseers</a>
            </li>
            <li>
              <a href="/contractors" className="block p-2 hover:bg-gray-100 rounded-md transition-colors">Contractors</a>
            </li>
            <li>
              <a href="/reports" className="block p-2 hover:bg-gray-100 rounded-md transition-colors">Reports</a>
            </li>
            <li>
              <a href="/settings" className="block p-2 hover:bg-gray-100 rounded-md transition-colors">Settings</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;