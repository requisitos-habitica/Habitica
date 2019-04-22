import React from 'react'
import { Link } from 'react-router-dom'

const CategoriaV1 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Categoria" author="Kaique"/>
    <Card>
      <h2>Nome</h2>
      <p>Categoria</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Categorias</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Conjunto de <Link to="/DesafioV1">desafios</Link>, agrupados por um classe genérica que os define</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Adicionar categoria ao <Link to="/DesafioV1">desafio</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default CategoriaV1
