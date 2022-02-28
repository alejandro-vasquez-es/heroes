import { Route, Routes } from "react-router"

import { Navbar } from "../components/ui/NavBar.js"

import { DcPage } from "../components/dc/DcPage.js"
import { MarvelPage } from "../components/marvel/MarvelPage.js"
import { SearchPage } from "../components/search/SearchPage.js"
import { HeroPage } from "../components/hero/HeroPage.js"

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div className='container mt-3'>
                <Routes>
                    <Route path='marvel' element={<MarvelPage />}/>
                    <Route path='dc' element={<DcPage />}/>

                    <Route path=':pub/hero/:heroId' element={<HeroPage />}/>

                    <Route path='search' element={<SearchPage />}/>
                    
                    <Route path='/' element={<MarvelPage />}/>
                </Routes>
            </div>
            
        </>
    )
}
