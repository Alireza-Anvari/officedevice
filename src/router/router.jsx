import {createBrowserRouter} from 'react-router-dom'
import MainLayout from '../mainlayout/MainLayout'

import ErrorPage from '../utils/ErrorPage'
import Home from '../components/body/Home'

export const router=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {path:"/",element:<Home/>},
            // {path:"AllServices",element:<AllServices/>},
            // {path:"/#AboutUs",element:<AboutUs/>},
            // {path:"/#Services",element:<Services/>},
        ]
    }
])