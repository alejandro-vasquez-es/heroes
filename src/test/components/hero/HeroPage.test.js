const { mount } = require("enzyme");
import { MemoryRouter, Routes, Route } from "react-router-dom";
const { HeroPage } = require("../../../components/hero/HeroPage");



const mockNavigate = jest.fn()

jest.mock('react-router-dom', ()=> ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=> mockNavigate,
}))


describe('tests in <HeroPage />', () => {

    test('should not display HeroPage if there is no hero in the url', () => {
      
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/123456']}>
                <Routes>
                    <Route path='/hero/123456' element={<HeroPage />} />
                    <Route path='/' element={<h1>No hero page</h1>} />
                </Routes>
            </MemoryRouter>
        )

        expect( wrapper.find('h1').text().trim() ).toBe('No hero page')
        
    });

    test('should display display a hero if the param exists', () => {
      
        const wrapper = mount(
            <MemoryRouter initialEntries={['/marvel/hero/marvel-captain']}>
                <Routes>
                    <Route path=':pub/hero/:heroId' element={<HeroPage />} />
                    <Route path='/' element={<h1>No hero page</h1>} />
                </Routes>
            </MemoryRouter>
        )

        expect( wrapper.find('h1').text().trim() ).toBe('Captain America')
        
    });

    test('should return to the last window', () => {
      
        const wrapper = mount(
            <MemoryRouter initialEntries={['/marvel/hero/marvel-captain']}>
                <Routes>
                    <Route path=':pub/hero/:heroId' element={<HeroPage />} />
                </Routes>
            </MemoryRouter>
        )

        wrapper.find('button').prop('onClick')();
        expect( mockNavigate ).toHaveBeenCalledWith('/marvel');
        
    });
    

    test('should display no hero page if there is no hero', () => {
      
        const wrapper = mount(
            <MemoryRouter initialEntries={['/marvel/hero/marvel-captain123']}>
                <Routes>
                    <Route path=':pub/hero/:heroId' element={<HeroPage />} />
                    <Route path='/' element={<h1>No hero page</h1>} />
                </Routes>
            </MemoryRouter>
        );

        expect(wrapper.text().trim() ).toBe('No hero page')
        
    });
    
    
});
