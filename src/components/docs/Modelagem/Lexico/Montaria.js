import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Montaria = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Montaria" author="Rogério Júnior"/>
    <Card>
      <h2>Nome</h2>
      <p>Montaria</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Montarias</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Segundo estágio de um animal que saiu do <Link target="_blank" to='/ModelagemLexicos/Ovo de Mascote'>ovo de mascote</Link></li>
        <li>Permite que o usuário monte o animal</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Montaria pode ser montada pelo avatar</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default Montaria