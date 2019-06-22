import React from 'react'
import ReactMarkdown from 'react-markdown'
import Card from '../../UI/Card/Card'
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'
import { HashLink as Link } from 'react-router-hash-link';
import './Verificacao.scss'
import defeitos from '../../../assets/Analise/Defeito.png'
import geral from '../../../assets/Analise/RP/geral.png'
import Aplicacao from '../../../assets/Analise/RP/Aplicacao.png'
import Contribuindo from '../../../assets/Analise/RP/Contribuindo.png'
import erro1 from '../../../assets/Analise/RP/erro1.png'
import erro2 from '../../../assets/Analise/RP/erro2.png'
import Gamificacao from '../../../assets/Analise/RP/Gamificacao.png'
import Grupo from '../../../assets/Analise/RP/Grupo.png'
import Inventario from '../../../assets/Analise/RP/Inventario.png'
import Loja from '../../../assets/Analise/RP/Loja.png'
import Tarefas from '../../../assets/Analise/RP/Tarefas.png'


const VerificacaoRP = () => {

  return (
    <div className='content artefact'>
      <HeadArtefact versions={ null } rastreability={ null }
                    title="Verificação Rich Pictures" author="Rogério Júnior"/>

        <Card>
            <h2>Rastreabilidade</h2>
            <p><Link to='/RichPictures' >Rich Pictures</Link></p>
        </Card>

        <Card >
            <h2>Checklist</h2>
            <ul>
                <li>Possui referências do universo de informações;</li>
                <li>Inclui todos os stakeholders (atores);</li>
                <li>Possui os fluxos que ocorrem nos processos (bens, documentos, dados, etc.);</li>
                <li>Possui motivos que cada stakeholder tem ao usar o sistema;</li>
                <li>Possui elemento com foco central;</li>
                <li>Possui elementos estruturais - fazem lembrar o processo e as preocupações;</li>
                <li>Possui somente processo mais objetivo;</li>
                <li>Uso de linguagem compreensível ao público;</li>
                <li>Possui as operações do sistema;</li>
                <li>As setas indicam o fluxo corretamente.</li>          
            </ul>
        </Card>

        <Card>
            <h2>Possíveis Defeitos</h2>
            <div className='center-card' >
                <img src={defeitos} ></img>
            </div>
        </Card>

        <Card>
            <h2>Resultado Geral</h2>
            <div className='center-card' >
                <img src={geral} ></img>
            </div>
        </Card>

        <Card>
            <h2>Resultado</h2>
            <div className='center-card' >
                <img src={geral} ></img>
            </div>
        </Card>

        <Card>
            <h2>Principais Erros (%)</h2>
            <div className='center-card' >
                <img src={erro1} ></img>
            </div>
            <br></br>
            <div className='center-card' >
                <img src={erro2} ></img>
            </div>
        </Card>

        <Card>
            <h2>RP10</h2>
            <p><Link smooth to='/RichPictures#RP10'>RP</Link></p>
            <br></br>
            <div className='center-card' >
                <img src={Aplicacao} ></img>
            </div>
        </Card>

        <Card>
            <h2>RP16</h2>
            <p><Link smooth to='/RichPictures#RP16'>RP</Link></p>
            <br></br>
            <div className='center-card' >
                <img src={Contribuindo} ></img>
            </div>
        </Card>

        <Card>
            <h2>RP17</h2>
            <p><Link smooth to='/RichPictures#RP17'>RP</Link></p>
            <br></br>
            <div className='center-card' >
                <img src={Gamificacao} ></img>
            </div>
        </Card>

        <Card>
            <h2>RP12</h2>
            <p><Link smooth to='/RichPictures#RP12'>RP</Link></p>
            <br></br>
            <div className='center-card' >
                <img src={Grupo} ></img>
            </div>
        </Card>

        <Card>
            <h2>RP11</h2>
            <p><Link smooth to='/RichPictures#RP11'>RP</Link></p>
            <br></br>
            <div className='center-card' >
                <img src={Inventario} ></img>
            </div>
        </Card>

        <Card>
            <h2>RP13</h2>
            <p><Link smooth to='/RichPictures#RP13'>RP</Link></p>
            <br></br>
            <div className='center-card' >
                <img src={Loja} ></img>
            </div>
        </Card>

        <Card>
            <h2>RP15</h2>
            <p><Link smooth to='/RichPictures#RP15'>RP</Link></p>
            <br></br>
            <div className='center-card' >
                <img src={Tarefas} ></img>
            </div>
        </Card>

    </div>
  )
}

export default VerificacaoRP