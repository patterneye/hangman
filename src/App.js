import React from 'react';
import './assets/css/App.css';
import Header from './components/Header';
import Hangman from './components/Hangman';

// Assembles and returns App components for rendering
export default function App() {
  return (
    <div>
      <Header />
      <Hangman />
    </div>
  );
}
