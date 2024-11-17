import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import LoginPage from './pages/Login/Login.js';
import HomePage from './pages/Home/Home.js';
import RegisterPage from './pages/Register/Register.js';
import ProtectedRoute from './ProtectedRoute';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { UserProvider } from './UserContext';

const router = createBrowserRouter ([
  {path: "/", element: <LoginPage />,},
  {path: "/home", element: (
    <ProtectedRoute>
      <HomePage />
    </ProtectedRoute>
  )},
  {path: "/register", element: <RegisterPage />}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();