import React from 'react'
import { Link } from 'react-router-dom'

const HeroCard = (props) => {
    return (
        <div className="card ms-3" style={{ maxWidth: 540 }}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={`./assets/heroes/${ props.id }.jpg`} className="card-img" alt={props.superhero}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.superhero}</h5>
                        <p className="card-text">{props.alter_ego}</p>
                        {
                            ( props.alter_ego !== props.characters) && <p className="card-text">{props.characters}</p>
                        }
                        <p className="card-text">
                            <small className="text-muted">{ props.first_appearance }</small>
                        </p>
                        <Link to={`hero/${props.id}`}>
                            Ver detalle
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroCard

