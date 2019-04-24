import React from 'react'
import { Link } from 'react-router-dom'

const GuildaPrivada = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Guilda Privada" author="Pedro Féo"/>
    <Card>
      <h2>Nome</h2>
      <p>Guilda Privada</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Guilda Fechada</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Só pode ser acessada através de Convites</li>
        <li>É um tipo de <Link to="/Guilda">Guilda</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>A Guilda Privada pode ser alterada para <Link to="/GuildaPublica">Guilda Pública</Link></li>
        <li>Um Usuário pode ser convidado a se juntar a uma Guilda Privada</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Estado</p>
    </Card>

  </div>
)

export default GuildaPrivada