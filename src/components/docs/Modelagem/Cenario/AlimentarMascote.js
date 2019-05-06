import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const AlimentarMascote = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Alimentar Mascote" author="Rogério Júnior"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Alimentar um <Link target="_blank" to='/ModelagemLexicos/Mascote'>mascote</Link> para que ele possa ser <Link target="_blank" to='/ModelagemLexicos/Domado'>domado</Link>.</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Pré-condição: O usuário deve estar logado, possuir celular ou computador, deve possuir <Link target="_blank" to='/ModelagemLexicos/Comida'>comida</Link> e <Link target="_blank" to='/ModelagemLexicos/Mascote'>mascotes</Link>;</li>
        <li>Local: Inventário na aba <Link target="_blank" to='/ModelagemLexicos/Estábulo'>estábulo</Link> (rp_inventory_v2.png);</li>
        <li>Tempo: Enquanto estiver usando o Habitica.</li>
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
        <li><Link target="_blank" to='/ModelagemLexicos/Comida'>Comida</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Usuário compra <Link target="_blank" to='/ModelagemLexicos/Comida'>comida</Link> na loja utilizando gemas</li>
        <li>Usuário ganha <Link target="_blank" to='/ModelagemLexicos/Comida'>comida</Link> realizando <Link target="_blank" to='/ModelagemLexicos/Tarefa'>tarefas</Link></li>
        <li>Usuário compra <Link target="_blank" to='/ModelagemLexicos/Armário Encantado'>armário encantado</Link> e pode ganhar <Link target="_blank" to='/ModelagemLexicos/Comida'>comida</Link></li>
        <li>Usuário alimenta o <Link target="_blank" to='/ModelagemLexicos/Mascote'>mascote</Link></li>
        <li><Link target="_blank" to='/ModelagemLexicos/Mascote'>Mascote</Link> pode ser <Link target="_blank" to='/ModelagemLexicos/Domado'>domado</Link>, dependendo da quantidade de <Link target="_blank" to='/ModelagemLexicos/Comida'>comida</Link> que recebeu</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li><Link target="_blank" to='/ModelagemLexicos/Mascote'>Mascote</Link> não gostar da <Link target="_blank" to='/ModelagemLexicos/Comida'>comida</Link> e demorar a <Link target="_blank" to='/ModelagemLexicos/Domado'>crescer</Link>.</li>
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

export default AlimentarMascote