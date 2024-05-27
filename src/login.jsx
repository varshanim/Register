import React from 'react';
import {useParams} from 'react-router-dom';
export const Login = () => {
  const params = useParams();
  return (
    <div><h1>You have been Logged in</h1>
    <h3>Details: {JSON.stringify(params)}</h3>
    </div>
  )
}
