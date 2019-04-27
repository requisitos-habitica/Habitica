import React from 'react'
import { Link } from 'react-router-dom'

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
        <li>Pré-condições: Estar em um <Link to="/Lexicos/Grupo">Grupo</Link>; Estar participando de uma <Link to="/Lexicos/Missao">Missão</Link>; Estar logado",</li>
        <li>Local: Tela Grupos</li>
        <li>Tempo: Enquanto uma <Link to="/Lexicos/Missao">Missão</Link> estiver ocorrendo</li>
      </ul>
    </Card>

    <Card>
      <h2>Atores</h2>
      <ul>
        <li><Link to="/Lexicos/Membros">Membro do Grupo</Link></li>
        <li><Link to="/Lexicos/Chefao">Chefão</Link></li>
        <li><Link to="/Lexicos/Grupo">Grupo</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Recursos</h2>
      <ul>
        <li><Link to="/Lexicos/Lexico02v2">Tarefa</Link></li>
        <li><Link to="/Lexicos/DarDano">Dano</Link></li>
        <li><Link to="/Lexicos/TarefaDiaria">Tarefa Diária</Link></li>
        <li>Vida</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li><Link to="/Lexicos/Membros">Membro do Grupo</Link> realiza <Link to="/Lexicos/Tarefa">Tarefa</Link></li>
        <li><Link to="/Lexicos/Chefao">Chefão</Link> leva <Link to="/Lexicos/DarDano">Dano</Link></li>
        <li><Link to="/Lexicos/Membros">Membro do Grupo</Link> não realiza <Link to="/Lexicos/TarefaDiaria">Tarefa Diária</Link></li>
        <li><Link to="/Lexicos/Grupo">Grupo</Link> leva <Link to="/Lexicos/DarDano">Dano</Link></li>
        <li><Link to="/Lexicos/Chefao">Chefão</Link> tem Vida reduzida a zero</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li><Link to="/Lexicos/Membros">Membro do Grupo</Link> deve possuir <Link to="/Lexicos/Tarefa">Tarefa</Link> para ser realizada, <Link to="/Lexicos/Missao">Missão</Link> deve ser do tipo <Link to="/Lexicos/BatalhaDeChefao">Batalha de Chefão</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li><Link to="/Lexicos/Chefao">Chefões</Link> podem ser Chefões Raivosos ou Chefões Globais</li>
      </ul>
    </Card>

  </div>
)

export default BatalhaChefao