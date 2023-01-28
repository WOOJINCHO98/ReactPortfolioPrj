import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode)

root.render(<React.StrictMode>
    <App/>
</React.StrictMode>,);

reportWebVitals();