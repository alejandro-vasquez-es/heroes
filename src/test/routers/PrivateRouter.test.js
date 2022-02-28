const { mount } = require("enzyme");
const { MemoryRouter } = require("react-router-dom");

const { AuthContext } = require("../../auth/AuthContext");
const { PrivateRouter } = require("../../routers/PrivateRouter");

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Navigate: () => <span>getting out of here</span>
}))

describe('tests in <PrivateRoute />', () => {

    Storage.prototype.setItem = jest.fn();
  
    test('should display the children component if it is authenticated and sabe in localstorage', () => {
      
        const contextValue =  {
            user: {
                logged: true,
                name: 'Pepe'
            }
        }
        
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']} >
                    <PrivateRouter>
                        <h1>Private Component</h1>
                    </PrivateRouter>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( wrapper.text().trim() ).toBe('Private Component');
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/marvel');

    });
    
    test('should block the component if it is not authenticate', () => {
      
        const contextValue =  {
            user: {
                logged: false
            }
        }
        
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']} >
                    <PrivateRouter>
                        <h1>Private Component</h1>
                    </PrivateRouter>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( wrapper.text().trim() ).toBe('getting out of here');
        
    });
    
});
