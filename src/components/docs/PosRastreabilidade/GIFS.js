import React from 'react'
import Card from '../../UI/Card/Card'
import './GIFS.scss'
import gifs from './GIFS.json'


const GIFS = () => {

    return(
        <div className="content artefact">
            <h1>GIFS</h1>
            {gifs.map((gif) => {

                return (
                    <Card >
                    <h2>{gif.id}</h2>
                    <p>{gif.description}</p>
                    <div className='card-content'>
                        <img className='card-content_image' style={{width: '20rem'}} src={require(`../../../assets/Gifs/${gif.id}.gif`)} />
                    </div>
                    </Card>
                )
            })}
        </div>
    )
}
export default GIFS