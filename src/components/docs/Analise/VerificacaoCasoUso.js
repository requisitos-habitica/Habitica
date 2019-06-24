import React from 'react'
import Card from '../../UI/Card/Card'
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'
import { Link } from 'react-router-dom'
import './Verificacao.scss'

const VerificacaoCasoUso = () => {

  return (
    <div className='content artefact'>
      <HeadArtefact versions={ null } rastreability={ null }
                    title="Verificação Casos de Uso" author="Ésio Freitas"/>

        <Card >
            <h2>Quantidade de Erros</h2>
            <div className='center-card'>
                <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSewH2vgzgQlhhvlswfNU_H0dEXiafmyaLUxaJX7HYE89PLBimzRM_GaNyIA2XNbjeW5JSF5W8ss33v/pubchart?oid=511009404&format=interactive" height="500" width="750"></iframe>
            </div>
        </Card>

        <Card >
            <h2>Comprar Gemas</h2>
            <Link to='/CasosDeUsoConfiguração' >Caso de Uso</Link>
            <br></br>
            <div className='center-card'>
                <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSewH2vgzgQlhhvlswfNU_H0dEXiafmyaLUxaJX7HYE89PLBimzRM_GaNyIA2XNbjeW5JSF5W8ss33v/pubhtml?gid=1528788614&single=true" height="500" width="750"></iframe>
            </div>
        </Card>

        <Card >
            <h2>Desafio</h2>
            <Link to='/CasosDeUsoDesafios' >Caso de Uso</Link>
            <br></br>
            <div className='center-card'>
                <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSewH2vgzgQlhhvlswfNU_H0dEXiafmyaLUxaJX7HYE89PLBimzRM_GaNyIA2XNbjeW5JSF5W8ss33v/pubhtml?gid=34723972&single=true" height="500" width="750"></iframe>
            </div>
        </Card>

        <Card >
            <h2>Inventário</h2>
            <Link to='/CasosDeUsoInventário' >Caso de Uso</Link>
            <br></br>
            <div className='center-card'>
                <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSewH2vgzgQlhhvlswfNU_H0dEXiafmyaLUxaJX7HYE89PLBimzRM_GaNyIA2XNbjeW5JSF5W8ss33v/pubhtml?gid=0&single=true" height="500" width="750"></iframe>
            </div>
        </Card>

        <Card >
            <h2>Gamificação</h2>
            <Link to='/CasosDeUsoGamificação' >Caso de Uso</Link>
            <br></br>
            <div className='center-card'>
                <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSewH2vgzgQlhhvlswfNU_H0dEXiafmyaLUxaJX7HYE89PLBimzRM_GaNyIA2XNbjeW5JSF5W8ss33v/pubhtml?gid=1747662191&single=true" height="500" width="750"></iframe>
            </div>
        </Card>
    </div>
  )
}

export default VerificacaoCasoUso