import React from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import ContactNav from './components/ContactNav/ContactNav';
import MainNav from './components/MainNav/MainNav';

export default function App() {
  return (
    <div className="app">
      <header className="main-header" role="banner">
        <ErrorBoundary>
          <ContactNav />
        </ErrorBoundary>
        <ErrorBoundary>
          <MainNav />
        </ErrorBoundary>
      </header>
    </div>
  );
}
