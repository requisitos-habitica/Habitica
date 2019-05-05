import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const EquiparAvatarComMontaria = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Equipar Avatar com Montaria" author="Rogério Júnior"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Personalizar avatar com <Link to='/ModelagemLexicos/Montaria'>montaria</Link>.</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Pré-condição: O usuário deve estar logado, possuir celular ou computador, deve possuir <Link to='/ModelagemLexicos/Montaria'>montaria</Link></li>
        <li>Local: Inventário na aba <Link to='/ModelagemLexicos/Equipamento'>equipamentos</Link> (rp_inventory_v2.png)</li>
        <li>Tempo: Enquanto estiver usando o Habitica</li>
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
        <li><Link to='/ModelagemLexicos/Montaria'>Montaria</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Usuário compra <Link to='/ModelagemLexicos/Montaria'>montaria</Link> na loja</li>
        <li>Usuário ganha <Link to='/ModelagemLexicos/Montaria'>montaria</Link> realizando <Link to='/ModelagemLexicos/Tarefa'>tarefas</Link></li>
        <li>Usuário compra <Link to='/ModelagemLexicos/Armário Encantado'>armário encantado</Link> e pode ganhar <Link to='/ModelagemLexicos/Montaria'>montaria</Link></li>
        <li>Avatar customizado</li> 
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>Beleza do item</li>
        <li>Melhora das habilidades do avatar</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>Conexão com a internet falhar.</li>
      </ul>
    </Card>

  </div>
)

export default EquiparAvatarComMontaria