import React from 'react'
import Card from '../../UI/Card/Card'
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'
import { Link } from 'react-router-dom'

import img from '../../../assets/factbox.png'

const FactBox = () => {

  return (
    <div className='content artefact'>
        <HeadArtefact versions={ null } rastreability={ null }
                        title="Fact Box" author="Ésio Freitas"/>
        
        <Card>
          <h2>Rastreabilidade</h2>
          <a href="https://factbox.app/traceability/Habitica">Link para o FactBox</a>
        </Card>

        <Card style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <img style={{width:"80rem", height:"50rem"}} src={img} />
        </Card>
    </div>
  )
}

export default FactBox