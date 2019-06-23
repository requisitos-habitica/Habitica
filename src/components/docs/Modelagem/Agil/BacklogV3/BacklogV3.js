import React from 'react'
import '../../../Disciplina/Disciplina.scss'
import HeadArtefact from '../../../../HOC/HeadArtefact/HeadArtefact'
import Card from '../../../../UI/Card/Card'
import { Link } from 'react-router-dom'
import FE01 from './FE01'
import FE02 from './FE02'
import FE03 from './FE03'
import FE04 from './FE04'
import FE05 from './FE05'
import FE06 from './FE06'

const BacklogV2 = () => (
    <div className="content artefact disciplina">

        <HeadArtefact versions={ null } rastreability={ null }
        title="Product Backlog V3" author="Lucas Dutra"/>

        <Card>
            <h2>Versionamento</h2>
            <p><Link to='/BacklogV1' >V1</Link></p>
            <p><Link to='/BacklogV2' >V2</Link></p>
        </Card>

        <table cellSpacing="8">
            <thead>
                <tr>
                    <th>Épico</th>
                    <th>Feature</th>
                    <th>ID</th>
                    <th>História de Usuário</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td rowspan = "20" >E01 - Gerenciamento de tarefas</td>
                    <td rowspan = "15" >FE01 - Tarefas</td>
                    <td><Link to='/US/US01' >US01</Link></td>
                    <td>Eu, como usuário do sistema, desejo poder adicionar uma nova diária, para que eu possa ter controle sobre minhas metas diárias													</td>
                </tr>

                {
                    FE01.map(US =>                 
                    <tr>
                        <td><Link to={`/US/${US.id}`} >{US.id}</Link></td>
                        <td>{US.description}</td>
                    </tr>)
                }

                <tr>
                    <td rowspan = "5" >FE02 - Etiquetas</td>
                    <td><Link to='/US/US16' >US16</Link></td>
                    <td>Eu, como usuário do sistema, desejo criar uma etiqueta para que eu possa organizar atividades.</td>
                </tr>

                {
                    FE02.map(US =>                 
                    <tr>
                        <td><Link to={`/US/${US.id}`} >{US.id}</Link></td>
                        <td>{US.description}</td>
                    </tr>)
                }

                <tr>
                    <td rowspan = "28" >E02 - Gamificação</td>
                    <td rowspan = "14" >FE03 - Inventário</td>
                    <td><Link to='/US/US21' >US21</Link></td>
                    <td>Eu, como usuário do sistema, gostaria de ter todos os itens que eu comprar ou ganhar separados em um local.</td>
                </tr>

                {
                    FE03.map(US =>                 
                    <tr>
                        <td><Link to={`/US/${US.id}`} >{US.id}</Link></td>
                        <td>{US.description}</td>
                    </tr>)
                }

                <tr>
                    <td rowspan = "7" >FE04 - Loja</td>
                    <td><Link to='/US/US35' >US35</Link></td>
                    <td>Eu, como usuário do sistema, desejo comprar equipamento com gemas ou moedas para meu avatar para que eu possa customizar meu avatar</td>
                </tr>

                {
                    FE04.map(US =>                 
                    <tr>
                        <td><Link to={`/US/${US.id}`} >{US.id}</Link></td>
                        <td>{US.description}</td>
                    </tr>)
                }

                <tr>
                    <td rowspan = "7" >FE05 - Desafios</td>
                    <td><Link to='/US/US42' >US42</Link></td>
                    <td>Eu, como usuário do sistema, desejo criar desafios para motivar outros usuários através de uma competição</td>
                </tr>

                {
                    FE05.map(US =>                 
                    <tr>
                        <td><Link to={`/US/${US.id}`} >{US.id}</Link></td>
                        <td>{US.description}</td>
                    </tr>)
                }

                <tr>
                    <td rowspan = "28" >E03 - Interação entre Usuários</td>
                    <td rowspan = "10" >FE06 - Grupo</td>
                    <td><Link to='/US/US49' >US49</Link></td>
                    <td>Eu, como usuário do sistema, desejo acessar os grupos pela sidebar para acessar suas funcionalidades.</td>
                </tr>

                {
                    FE06.map(US =>                 
                    <tr>
                        <td><Link to={`/US/${US.id}`} >{US.id}</Link></td>
                        <td>{US.description}</td>
                    </tr>)
                }

            </tbody>
        </table>
    </div>
)

export default BacklogV2