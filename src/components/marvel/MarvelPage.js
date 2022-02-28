import React from 'react'
import { HeroList } from '../hero/HeroList.js'

export const MarvelPage = () => {
    return (
        <div>
            <h1>Marvel page</h1>

            <HeroList publisher='Marvel Comics'/>
        </div>
    )
}

