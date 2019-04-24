import React from 'react'
import { Link } from 'react-router-dom'

const GuildaPublica = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Guilda Pública" author="Pedro Féo"/>
    <Card>
      <h2>Nome</h2>
      <p>Guilda Pública</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Guilda Aberta</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Permite a participação de qualquer Usuário</li>
        <li>É um tipo de <Link to="/Guilda">Guilda</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>A Guilda Pública pode ser visualizada por Usuários sem que participem dela</li>
        <li>A Guilda Pública pode ser alterada para <Link to="/GuildaPrivada">Guilda Privada</Link></li>
        <li>O Usuário pode se juntar a uma Guilda Pública</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Estado</p>
    </Card>

  </div>
)

export default GuildaPublica