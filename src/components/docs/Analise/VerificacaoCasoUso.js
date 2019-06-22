import React from 'react'
import ReactMarkdown from 'react-markdown'
import Card from '../../UI/Card/Card'
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'
import { Link } from 'react-router-dom'
import './Verificacao.scss'
import grafico from '../../../assets/Analise/CasosUso/grafico.jpg'
import ComprarGemas from '../../../assets/Analise/CasosUso/ComprarGemas.jpg'
import Desafio from '../../../assets/Analise/CasosUso/Desafio.jpg'
import Inventario from '../../../assets/Analise/CasosUso/Inventario.jpg'



const VerificacaoCasoUso = () => {

  return (
    <div className='content artefact'>
      <HeadArtefact versions={ null } rastreability={ null }
                    title="Verificação Casos de Uso" author="Ésio Freitas"/>

        <Card >
            <h2>Quantidade de Erros</h2>
            <div className='center-card'>
                <img src={grafico} ></img>
            </div>
        </Card>

        <Card >
            <h2>Comprar Gemas</h2>
            <Link to='/CasosDeUsoConfiguração' >Caso de Uso</Link>
            <br></br>
            <div className='center-card'>
                <img src={ComprarGemas} ></img>
            </div>
        </Card>

        <Card >
            <h2>Desafio</h2>
            <Link to='/CasosDeUsoDesafios' >Caso de Uso</Link>
            <br></br>
            <div className='center-card'>
                <img src={Desafio} ></img>
            </div>
        </Card>

        <Card >
            <h2>Inventário</h2>
            <Link to='/CasosDeUsoInventário' >Caso de Uso</Link>
            <br></br>
            <div className='center-card'>
                <img src={Inventario} ></img>
            </div>
        </Card>
    </div>
  )
}

export default VerificacaoCasoUso