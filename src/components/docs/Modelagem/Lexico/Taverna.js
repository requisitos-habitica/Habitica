import React from 'react'
import { Link } from 'react-router-dom'

const Taverna = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Taverna" author="Saleh Kader"/>
    <Card>
      <h2>Nome</h2>
      <p>Taverna</p>
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
            Taverna é o estabelecimento dentro do jogo que provê alojamento e entretenimento para viajantes
        </li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Na Taverna não se toma dano</li>
        <li>Na Taverna tem-se a opção de marcar as diárias completas e ganhar recompensas por elas</li>
        <li>O Habitica altera o avatar, fechando os olhos dele(a) e adicionando um 'Zzz' no fundo</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)
export default Taverna