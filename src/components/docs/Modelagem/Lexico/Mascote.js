import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Mascote = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Mascote" author="Rogério Júnior"/>
    <Card>
      <h2>Nome</h2>
      <p>Mascote</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Mascotes</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Primeiro estágio de um animal que saiu do <Link to='/ModelagemLexicos/Ovo de Mascote'>ovo de mascote</Link></li>
        <li>Não permite que o usuário monte o animal</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Mascotes viram montarias</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default Mascote