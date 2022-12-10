import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App'; // A component that can be rendered

// Root is the main element in the HTML where content will be placed/rendered
// (It's just a <div id="root"> in index.html)
const root = ReactDOM.createRoot(document.getElementById('root'));

// This is JSX
root.render(<App />);
