import { createBrowserRouter } from "react-router-dom";

import { Landing, Register, Login, Home, Library, Create, Settings } from '../pages/index';
import { UnprotectedLayout, ProtectedLayout } from "../layouts/index";

export const ROOT = "/";
export const REGISTER = "/register";
export const LOGIN = "/login";

export const HOME = "/home";
export const LIBRARY = "/library"
export const CREATE = "/create"
export const SETTINGS = "/settings"

export const router = createBrowserRouter([

    {
        element: <UnprotectedLayout />, children: [
            { path: ROOT, element: <Landing /> },
            { path: LOGIN, element: <Login /> },
            { path: REGISTER, element: <Register /> },
        ]
    },
    {
        element: <ProtectedLayout />, children: [
            { path: HOME, element: <Home /> },
            { path: LIBRARY, element: <Library /> },
            { path: CREATE, element: <Create /> },
            { path: SETTINGS, element: <Settings /> },
        ]
    }

]);