import React from 'react'
import  { createRoot }  from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<p>Hello world! I am using React</p>);