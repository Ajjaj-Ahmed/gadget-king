import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Laptop from './components/Laptop/Laptop.jsx';


const router = createBrowserRouter([
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/laptops',
        element:<Laptop></Laptop>
      }
    
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
