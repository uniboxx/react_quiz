import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './css/global.css';
import { QuizProvider } from './contexts/QuizContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>
);
