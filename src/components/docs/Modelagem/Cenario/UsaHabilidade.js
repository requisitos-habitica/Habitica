import React from 'react'
import { Link } from 'react-router-dom'

const UsaHabilidade = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Usa Habilidade" author="Pedro Féo"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Usuário deve utilizar uma habilidade da sua lista de habilidade</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Pré-condição: possuir uma Habilidade; Nível igual ou superior a 11, estar logado</li>
        <li>Local: tela de habilidades</li>
        <li>Tempo: em qualquer momento</li>
      </ul>
    </Card>

    <Card>
      <h2>Atores</h2>
      <ul>
        <li>Usuário</li>
        <li>Sistema</li>
        <li><Link to="/Lexicos/AlvoDaHabilidade">Alvo da Habilidade</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Recursos</h2>
      <ul>
        <li>Habilidades</li>
        <li><Link to="/Lexicos/Mana">Mana</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Usuário escolhe Habilidade da lista de Habilidades</li>
        <li>Usuário seleciona Habilidade</li>
        <li>Usuário perde <Link to="/Lexicos/Mana">Mana</Link></li>
        <li><Link to="/Lexicos/AlvoDaHabilidade">Alvo da Habilidade</Link> sofre efeito da Habilidade</li>
        <li>O Sistema avisa que a Habilidade foi utilizada</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>Usuário não possuir <Link to="/Lexicos/Mana">Mana</Link> suficiente</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>Em Habilidades que possuírem como alvo <Link to="/Lexicos/Tarefa">Tarefas</Link>, o Usuário deverá selecionar uma <Link to="/Lexicos/Tarefa">Tarefas</Link></li>
      </ul>
    </Card>

  </div>
)

export default UsaHabilidade