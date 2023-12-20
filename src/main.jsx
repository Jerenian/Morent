import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'reset-css';
import "@fontsource/plus-jakarta-sans";
import './main.scss'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
<App/>
</BrowserRouter>
)
