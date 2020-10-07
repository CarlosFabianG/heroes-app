import React, { useState } from 'react'
import { heroes } from '../../data/heroes'
import HeroCard from '../hero/HeroCard'

const SearchScreen = () => {
    const [input, setInput] = useState('')
    const filterdHeroes = heroes

    const handleSearch = (e) => {
        setInput(e.target.value) 
        console.log(input)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const foundHero = filterdHeroes.find( hero => hero.superhero === input)
        console.log(foundHero)
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">

                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={handleSubmit}>
                        <input type="text" 
                               placeholder="Find your hero" 
                               className="form_control"
                               autoComplete="off"
                               value={input}
                               onChange = {handleSearch}
                               />
                        <button
                            type="submit"
                            className="btn n-1 btn-block btn-outline-primary"
                        >
                            Search
                        </button>
                    </form>

                </div>
                <div className="col-7">

                    <h4>Results</h4>
                    <hr />
                    
                    {
                        filterdHeroes.map( hero => <HeroCard key={hero.id} {...hero}/>)
                    }

                </div>
                
            </div>
        </div>
    )
}

export default SearchScreen