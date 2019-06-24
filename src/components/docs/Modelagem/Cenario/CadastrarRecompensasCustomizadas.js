import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const CadastrarRecompensasCustomizadas = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Cadastrar Recompensas Customizadas" author="Gabriel Albino"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Cadastrar uma recompensa para ser comprada</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Local: Tela inicial</li>
        <li>Tempo: Em qualquer momento</li>
        <li>Pré-condição: Usuário deve estar logado</li>
        
      </ul>
    </Card>

    <Card>
      <h2>Atores</h2>
      <ul>
        <li>Usuário, Sistema</li>
      </ul>
    </Card>

    <Card>
      <h2>Recursos</h2>
      <ul>
        <li>Tarefas</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Usuário abre o app; </li>
        <li>Usuário clica “Cadastrar Recompensas”; </li>
        <li>Usuário preenche o texto, o valor e alguma observação sobre a recompensa.; </li>
        <li>Sistema passa a exibir a nova recompensa na lista de recompensas; </li>
        <li>Usuário agora pode comprar recompensas customizadas; </li>

      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>Usuário não preenche as informações da recompensa corretamente</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>Usuário não ter uma conta.</li>
      </ul>
    </Card>

  </div>
)

export default CadastrarRecompensasCustomizadas