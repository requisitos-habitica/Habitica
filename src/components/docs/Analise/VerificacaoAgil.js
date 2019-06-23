import React from "react";
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'
import Card from '../../UI/Card/Card'

const VerificacaoAgil = () => (
  <div className='content artefact'>
    <HeadArtefact versions={null} rastreability={null}
      title="Verificação Ágil" author="Lucas Dutra" />
    <Card >
      <h2>Reutilização de Domínio</h2>
      <div className='center-card'>
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
            </tbody>
        </table>
      </div>
    </Card>
  </div>
);

export default VerificacaoAgil;