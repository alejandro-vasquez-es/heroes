import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext.js';


export const PrivateRouter = ({ children }) => {

    const { user } = useContext(AuthContext);
    const { pathname, search } = useLocation();

    localStorage.setItem('lastPath', process.env.REACT_APP_URL + pathname + search);

    return user.logged
        ? children
        : <Navigate to={`${process.env.REACT_APP_URL}/login`} />
};
