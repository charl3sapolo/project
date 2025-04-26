import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import IncomingItems from './pages/IncomingItems';
import OutgoingItems from './pages/OutgoingItems';
import Contractors from './pages/Contractors';
import Overseers from './pages/Overseers';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = !!localStorage.getItem('authToken');
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
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
              </PrivateRoute>
            }
          />
          <Route
            path="/inventory"
            element={
              <PrivateRoute>
                <Inventory />
              </PrivateRoute>
            }
          />
          <Route
            path="/incoming"
            element={
              <PrivateRoute>
                <IncomingItems />
              </PrivateRoute>
            }
          />
          <Route
            path="/outgoing"
            element={
              <PrivateRoute>
                <OutgoingItems />
              </PrivateRoute>
            }
          />
          <Route
            path="/contractors"
            element={
              <PrivateRoute>
                <Contractors />
              </PrivateRoute>
            }
          />
          <Route
            path="/overseers"
            element={
              <PrivateRoute>
                <Overseers />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;