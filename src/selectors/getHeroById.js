import { heroes } from '../data/heroes'

export const getHeroById = (id) => {
    const validPublisher = ['Dc', 'Marvel']

    return heroes.find( hero => hero.id === id)
}