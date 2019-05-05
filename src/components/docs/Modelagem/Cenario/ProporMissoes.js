import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const ProporMissoes = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Propor Missões" author="Rogério Júnior"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Usuário convidar um grupo à uma missão para ganhar recompensas.</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Pré-condição: O usuário deve estar logado, possuir celular ou computador, deve possuir <Link to='/ModelagemLexicos/Pergaminho de Missão'>pergaminho de missão</Link></li>
        <li>Local: Inventário na aba items (rp_inventory_v2.png)</li>
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
        <li><Link to='/ModelagemLexicos/Pergaminho de Missão'>Pergaminho de Missão</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Usuário compra <Link to='/ModelagemLexicos/Pergaminho de Missão'>pergaminho de desafio</Link> na loja com gemas</li>
        <li>Usuário ganha <Link to='/ModelagemLexicos/Pergaminho de Missão'>pergaminho de desafio</Link> realizando <Link to='/ModelagemLexicos/Tarefa'>tarefas</Link></li>
        <li>Usuário ganha <Link to='/ModelagemLexicos/Pergaminho de Missão'>pergaminho de desafio</Link> completando missões em grupo</li>
        <li>Usuário compra <Link to='/ModelagemLexicos/Armário Encantado'>armário encantado</Link> e pode ganhar <Link to='/ModelagemLexicos/Pergaminho de Missão'>pergaminhos de missão</Link></li>
        <li>Usuário propõe missão ao grupo</li>
        <li>Grupo conclui a missão</li>
        <li>Grupo ganha recompensas</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>A recompensa da missão não interessa ao usuário.</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>Conexão com a internet falhar e o grupo estar em missão.</li>
      </ul>
    </Card>

  </div>
)

export default ProporMissoes 