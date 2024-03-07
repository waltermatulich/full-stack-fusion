import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Menu from "./pages/Menu.jsx"
import Signup from './pages/Signup.jsx'
const router = createBrowserRouter([{
  path: "/",
  elements: <App />,
  children: [
    {
      index: true,
      element: <Home/>
    }, {
      path: '/login',
      element: <Login />
    }, {
      path: '/menu',
      element: <Menu />
    }, {
      path: "/signup",
      element: <Signup />
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)