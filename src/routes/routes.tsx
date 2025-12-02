import { Route, Routes } from "react-router-dom"

import ProtectedRoutes from "@/layouts/PrivateRoute/ProtectedRoute";
import AdminLayout from "@/layouts/PrivateRoute/AdminLayout";
import PublicRoutes from "@/layouts/PublicRoute/PublicRoutes";

import LoginPage from "@/pages/LoginPage/LoginPage";
import RegisterPage from "@/pages/RegisterPage/RegisterPage";
import ErrorPage from "@/pages/ErrorPage";
import SalaryPage from "@/pages/SalaryPage/SalaryPage";
import DashboardPage from "@/pages/DashboardPage/DashboardPage";
import ExpensePage from "@/pages/ExpensePage/ExpensePage";


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="*" element={<ErrorPage />} />

            <Route>
                <Route element={<PublicRoutes />}>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/cadastro" element={<RegisterPage />} />
                </Route>

                <Route element={
                    <ProtectedRoutes>
                        <AdminLayout />
                    </ProtectedRoutes>
                    }>
                    <Route path="/home" element={<DashboardPage />} />
                    <Route path="/gastos" element={<ExpensePage />} />
                    <Route path="/renda" element={<SalaryPage />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default AppRoutes;