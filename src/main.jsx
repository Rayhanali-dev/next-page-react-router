import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import About from './components/About/About';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import BookDetails from './components/BookDetails/BookDetails';
import LoaderSpinner from './components/LoaderSpinner/LoaderSpinner';
import ErrorElement from './components/ErrorElement/ErrorElement';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/books',
        element: <Blog></Blog>,
        loader: () => fetch('https://api.itbook.store/1.0/new')
      },
      {
        path: 'books/:id',
        element: <BookDetails></BookDetails>,
        loader: ({params}) => fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: 'loader',
        element: <LoaderSpinner></LoaderSpinner>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
