/* eslint-disable import/no-named-as-default */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  QueryClient, QueryClientProvider,
} from '@tanstack/react-query'
import { Provider } from 'react-redux'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Authentication } from './companents/Authentication/Authentication'
import { Registration } from './companents/Registration/Registration'

import { Main } from './companents/Main/Main'
// import AppContextProvider from './context/AppContext'
import Products from './companents/Products/Products'
import { store } from './redux/store'
import Cart from './companents/Cart/Cart'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
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
        element: <Products />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
], { basename: '/DogFood' })

const queryClient = new QueryClient({
  defaultOption: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

      <Provider store={store}>
        <RouterProvider router={router} />

      </Provider>

    </QueryClientProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
