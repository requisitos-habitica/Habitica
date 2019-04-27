import React from 'react'
import { Link } from 'react-router-dom'

const PersonalizaEquipamentoDoAvatar = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Personaliza Equipamento do Avatar" author="Pedro Féo"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Mudar itens equipados pelo Avatar do Usuário</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Pré-condição: O avatar precisa estar criado; O Usuário precisa estar logado</li>
        <li>Local: Tela de Inventário -> Equipamento</li>
        <li>Tempo: Em qualquer momento</li>
      </ul>
    </Card>

    <Card>
      <h2>Atores</h2>
      <ul>
        <li>Usuário</li>
        <li></li>
      </ul>
    </Card>

    <Card>
      <h2>Recursos</h2>
      <ul>
        <li>Avatar</li>
        <li><Link to="/Lexicos/EquipamentoDeBatalha">Equipamento de Batalha</Link></li>
        <li><Link to="/Lexicos/Fantasia">Fantasia</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Usuário escolhe seu <Link to="/Lexicos/EquipamentoDeBatalha">Equipamento de Batalha</Link></li>
        <li>Usuário habilita <Link to="/Lexicos/Fantasia">Fantasia</Link></li>
        <li>Usuário escolhe <Link to="/Lexicos/Fantasia">Fantasia</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>O Usuário está restrito a escolher os itens e características já desbloqueados por ele</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>O Usuário não possui itens para escolher</li>
      </ul>
    </Card>

  </div>
)

export default PersonalizaEquipamentoDoAvatar