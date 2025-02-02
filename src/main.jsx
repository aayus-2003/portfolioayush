import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/ABout.jsx'
import Contact from './components/Contact/Contact.jsx'
import Service from './components/Services/Service.jsx';

const router = createBrowserRouter([
  {
    path : 'reactporfolio',
    element : <Layout />,
    children : [
      {
        path : '',
        element : <Home />
      },
      {
        path : 'about',
        element : <About />
      },
      {
        path : 'service',
        element : <Service />
      },
      {
        path : 'contact',
        element : <Contact />
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
