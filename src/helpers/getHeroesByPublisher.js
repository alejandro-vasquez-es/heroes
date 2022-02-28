import { heroes as heroesArr } from "../data/heroes.js"



export const getHeroesByPublisher = ( publisher, heroes = heroesArr) => {

    const validPublishers = [ 'DC Comics', 'Marvel Comics' ];

    if ( !validPublishers.includes( publisher ) ){
        throw new Error( `${ publisher } is not a valid publisher`); 
    }
    
    return heroes.filter( hero => hero.publisher === publisher);

}
