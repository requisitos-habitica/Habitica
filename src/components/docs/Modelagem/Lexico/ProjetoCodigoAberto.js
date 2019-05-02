import React from 'react'
import { Link } from 'react-router-dom'
const ProjetoCodigoAberto = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Projeto de Código Aberto" author="Saleh Kader"/>
    <Card>
      <h2>Nome</h2>
      <p>Projeto de Código Aberto</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Open Source</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>
            Projeto de Código Aberto é a licença do software do Habitica, onde qualquer pessoas possui o direito de estudar, modificar e distribuir o software de graça para qualquer outra pessoa e para qualquer finalidade.
        </li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Desenvolvedor de software pode utilizar trechos do código fonte em seus projetos</li>
        <li>Desenvolvedor pode desenvolver para o projeto do Habitica</li>            
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Verbo</p>
    </Card>

  </div>
)
export default ProjetoCodigoAberto