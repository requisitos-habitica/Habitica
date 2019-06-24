import React from 'react'
import Card from '../../UI/Card/Card'
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'
import { Link } from 'react-router-dom'
import './Verificacao.scss'
import defeitos from '../../../assets/Analise/Defeito.png'

const VerificacaoNFR = () => {
  return (
    <div className='content artefact'>
      <HeadArtefact versions={ null } rastreability={ null }
                    title="Verificação NFR" author="Youssef Muhamad"/>


        <Card>  
            <h2>Rastreabilidade</h2>
            <p><Link to='/NFR V3' >NFR v3</Link></p>
        </Card>

        <Card >
            <h2>Checklist</h2>
            <ul>
                <li>Softgoals representam critérios de qualidade ?</li>
                <li>Softgoals condizem com o contexto ?</li>
                <li>Softgoals são decompostos em operacionalizações ?</li>
                <li>Existe um nível de transição claro até as operacionalizações ?</li>
                <li>Operacionalizações condizem com o contexto ?</li>
                <li>Claims justificam os softgoals ?</li>
                <li>Contribuições and somente entre softgoals ?</li>
                <li>Contribuições or somente entre softgoals ?</li>
                <li>Contribuições positivas somente entre os softgoals e as operacionalizações ?</li>
                <li>Contribuições negativas somente entre os softgoals e as operacionalizações ?</li>
                <li>Contribuições entre softgoals e operacionalizações devidamente embasadas ?</li>
                <li>Existem impactos ?</li>
                <li>Impactos contribuem somente entre softgoals ?</li>
                <li>Contribuições dos impactos devidamente embasadas?</li>
                <li>Impacto propagado corretamente ?</li>
                <li>Propagação da contribuição and com base nos artefatos ? </li>
                <li>Propagação da contribuição or com base nos artefatos ?</li>
            </ul>
        </Card>

        <Card>
            <h2>Possíveis Defeitos</h2>
            <div className='center-card' >
                <img src={defeitos} ></img>
            </div>
        </Card>

        <Card>
            <h2>Resultado</h2>
            <div className='center-card' >
            <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQg2zEnvIZ5wCQmuOg5B8AF9lw1NWCWuuxTBMVPKqNg1abkMoRjGFl9odOobKCPjwszkyAwVZSTo1kH/pubhtml?gid=0&single=true" height="500" width="750"></iframe>
                
            </div>
        </Card>

    </div>
  )
}

export default VerificacaoNFR