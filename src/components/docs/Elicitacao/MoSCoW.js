import React from 'react'
import Card from '../../UI/Card/Card'
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'
import { HashLink as Link } from 'react-router-hash-link'

const MoSCoW = () => {

  return (
    <div className='content artefact'>
      <HeadArtefact versions={ null } rastreability={ null }
                    title="MoSCoW" author="Gabriel Albino"/>
    

    <Card>
        <h2>Rastreabilidade</h2>
        <ul>
            <li><Link smooth to='/Questionario'>Questionario</Link></li>
        </ul>
    </Card>

      <Card>
      <table>
        <thead><tr><th >ID</th>
        <th>Descrição</th>
        <th>Valor</th>
        </tr></thead>
        <tbody><tr>
        <td>RF1</td>
        <td>O usuário deverá conseguir criar diárias, afazeres e habitos</td>
        <td>MUST</td>
        </tr>
        <tr>
        <td>RF2</td>
        <td>O usuário deverá ter um avatar customizável</td>
        <td>SHOULD</td>
        </tr>
        <tr>
        <td>RF3</td>
        <td>O usuário irá ganhar recompensas</td>
        <td>COULD</td>
        </tr>
        <tr>
        <td>RF4</td>
        <td>O usuário poderá entrar em grupos e interagir com os outros membros</td>
        <td>MUST</td>
        </tr>
        </tbody>
      </table>
      </Card>

    </div>
  )
}

export default MoSCoW