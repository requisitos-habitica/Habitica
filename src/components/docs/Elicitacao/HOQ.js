import React from 'react'
import Card from '../../UI/Card/Card'
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'
import img from '../../../assets/HOQ_v1.png'
import { height } from 'window-size';
import { HashLink as Link } from 'react-router-hash-link'

const HOQ = () => {

  return (
    <div className='content artefact'>
      <HeadArtefact versions={ null } rastreability={ null }
                    title="House of Quality" author="Rogério Júnior"/>
    

    <Card>
        <h2>Rastreabilidade</h2>
        <ul>
            <li><Link smooth to='/Questionario'>Questionario</Link></li>
        </ul>
    </Card>

      <Card style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <img style={{width:"80rem", height:"50rem"}} src={img}></img>
      </Card>

    </div>
  )
}

export default HOQ