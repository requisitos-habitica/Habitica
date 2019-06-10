import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const BatalhaChefao = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Batalha Chefão" author="Pedro Féo"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Diminuir a vida de um Chefão a zero</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Pré-condições: Estar em um <Link to="/Grupo">Grupo</Link>; Estar participando de uma <Link to="/Missão">Missão</Link>; Estar logado",</li>
        <li>Local: Tela Grupos</li>
        <li>Tempo: Enquanto uma <Link to="/Missão">Missão</Link> estiver ocorrendo</li>
      </ul>
    </Card>

    <Card>
      <h2>Atores</h2>
      <ul>
        <li><Link to="/Membros">Membro do Grupo</Link></li>
        <li><Link to="/Chefão">Chefão</Link></li>
        <li><Link to="/Grupo">Grupo</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Recursos</h2>
      <ul>
        <li><Link to="/Tarefa">Tarefa</Link></li>
        <li><Link to="/Dar Dano">Dano</Link></li>
        <li><Link to="/Tarefa Diária">Tarefa Diária</Link></li>
        <li>Vida</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li><Link to="/Membros">Membro do Grupo</Link> realiza <Link to="/Tarefa">Tarefa</Link></li>
        <li><Link to="/Chefao">Chefão</Link> leva <Link to="/Dar Dano">Dano</Link></li>
        <li><Link to="/Membros">Membro do Grupo</Link> não realiza <Link to="/Tarefa Diária">Tarefa Diária</Link></li>
        <li><Link to="/Grupo">Grupo</Link> leva <Link to="/Dar Dano">Dano</Link></li>
        <li><Link to="/Chefão">Chefão</Link> tem Vida reduzida a zero</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li><Link to="/Membros">Membro do Grupo</Link> deve possuir <Link to="/Tarefa">Tarefa</Link> para ser realizada, <Link to="/Missão">Missão</Link> deve ser do tipo <Link to="/Batalha de Chefão">Batalha de Chefão</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li><Link to="/Chefão">Chefões</Link> podem ser Chefões Raivosos ou Chefões Globais</li>
      </ul>
    </Card>

  </div>
)

export default BatalhaChefao