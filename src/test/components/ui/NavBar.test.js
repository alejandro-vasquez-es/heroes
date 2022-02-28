import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext.js";
import { Navbar } from "../../../components/ui/NavBar.js";
import { types } from "../../../types/index.js";


const mockDispatch = jest.fn();
const mockNavigate = jest.fn();

jest.mock('react-router-dom', ()=> ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))


describe('<NavBar /> tests>', () => {
  
    test('should display propertly', () => {
      
        const contextValue = {
            user: {
                name: 'Pedro',
                logged: true
            }
        }
        
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe('Pedro');

    });

    test('should call the logout, call the navigate and the dispatch with the arguments', () => {
      
        const contextValue = {
            user: {
                name: 'Pedro',
                logged: true
            },
            dispatch: mockDispatch
            
        }
        
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        wrapper.find('#logout').simulate('click');

        expect( mockDispatch ).toHaveBeenCalledWith({
            type: types.logout
        });
        expect( mockNavigate ).toHaveBeenCalledWith('/login', {
            replace: true
        });
        
    });
    
    
    
});
