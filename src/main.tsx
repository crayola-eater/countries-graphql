import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';
import ApolloProvider from './contexts/ApolloProvider.js';
import './index.css';

const element = document.getElementById('root');

if (null === element) {
  throw new Error('Failed to find an element with an id of root');
}

const root = ReactDOM.createRoot(element);

root.render(
  <React.StrictMode>
    <ApolloProvider>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);
