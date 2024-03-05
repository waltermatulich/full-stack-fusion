import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, routerProvider } from "react-router-dom/dist"

const router = createBrowserRouter({
  path: "/",
  elements: <App />,
  children: [
    {
      index: true,
      element: < App />
    }
  ]
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}/>
)