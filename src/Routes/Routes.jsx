import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Contribution from '../pages/Contribution/Contribution';
import Apps from '../pages/Apps/Apps';
import Installation from '../pages/Installation/Installation';
import AppDetails from '../pages/Apps/AppDetails';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "/contribution",
                Component: Contribution,
            },
            {
                path: "/apps",
                Component: Apps,
            },
            {
                path: "/app/:id",
                Component: AppDetails,
            },
            {
                path: "/installation",
                Component: Installation,
            }
        ]
    }
]);