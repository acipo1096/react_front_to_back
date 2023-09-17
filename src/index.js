// index.js is the entry point to React
// The commented out code is from Brad's lesson & React 17
// However, according to the below link, the uncommented code is the way to create root starting with React 18
// https://react.dev/blog/2022/03/08/react-18-upgrade-guide#updates-to-client-rendering-apis

import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<React.StrictMode>
    <App />
</React.StrictMode>)

// ReactDOM.render(
// <React.StrictMode>
//     <App />
// </React.StrictMode>
// ,document.getElementById('root'))