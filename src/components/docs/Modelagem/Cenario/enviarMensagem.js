import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Base = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Enviar Mensagem" author="Ésio Freitas"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Usuário pode se comunicar com outros usuários.</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Local: Tela inicial -> perfil -> Enviar mensagem.</li>
        <li>Tempo: Em qualquer momento.</li>
        <li>Pré-condição: Usuário deve estar logado.</li>
      </ul>
    </Card>

    <Card>
      <h2>Atores</h2>
      <ul>
        <li>Usuário.</li>
      </ul>
    </Card>

    <Card>
      <h2>Recursos</h2>
      <ul>
        <li>Mensagens</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Usuário busca outro usuário.</li>
        <li>Usuário seleciona outro usuário.</li>
        <li>Usuário escreve mensagem.</li>
        <li>Usuário envia mensagem.</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>Usuário está restrito a 3000 caracteres e a usuário por vez.</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>Usuário não acha o usuário que quer mandar a mensagem.</li>
      </ul>
    </Card>

  </div>
)

export default Base