import { createBrowserRouter } from "react-router-dom";
import Main from "../MainFile/Main";
import Home from "../HomeFile/Home";
import Register from "../RegisterFile/Register";
import Login from "../LoginFile/Login";

const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>,
        children: [
            {
                path: "/", element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/hotaildata")
            },
            { path: "register", element: <Register></Register> },
            { path: "login", element: <Login></Login> }
        ]
    }
])

export default router;