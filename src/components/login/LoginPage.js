import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext.js';
import { types } from '../../types/index.js';
import batman from '../../assets/heroes/dc-batman.jpg';
import { useForm } from '../../hooks/useForm.js';
import './Login.css';

export const LoginPage = () => {


    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);

    const [values, handleInputChange] = useForm({
        name: ''
    });
    const { name } = values;


    const handleLogin = (e) => {
        e.preventDefault();
        const action = {
            type: types.login,
            payload: {
                name
            }
        }

        dispatch(action);

        const lastPath = localStorage.getItem('lastPath');

        navigate(lastPath, {
            replace: true
        });

    }

    return (
        <div className='container mt-5 login animate__fadeIn animate__animated'>
            <div className='card mb-3'>
                <div className="row g-0 d-flex align-items-center">
                    <div className="col-lg-4 d-none d-lg-flex">
                        <img
                            src={batman}
                            alt="Trendy Pants and Shoes"
                            className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5 animate__delay-1s animate__slower animate__fadeIn animate__animated"
                        />
                    </div>
                    <div className="col-lg-8">
                        <div className="card-body py-5 px-md-5">
                            <h1>Welcome to Heroes App</h1>
                            <hr />
                            <p>Here you can find a lot of superheroes of dc comics and marvel</p>
                            <p>Thanks vor visiting, please write your name below :)</p>

                            <form
                                onSubmit={handleLogin}
                            >
                                <div className="form-outline mb-4">
                                    <input
                                        autoComplete="off"
                                        className="form-control"
                                        name="name"
                                        onChange={handleInputChange}
                                        type="text"
                                        value={name}
                                        autoFocus
                                    />
                                </div>

                                <button className='btn btn-outline-primary'>Login</button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
