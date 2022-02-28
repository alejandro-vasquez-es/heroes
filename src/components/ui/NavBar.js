import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext.js';
import { types } from '../../types/index.js';

export const Navbar = () => {

    const { user, dispatch } = useContext(AuthContext);
    const { name } = user;

    const navigate = useNavigate()

    const handleLogout = () =>{

        dispatch({
            type: types.logout
        });        

        navigate('/login', {
            replace: true
        });
        
    }
    
    return (
        <nav className='px-4 pl-4 navbar navbar-expand-sm navbar-dark bg-dark'>
            
            {/* <div className='container'> */}
                <Link 
                    className='navbar-brand' 
                    to='/'
                >
                    Asociaciones
                </Link>

                <div className='navbar-collapse'>
                    <div className='navbar-nav'>

                        <NavLink 
                            className={( { isActive } ) => 'nav-item nav-link ' + ( isActive ? 'active' : '')}
                            to='/marvel'
                        >
                            Marvel
                        </NavLink>

                        <NavLink 
                            className={( { isActive } ) => 'nav-item nav-link ' + ( isActive ? 'active' : '')}
                            to='/dc'
                        >
                            DC
                        </NavLink>

                        <NavLink 
                            className={( { isActive } ) => 'nav-item nav-link ' + ( isActive ? 'active' : '')}
                            to='/search'
                        >
                            Search
                        </NavLink>
                    </div>
                </div>

                <div className='order-3 navbar-collapse collapse w-100 dual-collapse2 d-flex justify-content-end'>
                    <ul className='ml-auto navbar-nav'>

                        <span className='nav-item nav-link text-info'>
                            { name }
                        </span>

                        <button 
                            onClick={ handleLogout }
                            id='logout'
                            className='nav-item nav-link btn'
                        >
                            Logout
                        </button>
                    </ul>
                </div>
            {/* </div> */}
            
        </nav>

            
    )
}