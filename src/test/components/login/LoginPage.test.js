import { mount } from "enzyme";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";
import { LoginPage } from "../../../components/login/LoginPage";


const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));


describe('tests in <LoginComponent />', () => {

    const contextValue = {
        user: {
            logged: false
        },
        dispatch: jest.fn()
        
    }

    const wrapper = mount(
        <AuthContext.Provider value={ contextValue } >
            <MemoryRouter>
                <Routes>
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/' element={<h1>hola<h1/>} />
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>);

    test('should match with snapshot', () => {

        expect(wrapper).toMatchSnapshot();
        
    });
    
    

});
