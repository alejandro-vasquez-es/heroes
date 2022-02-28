import { mount } from "enzyme";
import { AuthContext } from "../../auth/AuthContext.js";
import { AppRouter } from "../../routers/AppRouter.js";



describe('<AppRouter/> tests', () => {
    
    
    test('should show login if is not logged', () => {
        
        const contextValue = {
            user:{
                logged: false
            }
        }
        
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
            );
            
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('h1').text().trim() ).toBe('Login page');
            
    });

    test('should show the marvel component if is authenticate', () => {
        
        const contextValue = {
            user:{
                logged: true,
                name: 'Pepe'
            }
        }
        
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
            <AppRouter />
            </AuthContext.Provider>
            );
            
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.navbar').exists() ).toBe( true );
            
    });
        
        
});
    