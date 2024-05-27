import * as React from 'react';
import User from './user';
import Register from './register';
import { useRoutes } from 'react-router-dom';
import { Login } from './login';

export const RouterIndex = () => {
    const routes=useRoutes([

        {
            path:"/",
            element: <Register/>,
        },
        {
            path:"/user",
            element: <User/>
        },
        /*for useParams*/
        {
            path:"/login/:LoginId",
            element: <Login/>
        },
        {
            path:'/login',
            element: <Login/>
        }

    ])
    return (
  <>{routes}</>  ) 
}