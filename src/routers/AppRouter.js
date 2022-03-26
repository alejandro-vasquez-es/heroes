import { Routes, Route, BrowserRouter } from "react-router-dom";

import { PrivateRouter } from "./PrivateRouter.js";
import { PublicRoute } from "./PublicRoute.js";

import { LoginPage } from '../components/login/LoginPage.js';
import { DashboardRoutes } from './DashboardRoutes.js';


export const AppRouter = () => {
    return (
        <BrowserRouter>

            <Routes>

                {console.log(process.env.REACT_APP_URL, process.env)}

                <Route path={`${process.env.REACT_APP_URL}/login`} element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } />
                <Route path={`${process.env.REACT_APP_URL}/*`} element={
                    <PrivateRouter>
                        <DashboardRoutes />
                    </PrivateRouter>
                } />

            </Routes>

        </BrowserRouter>
    )
}
