import React from 'react'
import Card from '../../UI/Card/Card'
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'
import img from '../../../assets/HOQ_v1.png'
import { height } from 'window-size';

const HOQ = () => {

  return (
    <div className='content artefact'>
      <HeadArtefact versions={ null } rastreability={ null }
                    title="House of Quality" author="Rogério Júnior"/>
    
      <Card style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <img style={{width:"80rem", height:"50rem"}} src={img}></img>
      </Card>

    </div>
  )
}

export default HOQ