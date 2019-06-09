import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'
import PersonzalizaAparenciaFisicaDoAvatar from '../Cenario/PersonalizaAparenciaFisicaDoAvatar'

const PersonzalizaAparenciaFisicaDoAvatarV2 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ [PersonzalizaAparenciaFisicaDoAvatar] } rastreability={ null }
                  title="Personzaliza Aparência Física do Avatar V2" author="Pedro Féo"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Mudar aparência física do Avatar do Usuário</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Pŕe-condição: O avatar precisa estar criado; o Usuário precisa estar logado</li>
        <li>Local: Tela de Inventário -> Avatar</li>
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
        <li>Avatar</li>
        <li>Tipo de Corpo</li>
        <li>Camisa</li>
        <li>Tom de Pele</li>
        <li>Cadeira de Rodas</li>
        <li>Cor do Cabelo</li>
        <li>Estilo do Cabelo</li>
        <li>Flor</li>
        <li>Barba</li>
        <li>Bigode</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Usuário escolhe Tipo de Corpo</li>
        <li>Usuário escolhe <Link to = '/Equipar Avatar com Item de Corpo'>Camisa</Link></li>
        <li>Usuário escolhe Tom de Pele</li>
        <li>Usuário escolhe Cadeira de Rodas</li>
        <li>Usuário escolhe Cor do Cabelo</li>
        <li>Usuário escolhe Base do Cabelo</li>
        <li>Usuário escolhe Estilo do Cabelo</li>
        <li>Usuário escolhe <Link to = '/Equipar Avatar com Acessório de Cabeça'>Flor</Link></li>
        <li>Usuário escolhe Barba</li>
        <li>Usuário escolhe Bigode</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>O Usuário está restrito a escolher apenas itens e características que possui</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>o Usuário não possui nenhum item ou característica disponível para escolher</li>
      </ul>
    </Card>

  </div>
)

export default PersonzalizaAparenciaFisicaDoAvatarV2