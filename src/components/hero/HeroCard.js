import React from 'react'

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
                        <p>
                            <small className="text-muted">{ props.first_appearance }</small>
                        </p>
                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default HeroCard