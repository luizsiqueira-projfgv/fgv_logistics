import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { NotFound } from "../fragments/backend";
import { Login, Register, Recover, Forgot } from "../fragments/backend/Account";
import { Dashboard } from "../pages/backend";
//import { Home } from '../pages/frontend'

export const NavegateRouter = createBrowserRouter([
    
    //#region Frontend
    //{ path: '/', element: <Home />, errorElement: <NotFound /> },
    //{ path: '/', element: <></>, errorElement: <></> }
    //#endregion Frontend


    //#region Account
    { path: '/login', element: <Login/>, errorElement: <NotFound /> },
    { path: '/register', element: <Register/>, errorElement: <NotFound /> },
    { path: '/recover', element: <Recover/>, errorElement: <NotFound /> },
    { path: '/forgot', element: <Forgot/>, errorElement: <NotFound /> },
    //#endregion Account
    

    //#region Backend
    { path: '/', element: <Dashboard/>, errorElement: <NotFound /> },
    { path: '/dashboard/', element: <Dashboard/>, errorElement: <NotFound /> },
    // { path: '/admin/dashboard/', element: <Dashboard/>, errorElement: <NotFound /> },

    //#endregion Backend
])

export default NavegateRouter