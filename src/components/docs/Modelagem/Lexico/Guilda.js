import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Guilda = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Guilda" author="Pedro Féo"/>
    <Card>
      <h2>Nome</h2>
      <p>Guilda</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Grupo Social</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Permitem aos Usuários discutir interesses semelhantes</li>
        <li>Permitem que o Usuário participe em <Link to="/Desafio">Desafios</Link></li>
        <li>Pode ser <Link to="/Guilda Pública">Guilda Pública</Link> ou <Link to="/Guilda Privada">Guilda Privada</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>A Guilda pode possuir Usuários participantes</li>
        <li>A Guilda pode ser criada por um Usuário</li>
        <li>A Guilda pode personalizada pelo Líder da Guilda</li>
        <li>A Guilda pode ter sua propriedade transferida pelo Líder da Guilda</li>
        <li>O Usuário pode sair da Guilda</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default Guilda