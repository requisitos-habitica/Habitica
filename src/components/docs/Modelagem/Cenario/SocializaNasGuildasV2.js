import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const SocializaNaGuildaV2 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Socializa na Guilda V2" author="Pedro Féo"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Discutir interesses semelhantes e participar em <Link to="/Grupo">Grupos</Link> de <Link to="/Desafio">Desafios</Link></p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Pré-condição: O Usuário precisa estar logado</li>
        <li>Local: Tela Guildas -> Descobrir Guildas</li>
        <li>Tempo: Em qualquer momento</li>
      </ul>
    </Card>

    <Card>
      <h2>Atores</h2>
      <ul>
        <li>Usuário</li>
      </ul>
    </Card>

    <Card>
      <h2>Recursos</h2>
      <ul>
        <li>Lista de <Link to="/Guilda">Guildas</Link></li>
        <li><Link to="/Guilda">Guildas</Link></li>
        <li>Palavras-Chave</li>
        <li><Link to="/Chat">Chat</Link></li>
        <li><Link to="/Diretriz da Comunidade">Diretriz da Comunidade</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Usuário percorre Lista de <Link to="/Guilda">Guildas</Link></li>
        <li>Usuário pesquisa Palavra-Chave</li>
        <li>Usuário escolhe participar de <Link to="/Guilda">Guilda</Link></li>
        <li>Usuário é adicionada à <Link to="/Guilda">Guilda</Link></li>
        <li>Usuário aceita <Link to="/Diretriz da Comunidade">Diretriz da Comunidade</Link></li>
        <li>Usuário recebe notificação ao receber mensagem do <Link to="/Chat">Chat</Link></li>
        <li>Usuário escreve no <Link to="/Chat">Chat</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>O Usuário só consegue visualizar <Link to="/Guilda Pública">Guildas Públicas</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>O Usuário é adicionado à uma Guilda por um <Link to="/Membro">Membro</Link> da <Link to="/Guilda">Guilda</Link></li>
      </ul>
    </Card>

  </div>
)

export default SocializaNaGuildaV2