import { createBrowserRouter } from "react-router-dom";
import UserName from "../Components/Form/UserName/UserName";
import Register from "../Components/Form/Register/Register";
import Password from "../Components/Form/Password/Password";


let route = createBrowserRouter([
    {
        path: '/',
        element: <UserName />
    },
    {
        path:'/register',
        element:<Register/>
    },
    {
        path:'/password',
        element: <Password/>
    },
    // {
    //     path:'/recovery',
    //     element:<Re
    // }

])

export default route