import React from 'react'
import Card from '../../UI/Card/Card'
import './GIFS.scss'
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'


const GIFS = (props) => {

    return(
        <div className="content artefact">
            <HeadArtefact versions={ null } rastreability={ null }
            title={props.id} author="Kaique Borges, Lucas Dutra, Pedro Féo e Saleh Kader"/>

            <Card >
                <h2>Descrição</h2>
                <p>{props.description}</p>
            </Card>

            <Card >
                <h2>Critérios de aceitação</h2>
                <p>{props.description}</p>
            </Card>

            <Card >
                <h2>Critérios de pronto</h2>
                <ul>
                    <li>Independente</li>
                    <li>Valiosa</li>
                    <li>Sucinta</li>
                    <li>Testável</li>
                    <li>Negociável</li>
                </ul>
            </Card>

            <Card >
                <h2>Caminho do arquivo Front-end</h2>
                <p>{props.frontEnd}</p>
            </Card>

            <Card >
                <h2>Caminho do arquivo Back-end</h2>
                <p>{props.backEnd}</p>
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