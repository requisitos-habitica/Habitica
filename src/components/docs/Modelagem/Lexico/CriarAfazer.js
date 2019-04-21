import React from 'react'
import { Link } from 'react-router-dom'
const CriarAfazer = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Criar afazer" author="Gabriel Albino"/>
    <Card>
      <h2>Nome</h2>
      <p>Criar afazer</p>
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
            Usuário cadastra um novo <Link to="/Afazer">afazer</Link> na lista, que ficará na <Link to="/ListaDeTarefas">lista de afazeres</Link> até ele ser completado
        </li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Ao criar um afazer, o afazer aparece na lista de tarefas para ser <Link to="/ConcluirAfazer">completado</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Verbo</p>
    </Card>

  </div>
)
export default CriarAfazer