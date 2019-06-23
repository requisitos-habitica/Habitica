import React from "react";
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'
import Card from '../../UI/Card/Card'

const style = {
  backgroundColor: 'var(--color-purple-light)',
  color: 'white'
}
const VerificacaoAgil = () => (
  <div className='content artefact'>
    <HeadArtefact versions={null} rastreability={null}
      title="Inspeção backlog" author="Lucas Dutra" />
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
      <h2>Critérios</h2>
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
            <th style={style}>Determinação de atividades por história</th>
            <td colspan="2">Específicas o suficiente para por em prática</td>
            <td colspan="3">Não prescrever como serão feitas (nível de granularidade)</td>
          </tr>
          <tr>
            <th style={style}>Critério de pronto</th>
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

    <Card>
      <h2>Análise Sprints</h2>
      <table cellSpacing="8">
        <thead>
          <tr>
            <th>SPRINT</th>
            <th>US</th>
            <th>PRIORIDADE</th>
            <th>DIFICULDADE</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td rowspan='5'>1</td>
            <td>US01</td>
            <td>MUST</td>
            <td>8</td>
          </tr>


          <tr>
            <td>US02 </td>
            <td>MUST</td>
            <td>3</td>
          </tr>
          <tr>
            <td>US05</td>
            <td> SHOULD</td>
            <td> 2</td>
          </tr>

          <tr>
            <td>US09 </td>
            <td>COULD </td>
            <td>3</td>
          </tr>

          <tr>
            <td>US35</td>
            <td>SHOULD</td>
            <td>5</td>
          </tr>

          <tr>
            <td rowspan='5'>2</td>
            <td>US08</td>
            <td>COULD</td>
            <td>2</td>
          </tr>
          <tr>
            <td>US11</td>
            <td>SHOULD</td>
            <td>3</td>
          </tr>

          <tr>
            <td>US33</td>
            <td>MUST</td>
            <td>3</td>
          </tr>

          <tr>
            <td>US34</td>
            <td>SHOULD</td>
            <td>5	</td>
          </tr>

          <tr>
            <td>US54</td>
            <td>MUST</td>
            <td>8</td>
          </tr>

          <tr>
            <td rowspan='4'>3</td>
            <td>US07</td>
            <td>SHOULD</td>
            <td>5</td>
          </tr>
          <tr>
            <td>US38</td>
            <td>SHOULD</td>
            <td>3</td>
          </tr>
          <tr>
            <td>US51</td>
            <td>COULD</td>
            <td>5</td>
          </tr>
          <tr>
            <td>US55</td>
            <td>MUST</td>
            <td>3</td>
          </tr>

          <tr>
            <td rowspan='4'>4</td>
            <td>US19</td>
            <td>MUST</td>
            <td>5</td>
          </tr>
          <tr>
            <td>US37</td>
            <td>MUST</td>
            <td>2</td>
          </tr>
          <tr>
            <td>US39</td>
            <td>COULD</td>
            <td>2</td>
          </tr>
          <tr>
            <td>US49</td>
            <td>SHOULD</td>
            <td>8</td>
          </tr>
          <tr>
            <td rowspan='4'>5</td>
            <td>US26</td>
            <td>SHOULD</td>
            <td>5</td>
          </tr>
          <tr>
            <td>US29</td>
            <td>MUST</td>
            <td>3</td>
          </tr>
          <tr>
            <td>US31</td>
            <td>COULD</td>
            <td>1</td>
          </tr>
          <tr>
            <td>US36</td>
            <td>MUST</td>
            <td>8</td>
          </tr>
          <tr>
            <td rowspan='5'>6</td>
            <td>US28</td>
            <td>COULD</td>
            <td>2</td>
          </tr>
          <tr>
            <td>US30</td>
            <td>MUST</td>
            <td>5</td>
          </tr>
          <tr>
            <td>US50</td>
            <td>MUST</td>
            <td>2</td>
          </tr>
          <tr>
            <td>US20</td>
            <td>COULD</td>
            <td>1</td>
          </tr>
          <tr>
            <td>US32</td>
            <td>COULD</td>
            <td>2</td>
          </tr>
          <tr>
            <td rowspan='5'>7</td>
            <td>US41</td>
            <td>MUST</td>
            <td>2</td>
          </tr>
          <tr>
            <td>US40</td>
            <td>MUST</td>
            <td>8</td>
          </tr>
          <tr>
            <td>US42</td>
            <td>SHOULD</td>
            <td>5</td>
          </tr>
          <tr>
            <td>US43</td>
            <td>SHOULD</td>
            <td>5</td>
          </tr>
          <tr>
            <td>US46</td>
            <td>COULD</td>
            <td>1</td>
          </tr>
          <tr>
            <td rowspan='24'>Comunidade</td>
            <td>US03</td>
            <td>WOULD</td>
            <td rowspan='24'></td>
          </tr>
          <tr>
            <td>US03</td>
            <td>WOULD</td>
          </tr>
          <tr>
            <td>US04</td>
            <td>WOULD</td>
          </tr>
          <tr>
            <td>US06</td>
            <td>WOULD</td>
          </tr>
          <tr>
            <td>US10</td>
            <td>WOULD</td>
          </tr>
          <tr>
            <td>US12</td>
            <td>WOULD</td>
          </tr>
          <tr>
            <td>US13</td>
            <td>WOULD</td>
          </tr>
          <tr>
            <td>US14</td>
            <td>WOULD</td>
          </tr>
          <tr>
            <td>US15</td>
            <td>WOULD</td>
          </tr>
          <tr>
            <td>US16</td>
            <td>WOULD</td>
          </tr>
          <tr>
            <td>US17</td>
            <td>WOULD</td>
          </tr>
          <tr>
            <td>US18</td>
            <td>WOULD</td>
          </tr>
          <tr>
            <td>US21</td>
            <td>WOULD</td>
          </tr>
          <tr>
            <td>US22</td>
            <td>WOULD</td>
          </tr>
          <tr>
            <td>US23</td>
            <td>WOULD</td>
          </tr>
          <tr>
            <td>US24</td>
            <td>WOULD</td>
          </tr>
          <tr>
            <td>US25</td>
            <td>WOULD</td>
          </tr>
          <tr>
            <td>US27</td>
            <td>WOULD</td>
          </tr>
          <tr>
            <td>US44</td>
            <td>WOULD</td>
          </tr>
          <tr>
            <td>US45</td>
            <td>WOULD</td>
          </tr>
          <tr>
            <td>US47</td>
            <td>WOULD</td>
          </tr>
          <tr>
            <td>US48</td>
            <td>WOULD</td>
          </tr>
          <tr>
            <td>US53</td>
            <td>WOULD</td>
          </tr>
          <tr>
            <td>US52</td>
            <td>WOULD</td>
          </tr>
        </tbody>
      </table>
    </Card>
  </div>
);

export default VerificacaoAgil;