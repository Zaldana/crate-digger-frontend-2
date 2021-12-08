import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import CheckTokenHook from '../hooks/CheckTokenHook'

function PrivateRoute({ children }) {

    const { checkJwtToken } = CheckTokenHook()
    const location = useLocation()

    if (checkJwtToken()) {

        return children;

    } else {

        return <Navigate to="/sign-in" state={{ from: location }} />;
    }
}

export default PrivateRoute