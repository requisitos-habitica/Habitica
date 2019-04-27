import React from 'react'
import { Link } from 'react-router-dom'

const ColetaItens = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Coleta Itens de Missão" author="Pedro Féo"/>
    <Card>
      <h2>Objetivo</h2>
      <p><Link to="/Lexicos/Grupo">Grupo</Link> coletar todos os itens de <Link to="/Lexicos/Missao">Missão</Link> pedidos por uma <Link to="/Lexicos/Missao">Missão</Link></p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Pré-condição: Estar logado; Estar realizando uma <Link to="/Lexicos/Missao">Missão</Link>; Estar em um <Link to="/Lexicos/Grupo">Grupo</Link></li>
        <li>Local: Tela <Link to="/Lexicos/Grupo">Grupos</Link></li>
        <li>Tempo: Enquanto uma <Link to="/Lexicos/Missao">Missão</Link> estiver ocorrendo</li>
      </ul>
    </Card>

    <Card>
      <h2>Atores</h2>
      <ul>
        <li><Link to="/Lexicos/Membros">Membro do Grupo</Link></li>
        <li><Link to="/Lexicos/Grupo">Grupo</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Recursos</h2>
      <ul>
        <li><Link to="/Lexicos/Tarefa">Tarefa</Link></li>
        <li>Item de Missão</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li><Link to="/Lexicos/Membros">Membro do Grupo</Link> realiza <Link to="/Lexicos/Tarefa">Tarefa</Link></li>
        <li><Link to="/Lexicos/Membros">Membro do Grupo</Link> pode receber Item de <Link to="/Lexicos/Missao">Missão</Link></li>
        <li><Link to="/Lexicos/Grupo">Grupo</Link> coleta todos os Itens de <Link to="/Lexicos/Missao">Missão</Link> necessários</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li><Link to="/Lexicos/Membros">Membro do Grupo</Link> deve possuir <Link to="/Lexicos/Tarefa">Taref</Link>a para ser realizada, <Link to="/Lexicos/Missao">Missão</Link> deve ser do tipo <Link to="/Lexicos/MissaoDeColeta">Missão de Coleta</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li><Link to="/Lexicos/MissaoDeColeta">Missão de Coleta</Link> pode ser do tipo <Link to="/Lexicos/MissaoDeMascote">Missão de Mascote</Link></li>
      </ul>
    </Card>

  </div>
)

export default ColetaItens