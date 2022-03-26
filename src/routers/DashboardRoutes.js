import { Route, Routes } from "react-router"

import { Navbar } from "../components/ui/NavBar.js"

import { DcPage } from "../components/dc/DcPage.js"
import { MarvelPage } from "../components/marvel/MarvelPage.js"
import { SearchPage } from "../components/search/SearchPage.js"
import { HeroPage } from "../components/hero/HeroPage.js"

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className='container mt-3'>
                <Routes>
                    <Route path={`${process.env.REACT_APP_URL}/marvel`} element={<MarvelPage />} />
                    <Route path={`${process.env.REACT_APP_URL}/dc`} element={<DcPage />} />

                    <Route path={`${process.env.REACT_APP_URL}/:pub/hero/:heroId`} element={<HeroPage />} />

                    <Route path={`${process.env.REACT_APP_URL}/search`} element={<SearchPage />} />

                    <Route path={`${process.env.REACT_APP_URL}/`} element={<MarvelPage />} />
                </Routes>
            </div>

        </>
    )
}
