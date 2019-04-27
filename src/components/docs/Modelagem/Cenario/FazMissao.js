import React from 'react'
import { Link } from 'react-router-dom'

const FazMissao = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Faz Missão" author="Pedro Féo"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Iniciar e completar uma <Link to="/Lexicos/Missao">Missão</Link>, junto ao <Link to="/Lexicos/Grupo">Grupo</Link> do Usuário</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Pré-condição: Usuário precisa estar em um <Link to="/Lexicos/Grupo">Grupo</Link>; Estar Logado; Possuir <Link to="/Lexicos/TomoDeMissao">Tomo de Missão</Link></li>
        <li>Local: Tela Inventario -> Itens -> Missões</li>
        <li>Tempo: Em qualquer Momento</li>
      </ul>
    </Card>

    <Card>
      <h2>Atores</h2>
      <ul>
        <li>Usuário</li>
        <li>Sistema</li>
        <li><Link to="/Lexicos/Membros">Membros do Grupo</Link></li>
        <li><Link to="/Lexicos/Grupo">Grupo</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Recursos</h2>
      <ul>
        <li><Link to="/Lexicos/TomoDemMissao">Tomo de Missão</Link></li>
        <li><Link to="/Lexicos/ConviteDeMissao">Convite de Missão</Link></li>
        <li><Link to="/Lexicos/Missao">Missão</Link></li>
        <li><Link to="/Lexicos/Grupo">Grupo</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Usuário seleciona <Link to="/Lexicos/TomoDemMissao">Tomo de Missão</Link></li>
        <li>Usuário convida o <Link to="/Lexicos/Grupo">Grupo</Link></li>
        <li><Link to="/Lexicos/Membros">Membros do Grupo</Link> aceitam <Link to="/Lexicos/ConviteDeMissao">Convite de Missão</Link></li>
        <li>Usuário inicia <Link to="/Lexicos/Missao">Missão</Link></li>
        <li>Sistema remove <Link to="/Lexicos/TomoDemMissao">Tomo de Missão</Link> do Inventário do usuário</li>
        <li>Se for uma <Link to="/Lexicos/BatalhaDeChefao">Batalha de Chefão</Link>, <Link to="/Lexicos/Grupo">Grupo</Link> <Link to="/BatalhaChefao">Batalha Chefão</Link></li>
        <li>Se for uma <Link to="/Lexicos/MissaoDeColeta">Missão de Coleta</Link>, <Link to="/Lexicos/Grupo">Grupo</Link> <Link to="/ColetaItens">Coleta Itens</Link> de <Link to="/Lexicos/Missao">Missão</Link></li>
        <li><Link to="/Lexicos/Grupo">Grupo</Link> <Link to="/CompletamMissao">Completa Missão</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>O Usuário pode participar de somente uma <Link to="/Lexicos/Missao">Missão</Link> por vez</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li><Link to="/Lexicos/Grupo">Missões</Link> que ocorrem em todo o Sistema para todos os Usuários podem ser feitas simultaneamente</li>
        <li>Se todos os <Link to="/Lexicos/Membros">Membros do Grupo</Link> aceitarem o <Link to="/Lexicos/ConviteDeMissao">Convite de Missão</Link>, a <Link to="/Lexicos/Missao">Missão</Link> se inicia automaticamente</li>
      </ul>
    </Card>

  </div>
)

export default FazMissao