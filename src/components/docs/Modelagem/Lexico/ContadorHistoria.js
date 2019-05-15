import React from 'react'
import { Link } from 'react-router-dom'

const ContadorHistoria = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Contadores de História" author="Saleh Kader"/>
    <Card>
      <h2>Nome</h2>
      <p>Contadores de História</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Escritores</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>
        Contadores de História são pessoas responsáveis por estarem enviando textos de missão para o Board no Trello do Habitica
        </li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Contadores de História são responsáveis por enfatizar a natureza do Habitica</li>
        <li>Contadores de História expandem o mundo do Habitica</li>
        <li>Contadores de História fazem do Habitica mais lúdico</li> 
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)
export default ContadorHistoria