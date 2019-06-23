import React from "react";
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'
import Card from '../../UI/Card/Card'

const style ={
  backgroundColor: 'var(--color-purple-light)',
  color: 'white'
}
const VerificacaoAgil = () => (
  <div className='content artefact'>
    <HeadArtefact versions={null} rastreability={null}
      title="Verificação Ágil" author="Lucas Dutra" />
    <Card >
      <h2>Reutilização de Domínio</h2>
      <p>Referencia para o artefato <a href="https://docs.google.com/spreadsheets/d/1OXaXlT-3jjyf5Ydf3gbrMG5YBhwM4eAw-bpKYc24PJo/edit?usp=sharing">AQUI</a></p>
      <div className='center-card'>
        <table cellSpacing="8">
          <thead>
            <tr>
              <th>Critérios a serem avaliados</th>
              <th>Fatos errados</th>
              <th>Fatos faltantes</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td  >Fatos errados</td>
              <td rowspan="2">Falta da motivação para gerar a história</td>
              <td>Divisão por releases</td>
            </tr>
            <tr>
              <td  >Fatos faltantes</td>
              <td>Classificação de histórias na confecção do Backlog</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>

    <Card>
      <h2>Inspeção backlog</h2>
      <table cellSpacing="8">
        <thead>
          <tr>
            <th colspan="6">Histórias</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th style={style}>Modelo de histórias de usuário</th>
            <td colspan="2"> Personagens (Para quem é aquela atividade)</td>
            <td colspan="2">O quê? (O que será feito)</td>
            <td>Motivação (Qual objetivo se deseja alcançar)</td>
          </tr>
          <tr>
            <th  style={style}>Determinação de atividades por história</th>
            <td colspan="2">Específicas o suficiente para por em prática</td>
            <td colspan="3">Não prescrever como serão feitas (nível de granularidade)</td>
          </tr>
          <tr>
            <th  style={style}>Critério de pronto</th>
            <td >Independente: História precisa ser acionável e completável por conta própria				
				
				</td>
            <td>Negociável: A História deve dar margem para possiveis mudanças ou melhorias				
				
        </td>
            <td>Valiosa: A História agregará valor ao usuário				
				
        </td>
            <td>Sucinta: A História deve ser pequena o suficiente para que seja possível estimá-la e planejá-la com facilidade				
				
        </td>
            <td>Testável: A história deve ter um teste pelo qual ela deve passar para ser declarada como concluída				
				
        </td>
          </tr>
        </tbody>
      </table>

      <table cellSpacing="8">
          <thead>
            <tr>
              <th>Priorização de histórias</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td  >Podem gerar maior receita</td>
            </tr>
            <tr>
              <td  >Importantes para o cliente				</td>
            </tr>
            <tr>
              <td  >Itens que agregam maior impacto sobre o negócio				</td>
            </tr>
            <tr>
              <td  >Mais fáceis de se concretizar				</td>
            </tr>
            <tr>
              <td  >Em projetos grandes itens que agregam mais valor são priorizados, o que acarreta na mitigação de riscos				</td>
            </tr>
          </tbody>
        </table>
    </Card>
  </div>
);

export default VerificacaoAgil;