import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

import queryString from 'query-string';
import { getHeroesByName } from '../../helpers/getHeroesByName.js';
import { useForm } from '../../hooks/useForm.js'
import { HeroCard } from '../hero/HeroCard.js';

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search)

    const [formValues, handleInputChange] = useForm({
        searchText: q

    });

    const { searchText } = formValues;
    // const heroesFiltered = getHeroesByName('');
    const [heroesFiltered, setHeroesFiltered] = useState(getHeroesByName(searchText))

    useEffect(() => {
        setHeroesFiltered(getHeroesByName(searchText))
    }, [searchText])

    useEffect(() => {
        navigate(`?q=${searchText}`)
    }, [searchText, navigate])

    const handleSearch = (e) => {

        e.preventDefault();
        navigate(`?q=${searchText}`);

    }


    return (
        <div>
            <h1>Search page</h1>
            <hr />

            <div className='row'>

                <div className='col-5'>
                    <h4>Buscar</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input
                            type='text'
                            placeholder='Search for a hero'
                            className='form-control'
                            name='searchText'
                            autoComplete='off'
                            value={searchText}
                            onChange={handleInputChange}
                        />

                        <button
                            type='submit'
                            className='btn brn-outline mt-1'
                            onClick={handleSearch}
                        >
                            Search...
                        </button>

                    </form>
                </div>

                <div className='col-7'>
                    <h4>Results</h4>
                    <hr />

                    {
                        (q === '') ?
                            <div className="alert-info alert animate__fadeIn animate__animated">Search for a superhero.</div>
                            : (heroesFiltered.length === 0)
                            && <div id='error' className='alert alert-danger animate__fadeIn animate__animated'>No results for "{q}"</div>
                    }

                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }

                </div>

            </div>

        </div>
    )
}
