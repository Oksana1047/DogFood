import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Authentication } from './companents/Authentication/Authentication'
import { Registration } from './companents/Registration/Registration'
import { Food } from './companents/Food/Food'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'signin',
        element: <Authentication />,
      },
      {
        path: 'signup',
        element: <Registration />,
      },
      {
        path: 'products',
        element: <Food />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
