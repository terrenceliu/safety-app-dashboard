// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";

// pages
import DashboardPage from "../Pages/DashboardPage";

const dashboardRoutes = [
    {
        path: "/dashboard",
        sidebarName: "Dashboard",
        navbarName: "Test dashboard",
        icon: Dashboard,
        component: DashboardPage
    }
]

export default dashboardRoutes;