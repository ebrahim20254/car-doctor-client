import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from './Routers/Router';
import AuthProvider from './Providers/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=' max-w-7xl mx-auto'>
    <React.StrictMode>
     <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
    </React.StrictMode>,
  </div>
)
