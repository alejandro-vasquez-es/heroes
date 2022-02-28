import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext.js';
import { types } from '../../types/index.js'

export const LoginPage = () => {

    const navigate = useNavigate();
    const { dispatch } = useContext( AuthContext );

    const handleLogin = ()=>{
        
        const action = {
            type: types.login,
            payload: {
                name: 'User Name'
            }
        }
        
        dispatch(action);

        const lastPath = localStorage.getItem('lastPath');
        
        navigate(lastPath, {
            replace: true
        });
        
    }

    return (
        <div className='container mt-5'>
            <h1>Login page</h1>
            <hr/>

            <button
                className='btn btn-outline-primary'
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}
