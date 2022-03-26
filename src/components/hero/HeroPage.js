import { useMemo } from 'react'
import { useParams, useNavigate, Navigate } from "react-router-dom"
import { getHeroById } from "../../helpers/getHeroById.js";

const images = require.context('../../assets/heroes', true);
// import batman from '../../assets/heroes/d-batman.jpg' // static



export const HeroPage = () => {

    const navigate = useNavigate()

    const handleReturn = () => {
        navigate(`/${pub}`)
    }

    const { heroId, pub } = useParams();

    const hero = useMemo(() => getHeroById(heroId), [heroId]);

    if (!hero) {
        return <Navigate to='/' />
    }


    return (
        <div className='mt-5 row'>

            <div className='col-3'>
                <img
                    // src={`/assets/heroes/${hero.id}.jpg` }  from public /assets
                    // src={batman} static way
                    src={images(`./${hero.id}.jpg`).default}
                    alt={hero.superhero}
                    className='img-thumbnail animate__animated animate__fadeInLeft'
                />
            </div>

            <div className='col-9 d-flex flex-column'>
                <h1>{hero.superhero}</h1>
                <ul className='list-group list-group-flush'>

                    <li className='list-group-item'><b>Alter ego: </b>{hero.alter_ego}</li>
                    <li className='list-group-item'><b>Publisher: </b>{hero.publisher}</li>
                    <li className='list-group-item'><b>First Appearance: </b>{hero.first_appearance}</li>

                </ul>

                <h5 className='mt-4'>Characters</h5>
                <p>{hero.characters}</p>

                <button
                    className='btn btn-outline-info align-self-end'
                    onClick={handleReturn}
                >
                    Regresar
                </button>
            </div>

        </div>
    )
}
