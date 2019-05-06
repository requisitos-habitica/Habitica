import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const EditarAfazer = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Editar afazer" author="Gabriel Albino"/>
    <Card>
      <h2>Nome</h2>
      <p>Editar afazer</p>
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
            Usuário edita as informações de um <Link target="_blank" to="/Afazer">afazer</Link> que já se encontra na lista.
        </li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Ao editar um afazer, as informações atualizadas são exibidas na <Link target="_blank" to="/ListaDeTarefas">lista de tarefas</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Verbo</p>
    </Card>

  </div>
)
export default EditarAfazer