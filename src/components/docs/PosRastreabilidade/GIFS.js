import React from 'react'
import Card from '../../UI/Card/Card'
import './GIFS.scss'
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'


const GIFS = (props) => {

    return(
        <div className="content artefact">
            <HeadArtefact versions={ null } rastreability={ null }
            title={props.id} author="Pedro Féo e Saleh Kader"/>

            <Card >
                <h2>Descrição</h2>
                <p>{props.description}</p>
            </Card>

            <Card >
                <h2>GIF</h2>
                <div className='card-content'>
                    <img className='card-content_image' style={{width: '75rem'}} src={require(`../../../assets/Gifs/${props.id}.gif`)} />
                </div>
            </Card>
        </div>
    )
}
export default GIFS