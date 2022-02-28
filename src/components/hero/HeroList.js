
import { HeroCard } from './HeroCard.js';

import { getHeroesByPublisher } from '../../helpers/getHeroesByPublisher.js'
import { useMemo } from 'react';

export const HeroList = ( { publisher = 'marvel'} ) => {

    const heroes = useMemo(() =>  getHeroesByPublisher( publisher ), [ publisher ]);

    return (
        <div className='mt-4 row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn'>
            {
                heroes.map( hero => (
                    <HeroCard 
                        key={ hero.id }
                        {...hero}
                    />
                ))             
                }   
        </div>
    )
}
