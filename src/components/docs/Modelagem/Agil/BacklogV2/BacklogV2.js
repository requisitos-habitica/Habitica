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
        title="Product Backlog V2" author="Lucas Dutra, Gabriel Albino e Youssef Muhamad"/>

        <Card>
            <h2>Versionamento</h2>
            <p><Link to='/BacklogV1' >V1</Link></p>
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
                    <td>US01</td>
                    <td>Eu, como usuário do sistema, desejo poder adicionar uma nova diária, para que eu possa ter controle sobre minhas metas diárias													</td>
                </tr>

                {
                    FE01.map(US =>                 
                    <tr>
                        <td>{US.id}</td>
                        <td>{US.description}</td>
                    </tr>)
                }

                <tr>
                    <td rowspan = "5" >FE02 - Etiquetas</td>
                    <td>US16</td>
                    <td>Eu, como usuário do sistema, desejo criar uma etiqueta para que eu possa organizar atividades.</td>
                </tr>

                {
                    FE02.map(US =>                 
                    <tr>
                        <td>{US.id}</td>
                        <td>{US.description}</td>
                    </tr>)
                }

                <tr>
                    <td rowspan = "28" >E02 - Gamificação</td>
                    <td rowspan = "14" >FE03 - Inventário</td>
                    <td>US21</td>
                    <td>Eu, como usuário do sistema, gostaria de ter todos os itens que eu comprar ou ganhar separados em um local.</td>
                </tr>

                {
                    FE03.map(US =>                 
                    <tr>
                        <td>{US.id}</td>
                        <td>{US.description}</td>
                    </tr>)
                }

                <tr>
                    <td rowspan = "7" >FE04 - Loja</td>
                    <td>US35</td>
                    <td>Eu, como usuário do sistema, desejo comprar equipamento com gemas ou moedas para meu avatar para que eu possa customizar meu avatar</td>
                </tr>

                {
                    FE04.map(US =>                 
                    <tr>
                        <td>{US.id}</td>
                        <td>{US.description}</td>
                    </tr>)
                }

                <tr>
                    <td rowspan = "7" >FE05 - Desafios</td>
                    <td>US42</td>
                    <td>Eu, como usuário do sistema, desejo criar desafios para motivar outros usuários através de uma competição</td>
                </tr>

                {
                    FE05.map(US =>                 
                    <tr>
                        <td>{US.id}</td>
                        <td>{US.description}</td>
                    </tr>)
                }

                <tr>
                    <td rowspan = "28" >E03 - Interação entre Usuários</td>
                    <td rowspan = "10" >FE06 - Grupo</td>
                    <td>US49</td>
                    <td>Eu, como usuário do sistema, desejo acessar os grupos pela sidebar para acessar suas funcionalidades.</td>
                </tr>

                {
                    FE06.map(US =>                 
                    <tr>
                        <td>{US.id}</td>
                        <td>{US.description}</td>
                    </tr>)
                }

            </tbody>
        </table>
    </div>
)

export default BacklogV2