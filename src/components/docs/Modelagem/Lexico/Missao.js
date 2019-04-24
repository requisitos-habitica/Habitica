import React from 'react'
import { Link } from 'react-router-dom'

const Missao = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Artefato Nome" author="Quem fez"/>
    <Card>
      <h2>Nome</h2>
      <p>Missao</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Quest</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Só pode ser feita por um <Link to="/Grupo">Grupo</Link></li>
        <li>Para fazer uma Missão é necessário um <Link to="/TomoDeMissao">Tomo de Missão</Link></li>
        <li>Dão ao Usuário a possibilidade de focar em objetivos de longo prazo</li>
        <li>Missão pode ser do tipo <Link to="/MissaoDeColeta">Missão de Coleta</Link></li>
        <li>Missão pode ser do tipo <Link to="/BatalhaDeChefao">Batalha de Chefão</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Missão pode ser iniciada</li>
        <li>Missão pode ser cancelada</li>
        <li>Missão pode ser completa</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default Missao