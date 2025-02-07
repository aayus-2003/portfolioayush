import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Service from './components/Services/Service.jsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home />},
        { path: 'about', element: <About /> },
        { path: 'service', element: <Service /> },
        { path: 'contact', element: <Contact /> }
      ]
    }
  ],
  { basename: '/ayushportfolio' } 
);


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
