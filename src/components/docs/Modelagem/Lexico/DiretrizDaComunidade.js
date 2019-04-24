import React from 'react'
import { Link } from 'react-router-dom'

const DiretrizDaComunidade = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Diretriz da Comunidade" author="Pedro Féo"/>
    <Card>
      <h2>Nome</h2>
      <p>Diretriz da Comunidade</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Termo da Comunidade</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Bloqueia o acesso ao <Link to="/Chat">Chat</Link> de uma <Link to="/Guilda">Guilda</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>O Usuário pode aceitar a Diretriz da Comunidade</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default DiretrizDaComunidade