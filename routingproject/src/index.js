import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoutes=createBrowserRouter(
  [
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'about',
      element:<About></About>
    },
    {
      path:'contact',
      element:<Contact></Contact>
    },
    {
      path:'blog',
      element:<Blog></Blog>
    },
    {
      path:'blog/:id',
      element:<BlogDetails></BlogDetails>
    }
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
