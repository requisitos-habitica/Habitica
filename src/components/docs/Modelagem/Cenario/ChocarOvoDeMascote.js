import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const ChocarOvoDeMascote = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Chocar Ovo de Mascote" author="Rogério Júnior"/>
    <Card>
      <h2>Objetivo</h2>
      <p><Link target="_blank" to='/ModelagemLexicos/Chocar Ovo'>Chocar o ovo</Link> para que o usuário possua um novo <Link target="_blank" to='/ModelagemLexicos/Mascote'>mascote</Link>.</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Pré-condição: O usuário deve estar logado, possuir celular ou computador,  deve possuir <Link target="_blank" to='/ModelagemLexicos/Ovo de Mascote'>ovo de mascote</Link> e poções de eclosão</li>
        <li>Local: Inventário na aba items (rp_inventory_v2.png)</li>
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
        <li><Link target="_blank" to='/ModelagemLexicos/Ovo de Mascote'>Ovo de Mascote</Link></li>
        <li><Link target="_blank" to='/ModelagemLexicos/Poção de Eclosão'>Poção de Eclosão</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Usuário compra <Link target="_blank" to='/ModelagemLexicos/Ovo de Mascote'>ovo de mascote</Link> na loja</li>
        <li>Usuário ganha <Link target="_blank" to='/ModelagemLexicos/Ovo de Mascote'>ovo de mascote</Link> realizando <Link target="_blank" to='/ModelagemLexicos/Tarefa'>tarefas</Link></li>
        <li>Usuário compra <Link target="_blank" to='/ModelagemLexicos/Armário Encantado'>armário encantado</Link> e pode ganhar <Link target="_blank" to='/ModelagemLexicos/Ovo de Mascote'>ovo de mascote</Link></li>
        <li>Usuário compra <Link target="_blank" to='/ModelagemLexicos/Poção de Eclosão'>poção de eclosão</Link> na loja</li>
        <li>Usuário ganha <Link target="_blank" to='/ModelagemLexicos/Poção de Eclosão'>poção de eclosão</Link> realizando tarefas</li>
        <li>Usuário compra <Link target="_blank" to='/ModelagemLexicos/Armário Encantado'>armário encantado</Link> e pode ganhar <Link target="_blank" to='/ModelagemLexicos/Poção de Eclosão'>poção de eclosão</Link></li>
        <li>Usuário aplica <Link target="_blank" to='/ModelagemLexicos/Poção de Eclosão'>poção de eclosão</Link> no ovo do mascote</li>
        <li>O <Link target="_blank" to='/ModelagemLexicos/Chocar Ovo'>ovo choca</Link></li>
        <li>Mascote nasce com o tipo da <Link target="_blank" to='/ModelagemLexicos/Poção de Eclosão'>poção</Link> usada</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>O tipo da <Link target="_blank" to='/ModelagemLexicos/Poção de Eclosão'>poção de eclosão</Link> interfere no tipo do <Link target="_blank" to='/ModelagemLexicos/Mascote'>mascote</Link> que vai nascer.</li>
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

export default ChocarOvoDeMascote
