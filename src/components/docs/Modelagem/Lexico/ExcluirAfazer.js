import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const ExcluirAfazer = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Excluir o afazer" author="Gabriel Albino"/>
    <Card>
      <h2>Nome</h2>
      <p>Excluir o afazer</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>-</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>
            Usuário apaga da lista um <Link to="/Afazer">afazer</Link>.
        </li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>O afazer sai da <Link to="/ListaDeTarefas">lista de afazeres</Link></li>
         <li>Não é mais possível o usuário <Link to="/ConcluirAfazer">Concluir o afazer</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>#Verbo</p>
    </Card>

  </div>
)
export default ExcluirAfazer