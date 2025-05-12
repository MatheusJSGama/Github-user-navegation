import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import { Home } from '../pages/Home'
import { Issue } from '../pages/IssuePage'

export const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children: [
            { path: '/', element: <Home/>},
            { path: '/issue', element: <Issue/>}
        ]
    }
])
