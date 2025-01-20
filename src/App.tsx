import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { Home } from './pages/Home';
import { UserDetail } from './pages/UserDetail';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <UserProvider>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            <ThemeToggle />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user/:id" element={<UserDetail />} />
            </Routes>
          </div>
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}