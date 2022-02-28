import { Routes, Route, BrowserRouter } from "react-router-dom";

import { PrivateRouter } from "./PrivateRouter.js";
import { PublicRoute } from "./PublicRoute.js";

import { LoginPage } from '../components/login/LoginPage.js';
import { DashboardRoutes } from './DashboardRoutes.js';


export const AppRouter = () => {
    return (
        <BrowserRouter>

            <Routes>

                <Route path='/login' element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } />
                <Route path='/*' element={ 
                    <PrivateRouter>
                        <DashboardRoutes />
                    </PrivateRouter>
                } />
                
            </Routes>

        </BrowserRouter>
    )
}
