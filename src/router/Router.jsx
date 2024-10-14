import { Route , Routes } from "react-router-dom"


import HomePage from "pages/HomePage";
import AuthPage from "pages/AuthPage";
import DashboardPage from "pages/DashboardPage";
import AdminPage from "pages/AdminPage";
import PageNotFound from "pages/404";

function Router() {
  return (
    <Routes>
        <Route index element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default Router