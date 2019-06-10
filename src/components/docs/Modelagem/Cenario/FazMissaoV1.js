import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const FazMissao = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Faz Missão" author="Pedro Féo"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Iniciar e completar uma <Link to="/Missão">Missão</Link>, junto ao <Link to="/Grupo">Grupo</Link> do Usuário</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Pré-condição: Usuário precisa estar em um <Link to="/Grupo">Grupo</Link>; Estar Logado; Possuir <Link to="/Tomo de Missão">Tomo de Missão</Link></li>
        <li>Local: Tela Inventario -> Itens -> Missões</li>
        <li>Tempo: Em qualquer Momento</li>
      </ul>
    </Card>

    <Card>
      <h2>Atores</h2>
      <ul>
        <li>Usuário</li>
        <li>Sistema</li>
        <li><Link to="/Membros">Membros do Grupo</Link></li>
        <li><Link to="/Grupo">Grupo</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Recursos</h2>
      <ul>
        <li><Link to="/Tomo de Missão">Tomo de Missão</Link></li>
        <li><Link to="/Convite de Missão">Convite de Missão</Link></li>
        <li><Link to="/Missão">Missão</Link></li>
        <li><Link to="/Grupo">Grupo</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Usuário seleciona <Link to="/Tomo de Missão">Tomo de Missão</Link></li>
        <li>Usuário convida o <Link to="/Grupo">Grupo</Link></li>
        <li><Link to="/Membros">Membros do Grupo</Link> aceitam <Link to="/Convite de Missão">Convite de Missão</Link></li>
        <li>Usuário inicia <Link to="/Missão">Missão</Link></li>
        <li>Sistema remove <Link to="/Tomo de Missão">Tomo de Missão</Link> do Inventário do usuário</li>
        <li>Se for uma <Link to="/Batalha de Chefão">Batalha de Chefão</Link>, <Link to="/Grupo">Grupo</Link> <Link to="/Batalha Chefão">Batalha Chefão</Link></li>
        <li>Se for uma <Link to="/Missão de Coleta">Missão de Coleta</Link>, <Link to="/Grupo">Grupo</Link> <Link to="/Coleta Itens">Coleta Itens</Link> de <Link to="/Missão">Missão</Link></li>
        <li><Link to="/Grupo">Grupo</Link> <Link to="/Completa Missão">Completa Missão</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>O Usuário pode participar de somente uma <Link to="/Missão">Missão</Link> por vez</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>Missões que ocorrem em todo o Sistema para todos os Usuários podem ser feitas simultaneamente</li>
        <li>Se todos os <Link to="/Membros">Membros do Grupo</Link> aceitarem o <Link to="/Convite de Missão">Convite de Missão</Link>, a <Link to="/Missão">Missão</Link> se inicia automaticamente</li>
      </ul>
    </Card>

  </div>
)

export default FazMissao