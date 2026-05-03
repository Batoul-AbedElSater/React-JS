
import {createRoot} from 'react-dom/client';
//1. create a root 
const root = createRoot(document.getElementById('root'));
//2. render some markup to the root
root.render(<h1>Welcome to React!</h1>)