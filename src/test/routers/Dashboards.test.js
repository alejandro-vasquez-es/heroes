import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext.js";
import { DashboardRoutes } from "../../routers/DashboardRoutes.js";


describe('<Dashboard /> tests', () => {
  
      const contextValue = {
          user: {
              logged: true,
              name: 'Pepe'
          }
      }

    test('should show propertly - Marvel (default) ', () => {
      
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries= { ['/'] }>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        )
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info' ).text().trim() ).toBe('Pepe');

    });

    test('should show propertly - DC ', () => {
      
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries= { ['/dc'] }>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        )
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('h1' ).text().trim() ).toBe('Dc page');

    });
    
});
