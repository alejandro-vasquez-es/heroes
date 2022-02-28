import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../components/search/SearchPage.js";


const mockNavigate = jest.fn();

jest.mock('react-router-dom', ()=> ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))

describe('<SearchPage /> tests', () => {
  
    test('should display propertly with default values', () => {
      
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        )
        expect( wrapper.find('.alert-info').text().trim() ).toBe('Search for a superhero.');

    });
    
    test('should display batman card and the input with the queryString', () => {
      
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        )
      
        expect( wrapper.find('input').prop('value') ).toBe('batman');
        expect( wrapper ).toMatchSnapshot();
        
    });
    
    test('should display an error if do not find a hero', () => {
      
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                    <SearchPage />
            </MemoryRouter>
        )

        expect( wrapper.find('#error').exists() ).toBeTruthy();
        expect( wrapper ).toMatchSnapshot();

        
    });
    
    test('should call navigate to the new url', () => {
      
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=superman']} >
                <SearchPage />
            </MemoryRouter>
        )
        
        wrapper.find('input').simulate('change', {
            target: {
                name: 'searchText',
                value: 'batman'
            }
        })
        
        wrapper.find('form').simulate('submit', {
            preventDefault: ()=> {}
        })

        expect(mockNavigate ).toHaveBeenCalledWith('?q=superman');
        
    });
    
    
});
