import React from 'react'
import Card from '../../UI/Card/Card'
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'
import { Link } from 'react-router-dom'

const BackwardFrom = () => {

  return (
    <div className='artefact'>
      <div className="content">
        <HeadArtefact style versions={null} rastreability={null}
          title="Backward From" author="Gabriel Albino" />
      </div>

      <table class="table table-bordered table-hover table-condensed">
        <thead><tr><th title="Field #1">Épico</th>
        <th title="Field #3">Feature</th>
        <th title="Field #4">ID</th>
        <th title="Field #5">Requisitos</th>
        <th title="Field #6">RichPicture</th>
        <th title="Field #7">Técnicas de Elicitação</th>
        <th title="Field #8">Cenários</th>
        <th title="Field #9">Léxicos</th>
        <th title="Field #10">Casos de Uso</th>
        <th title="Field #11">Rationales</th>
        <th title="Field #12">NFR Softgoal</th>
        <th title="Field #13">História de usuário</th>
        </tr></thead>
        <tbody><tr>
        <td>E01 - Gerenciamento de tarefas</td>
        <td>FE01 - Tarefas</td>
        <td>RQ01</td>
        <td>O usuário deve poder adicionar nova(s) diária(s)</td>
        <td>v3-geral-todos<br/>v2-geral-albino<br/>v1-tarefas-albino<br/>v2-geral-feo<br/>v1-geral-youseff</td>
        <td>AP1<br/>AP2<br/>AP3<br/>BS1<br/>ETN1<br/>ST3</td>
        <td>CN34</td>
        <td>LX51</td>
        <td>-</td>
        <td>I* Tarefa</td>
        <td>-</td>
        <td>US01</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ02</td>
        <td>O usuário deve poder  adicionar novo(s) hábito(s)</td>
        <td>v3-geral-todos<br/>v2-geral-albino<br/>v1-tarefas-albino<br/>v2-geral-feo<br/>v1-geral-youseff</td>
        <td>AP1<br/>AP2<br/>AP3<br/>BS1<br/>ETN1<br/>ST3<br/>ST7</td>
        <td>CN35</td>
        <td>LX56</td>
        <td>-</td>
        <td>I* Tarefa</td>
        <td>-</td>
        <td>US02</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ03</td>
        <td>O usuário deve poder adicionar novo(s) afazer(es)</td>
        <td>v3-geral-todos<br/>v2-geral-albino<br/>v1-tarefas-albino<br/>v2-geral-feo<br/>v1-geral-youseff</td>
        <td>AP1<br/>AP2<br/>BS1<br/>ETN1<br/>ST8</td>
        <td>CN33</td>
        <td>LX61</td>
        <td>-</td>
        <td>I* Tarefa</td>
        <td>-</td>
        <td>US03</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ04</td>
        <td>O usuário deve poder deletar afazer(es)</td>
        <td>v3-geral-todos<br/>v2-geral-albino<br/>v1-tarefas-albino</td>
        <td>ST7</td>
        <td>-</td>
        <td>LX63</td>
        <td>-</td>
        <td> </td>
        <td>-</td>
        <td>US04</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ05</td>
        <td>O usuário deve poder editar afazer(es)</td>
        <td>v3-geral-todos<br/>v2-geral-albino<br/>v1-tarefas-albino</td>
        <td> ST3<br/></td>
        <td>CN41</td>
        <td>LX62</td>
        <td>-</td>
        <td> </td>
        <td>-</td>
        <td>US05</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ06</td>
        <td>O usuário deve poder finalizar uma afazer(es)</td>
        <td>v3-geral-todos<br/>v2-geral-albino<br/>v1-tarefas-albino</td>
        <td>AP2<br/>INT1<br/>ST6</td>
        <td>CN37</td>
        <td>LX64</td>
        <td>-</td>
        <td> </td>
        <td>-</td>
        <td>US06</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ07</td>
        <td>O usuário deve poder reorganizar a ordem das suas tarefas</td>
        <td> </td>
        <td>ST7</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td> </td>
        <td>-</td>
        <td>US07</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ08</td>
        <td>O usuário deve poder adicionar observação(ões) a(s) sua(s) tarefa(s) </td>
        <td>v2-geral-feo</td>
        <td>INT1</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td> </td>
        <td>-</td>
        <td>US08</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ09</td>
        <td>O usuário deve poder adicionar uma data limite para afazer(es)</td>
        <td>v1-tarefas-albino</td>
        <td>AP2<br/>AP3<br/>BS1<br/>INT1<br/>ST9</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>I* Tarefa</td>
        <td>-</td>
        <td>US09</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ10</td>
        <td>O usuário deve poder categorizar a dificuldade da(s) atividade(s)</td>
        <td>v1-tarefas-albino</td>
        <td>BS1<br/>INT1<br/>ST14</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>I* Tarefa</td>
        <td>-</td>
        <td>US10</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ11</td>
        <td>O usuário deve poder adicionar etiquetas na(s) atividade(s) para poder agrupar</td>
        <td> </td>
        <td>AP2<br/>ST1</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td> </td>
        <td>-</td>
        <td>US11</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ12</td>
        <td>O usuário deve poder determinar a repetição de uma diária</td>
        <td>v1-tarefas-albino</td>
        <td>AP2<br/>ETN1<br/>INT1<br/>ST6</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>I* Tarefa</td>
        <td>-</td>
        <td>US12</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ13</td>
        <td>O usuário deve poder pesquisar atividade(s)</td>
        <td> </td>
        <td> </td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td> </td>
        <td>-</td>
        <td>US13</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ14</td>
        <td>O usuário deve poder filtrar as atividades pelas etiquetas</td>
        <td> </td>
        <td>AP2</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>I* Tarefa</td>
        <td>-</td>
        <td>US14</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ15</td>
        <td>O usuário deve poder ao completar tarefas, ganhar recompensas</td>
        <td>v3-geral-todos<br/>v2-geral-albino<br/>v1-tarefas-albino<br/>v2-geral-feo<br/>v1-geral-youseff</td>
        <td>BS1<br/>ETN1<br/>ETN1<br/>ST2<br/>ST11</td>
        <td>CN26</td>
        <td>LX65</td>
        <td>UC13</td>
        <td>I* Tarefa</td>
        <td>-</td>
        <td>US15</td>
        </tr>
        <tr>
        <td> </td>
        <td>FE02 - Etiquetas</td>
        <td>RQ16</td>
        <td>O usuário deve poder criar etiqueta(s)</td>
        <td> </td>
        <td>AP2</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>I* Tarefa</td>
        <td>-</td>
        <td>US16</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ17</td>
        <td>O usuário deve poder deletar etiqueta(s)</td>
        <td> </td>
        <td>AP2</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>I* Tarefa</td>
        <td>-</td>
        <td>US17</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ18</td>
        <td>O usuário deve poder editar etiqueta(s)</td>
        <td> </td>
        <td>AP2</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>I* Tarefa</td>
        <td>-</td>
        <td>US18</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ19</td>
        <td>O usuário deve poder reorganizar a ordem das etiquetas</td>
        <td> </td>
        <td>AP2</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>I* Tarefa</td>
        <td>-</td>
        <td>US19</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ20</td>
        <td>O usuário deve poder visualizar as atividades finalizadas</td>
        <td> </td>
        <td>AP2</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td> </td>
        <td>-</td>
        <td>US20</td>
        </tr>
        <tr>
        <td>E02 - Gamificação</td>
        <td>FE03 - Inventário</td>
        <td>RQ21</td>
        <td>O usuário deve de ter todos os itens que eu comprar ou ganhar separados em um local.</td>
        <td>v2-inventario-feo</td>
        <td>BS1<br/>ETN1</td>
        <td>-</td>
        <td>-</td>
        <td> </td>
        <td>RationaleUsuarioLoja-v2</td>
        <td>-</td>
        <td>US21</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ22</td>
        <td>O usuário deve poder ter seus itens fossem categorizados em equipamentos, estábulo e aba itens em geral.</td>
        <td>v2-inventario-feo</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td> </td>
        <td>Loja-v2</td>
        <td>-</td>
        <td>US22</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ23</td>
        <td>O usuário deve ter a seguinte divisão na aba de categoria para os itens: ovos, poções, comidas e selas, especial e missões</td>
        <td>v2-inventario-feo</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td> </td>
        <td>Loja-v2</td>
        <td>-</td>
        <td>US23</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ24</td>
        <td>O usuário deve poder ter a seguinte divisão na aba de categoria para os equipamentos: cabeça, tiaras, óculos, armaduras, costas, corpo, arma e escudo</td>
        <td>v2-inventario-feo</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td> </td>
        <td>Loja-v2</td>
        <td>-</td>
        <td>US24</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ25</td>
        <td>O usuário deve ter a seguinte divisão na abas de categoria para o estábulo: montaria e mascotes</td>
        <td>v2-inventario-feo</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td> </td>
        <td>Loja-v2</td>
        <td>-</td>
        <td>US25</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ26</td>
        <td>O usuário deve poder filtrar itens</td>
        <td> </td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td> </td>
        <td>Loja-v2</td>
        <td>-</td>
        <td>US26</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ27</td>
        <td>O usuário deve poder buscar itens por nome.</td>
        <td> </td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td> </td>
        <td>Loja-v2</td>
        <td>-</td>
        <td>US27</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ28</td>
        <td>O usuário deve poder usar as poções para eclodir ovos de pets</td>
        <td>v2-loja-dutra<br/>v2-inventario-feo</td>
        <td>-</td>
        <td>CN44</td>
        <td>LX66, LX67, LX68</td>
        <td>UC20</td>
        <td> </td>
        <td>-</td>
        <td>US28</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ29</td>
        <td>O usuário deve poder alimentar mascotes.</td>
        <td>v2-inventario-feo</td>
        <td>-</td>
        <td>CN45</td>
        <td>LX73</td>
        <td>UC21</td>
        <td> </td>
        <td>-</td>
        <td>US29</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ30</td>
        <td>Os mascotes devem poder evoluir para montarias</td>
        <td>v2-loja-dutra</td>
        <td>-</td>
        <td>CN45</td>
        <td>LX70</td>
        <td>UC21</td>
        <td> </td>
        <td>-</td>
        <td>US30</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ31</td>
        <td>O usuário deve poder propor missões para o grupo</td>
        <td>v3-geral-todos<br/>v2-geral-feo<br/>v2-loja-dutra<br/>v1-inventario-roger<br/>v1-grupo-saleh</td>
        <td>BS1<br/>ST2</td>
        <td>CN46</td>
        <td>LX74, LX28</td>
        <td>UC22</td>
        <td> </td>
        <td>Interação com outros usuários</td>
        <td>US31</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ32</td>
        <td>O usuário deve poder equipar e desequipar o avatar com itens</td>
        <td>v3-geral-todos<br/>v2-inventario-feo<br/>v2-loja-dutra</td>
        <td>ETN1</td>
        <td>CN47, CN48, CN49, CN50, CN51, CN52, CN53</td>
        <td>LX 75, LX76</td>
        <td>UC23</td>
        <td> </td>
        <td>Posse de itens e riquezas</td>
        <td>US32</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ33</td>
        <td>O usuário deve poder adicionar e remover os mascotes do avatar</td>
        <td> </td>
        <td>ETN1</td>
        <td>CN54</td>
        <td>LX69</td>
        <td>UC23</td>
        <td> </td>
        <td>Posse de itens e riquezas</td>
        <td>US33</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ34</td>
        <td>O usuário deve poder adicionar e remover uma montaria do avatar,</td>
        <td> </td>
        <td>ETN1</td>
        <td>CN55</td>
        <td>LX70</td>
        <td>UC23</td>
        <td> </td>
        <td>Posse de itens e riquezas</td>
        <td>US34</td>
        </tr>
        <tr>
        <td> </td>
        <td>FE04 - <br/>Loja</td>
        <td>RQ35</td>
        <td>O usuário deve poder comprar equipamento com gemas ou moedas</td>
        <td>v3-geral-todos<br/>v2-inventario-feo<br/>v2-loja-dutra</td>
        <td>BS1<br/>ETN1<br/>INT1</td>
        <td>CN06, CN09</td>
        <td>LX10,  LX11, LX76</td>
        <td>UC16</td>
        <td>RationaleUsuarioLoja-v2</td>
        <td>Posse de itens e riquezas</td>
        <td>US35</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ36</td>
        <td>O usuário deve poder ver o valor dos itens da loja</td>
        <td>v2-loja-dutra</td>
        <td>ETN1</td>
        <td>CN06, CN09</td>
        <td>LX16</td>
        <td>UC16</td>
        <td> </td>
        <td>Feedback ao usuário</td>
        <td>US36</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ37</td>
        <td>O usuário deve poder adquirir moedas para comprar itens</td>
        <td>v2-loja-dutra</td>
        <td> </td>
        <td>CN13</td>
        <td>LX11</td>
        <td>UC18</td>
        <td> </td>
        <td>Posse de itens e riquezas</td>
        <td>US37</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ38</td>
        <td>O usuário deve poder comprar itens com gemas ou moedas</td>
        <td>v3-geral-todos</td>
        <td>BS1</td>
        <td>CN01, CN02, CN03</td>
        <td>LX10,  LX11</td>
        <td>-</td>
        <td> </td>
        <td>Posse de itens e riquezas</td>
        <td>US38</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ39</td>
        <td>O usuário deve poder comprar missões com gemas ou moedas</td>
        <td>v2-loja-dutra</td>
        <td>BS1</td>
        <td>CN06, CN07, CN08</td>
        <td>LX10, LX11, LX26</td>
        <td>UC15</td>
        <td> </td>
        <td>Posse de itens e riquezas</td>
        <td>US39</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ40</td>
        <td>O usuário deve poder comprar itens limitados com gemas ou moedas</td>
        <td>v2-loja-dutra</td>
        <td>-</td>
        <td>CN10, CN12</td>
        <td>LX13, LX14</td>
        <td>UC16</td>
        <td> </td>
        <td>Posse de itens e riquezas</td>
        <td>US40</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ41</td>
        <td>O usuário deve poder comprar missões limitadas com gemas ou moedas</td>
        <td>v2-loja-dutra</td>
        <td>-</td>
        <td>CN11</td>
        <td>LX13, LX14</td>
        <td>UC15</td>
        <td> </td>
        <td>Posse de itens e riquezas</td>
        <td>US41</td>
        </tr>
        <tr>
        <td> </td>
        <td>FE05 - Desafios</td>
        <td>RQ42</td>
        <td>O usuário deve poder criar desafios</td>
        <td>v3-geral-todos</td>
        <td>ETN1</td>
        <td>CN56</td>
        <td>LX80</td>
        <td>UC24</td>
        <td>v1-Rationale Criador Desafio</td>
        <td>Posse de itens e riquezas</td>
        <td>US42</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ43</td>
        <td>O usuário deve poder participar de um desafio</td>
        <td>v3-geral-todos<br/>v1-geral-esio</td>
        <td>ETN1<br/>ST8</td>
        <td>CN57</td>
        <td>LX82</td>
        <td>UC28</td>
        <td>v1-Rationale Participante Desafio</td>
        <td>-</td>
        <td>US43</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ44</td>
        <td>O usuário deve poder ver o progresso de outros participantes de um desafio</td>
        <td> </td>
        <td>-</td>
        <td>CN58</td>
        <td>-</td>
        <td>UC27</td>
        <td>v1-Rationale Criador Desafio</td>
        <td>Feedback ao usuário</td>
        <td>US44</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ45</td>
        <td>O usuário criador de um desafio deve poder declarar o vencedor do desafio</td>
        <td> </td>
        <td>-</td>
        <td>CN59</td>
        <td>LX84</td>
        <td>UC25</td>
        <td>v1-Rationale Criador Desafio</td>
        <td>-</td>
        <td>US45</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ46</td>
        <td>O usuário deve poder filtrar desafios por categoria</td>
        <td> </td>
        <td>-</td>
        <td>-</td>
        <td>LX78</td>
        <td>UC26, UC30</td>
        <td>v1-Rationale Participante Desafio</td>
        <td>-</td>
        <td>US46</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ47</td>
        <td>O usuário deve poder buscar desafios por nome</td>
        <td> </td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>UC26, UC29</td>
        <td>v1-Rationale Participante Desafio</td>
        <td>-</td>
        <td>US47</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ48</td>
        <td>O usuário deve poder ver destacados os desafios que criou e participa</td>
        <td> </td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td> </td>
        <td>-</td>
        <td>US48</td>
        </tr>
        <tr>
        <td>E03 - Interação entre usuários</td>
        <td>FE06 - Grupo</td>
        <td>RQ49</td>
        <td>O usuário deve poder acessar os grupos pela sidebar</td>
        <td> </td>
        <td>INT1</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td> </td>
        <td>Menor esforço ao usuário</td>
        <td>US49</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ50</td>
        <td>O usuário deve poder se retirar de um grupo</td>
        <td>v1-grupo-saleh</td>
        <td>ST15</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td> </td>
        <td>-</td>
        <td>US50</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ51</td>
        <td>O usuário deve ser capaz de acessar o chat</td>
        <td>v1-grupo-saleh<br/>v2-geral-feo</td>
        <td>BS1<br/>INT1<br/>ST2<br/>ST12<br/>ST15</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td> </td>
        <td>Interação com outros usuários</td>
        <td>US51</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ52</td>
        <td>O usuário deve ser capaz de convidar o grupo para uma missão</td>
        <td>v3-geral-todos<br/>v2-geral-feo<br/>v2-loja-dutra<br/>v1-inventario-roger<br/>v1-grupo-saleh</td>
        <td>BS1<br/>ETN1<br/>ST1<br/>ST2</td>
        <td>CN21</td>
        <td>LX28</td>
        <td>UC02</td>
        <td> </td>
        <td>-</td>
        <td>US52</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ53</td>
        <td>O usuário deve poder vizualizar o perfil de outros usuários do grupo</td>
        <td>v1-grupo-saleh</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td> </td>
        <td>-</td>
        <td>US53</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ54</td>
        <td>O usuário deve poder acessar o perfil individual dos outros usuários do grupo</td>
        <td>v1-grupo-saleh</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td> </td>
        <td>-</td>
        <td>US54</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ55</td>
        <td>O usuário deve poder cancelar uma missão</td>
        <td>v1-grupo-saleh</td>
        <td>-</td>
        <td>CN24</td>
        <td>-</td>
        <td>-</td>
        <td> </td>
        <td>-</td>
        <td>US55</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ56</td>
        <td>O usuário deve poder criar um grupo</td>
        <td>v3-geral-todos</td>
        <td>BS1<br/>ETN1<br/>INT1<br/>ST1</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td> </td>
        <td>Significado Épico e Chamado</td>
        <td>US56</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>RQ57</td>
        <td>O usuário deve poder chamar meus amigos para o grupo</td>
        <td>v3-geral-todos<br/>v2-geral-feo</td>
        <td>BS1<br/>ETN1<br/>INT1<br/>ST1<br/>ST10<br/>ST12</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td> </td>
        <td>-</td>
        <td>US57</td>
        </tr>
      </tbody></table>
    </div>
  )
}

export default BackwardFrom