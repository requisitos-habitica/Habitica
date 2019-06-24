import React from 'react'
import Card from '../../UI/Card/Card'
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'
import { HashLink as Link } from 'react-router-hash-link';
import './Verificacao.scss'
import defeitos from '../../../assets/Analise/Defeito.png'


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
            <h2>Resultado</h2>
            <div className='center-card' >
            <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQV63gwFtBInfxsBerWvYImfWvaykWQBCVK842nRGCj8IyYm3xmwKlsPPp9udse8X7mB65y7uCKNjmW/pubhtml?gid=0&single=true" height="500" width="750"></iframe>

            </div>
        </Card>

        <Card>
            <h2>Principais Erros (%)</h2>
            <div className='center-card' >
            <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQV63gwFtBInfxsBerWvYImfWvaykWQBCVK842nRGCj8IyYm3xmwKlsPPp9udse8X7mB65y7uCKNjmW/pubchart?oid=2039285466&format=interactive" height="500" width="750"></iframe>

            </div>
            <br></br>
            <div className='center-card' >
            <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQV63gwFtBInfxsBerWvYImfWvaykWQBCVK842nRGCj8IyYm3xmwKlsPPp9udse8X7mB65y7uCKNjmW/pubchart?oid=1769097861&format=interactive" height="500" width="750"></iframe>

            </div>
        </Card>

        <Card>
            <h2>RP10</h2>
            <p><Link smooth to='/RichPictures#RP10'>RP</Link></p>
            <br></br>
            <div className='center-card' >
            <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQV63gwFtBInfxsBerWvYImfWvaykWQBCVK842nRGCj8IyYm3xmwKlsPPp9udse8X7mB65y7uCKNjmW/pubhtml?gid=1504202403&single=true" height="500" width="750"></iframe>

            </div>
        </Card>

        <Card>
            <h2>RP16</h2>
            <p><Link smooth to='/RichPictures#RP16'>RP</Link></p>
            <br></br>
            <div className='center-card' >
            <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQV63gwFtBInfxsBerWvYImfWvaykWQBCVK842nRGCj8IyYm3xmwKlsPPp9udse8X7mB65y7uCKNjmW/pubhtml?gid=1251163789&single=true" height="500" width="750"></iframe>

            </div>
        </Card>

        <Card>
            <h2>RP17</h2>
            <p><Link smooth to='/RichPictures#RP17'>RP</Link></p>
            <br></br>
            <div className='center-card' >
            <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQV63gwFtBInfxsBerWvYImfWvaykWQBCVK842nRGCj8IyYm3xmwKlsPPp9udse8X7mB65y7uCKNjmW/pubhtml?gid=1134690243&single=true" height="500" width="750"></iframe>

            </div>
        </Card>

        <Card>
            <h2>RP12</h2>
            <p><Link smooth to='/RichPictures#RP12'>RP</Link></p>
            <br></br>
            <div className='center-card' >
            <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQV63gwFtBInfxsBerWvYImfWvaykWQBCVK842nRGCj8IyYm3xmwKlsPPp9udse8X7mB65y7uCKNjmW/pubhtml?gid=1903047315&single=true" height="500" width="750"></iframe>

            </div>
        </Card>

        <Card>
            <h2>RP11</h2>
            <p><Link smooth to='/RichPictures#RP11'>RP</Link></p>
            <br></br>
            <div className='center-card' >
            <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQV63gwFtBInfxsBerWvYImfWvaykWQBCVK842nRGCj8IyYm3xmwKlsPPp9udse8X7mB65y7uCKNjmW/pubhtml?gid=333803703&single=true" height="500" width="750"></iframe>

            </div>
        </Card>

        <Card>
            <h2>RP13</h2>
            <p><Link smooth to='/RichPictures#RP13'>RP</Link></p>
            <br></br>
            <div className='center-card' >
            <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQV63gwFtBInfxsBerWvYImfWvaykWQBCVK842nRGCj8IyYm3xmwKlsPPp9udse8X7mB65y7uCKNjmW/pubhtml?gid=1265386893&single=true" height="500" width="750"></iframe>

            </div>
        </Card>

        <Card>
            <h2>RP15</h2>
            <p><Link smooth to='/RichPictures#RP15'>RP</Link></p>
            <br></br>
            <div className='center-card' >
            <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQV63gwFtBInfxsBerWvYImfWvaykWQBCVK842nRGCj8IyYm3xmwKlsPPp9udse8X7mB65y7uCKNjmW/pubhtml?gid=101157232&single=true" height="500" width="750"></iframe>

            </div>
        </Card>

    </div>
  )
}

export default VerificacaoRP