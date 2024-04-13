import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Landingpage from './pages/Landingpage.jsx'
import Notfoundpage from './pages/Notfoundpage.jsx'
import Signin from './pages/Sign-in.jsx'
import Signup from './pages/Sign-up.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landingpage />,
    errorElement: <Notfoundpage />
  },
  {
    path: '/sign-in',
    element: <Signin />,
    errorElement: <Notfoundpage />

  },
  {
    path: '/sign-up',
    element: <Signup />,
    errorElement: <Notfoundpage />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
