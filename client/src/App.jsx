import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./pages/Auth/Login/Login"
import Register from "./pages/Auth/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";

const appRouter = createBrowserRouter ([
    // Authentication Routes
    {
        path: "/",
        element: <Login/>
    },
    
    {
        path: '/register',
        element: <Register/>
    },

    {
        path: '/dashboard',
        element: <Dashboard />
    }
]);

function App() {
    return (
        <>
            <RouterProvider router={appRouter} />
        </>
    )
}

export default App