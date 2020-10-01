import { heroes } from '../data/heroes'

export const getHeroesByPublisher = (id) => {
    const validPublisher = ['Dc', 'Marvel']

    return heroes.find( hero => hero.id === id)
}