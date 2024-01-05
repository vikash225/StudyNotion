import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    console.log("kya laye hai bhaya children me thoda hame bhi bataiye",children)

    const {token} = useSelector((state) => state.auth);

    if(token !== null)
        return children
    else
        return <Navigate to="/login" />

}

export default PrivateRoute
