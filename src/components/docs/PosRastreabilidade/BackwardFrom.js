import React from 'react'
import Card from '../../UI/Card/Card'
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'
import { HashLink as Link } from 'react-router-hash-link';

const BackwardFrom = () => {

  return (
    <div className='artefact'>
      <div className="content">
        <HeadArtefact style versions={null} rastreability={null}
          title="Backward From" author="Gabriel Albino, Pedro Féo, Rogério Júnior, Saleh Kader e Youssef Muhamad" />
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
          <td rowSpan='20'>E01 - Gerenciamento de tarefas</td>
          <td rowSpan='15'>FE01 - Tarefas</td>
          <td>RQ01</td>
          <td>O usuário deve poder adicionar nova(s) diária(s)</td>
          <td><Link smooth to='/RichPictures#RP10'>v3-geral-todos</Link><br /><Link smooth to='/RichPictures#RP5' >v2-geral-albino</Link><br /><Link smooth to='/RichPictures#RP15'>v1-tarefas-albino</Link><br /><Link smooth to ='/RichPictures#RP10'></Link><Link smooth to='/RichPictures#RP10'>v2-geral-feo</Link><br /><Link smooth to='/RichPictures#RP3'>v1-geral-youssef</Link></td>
          <td><Link smooth to = '/AnaliseProtocolo01'>AP1</Link><br /><Link smooth to ='/AnaliseProtocolo02'>AP2</Link><br /><Link smooth to='/Brainstorm'>BS1</Link><br /><Link smooth to='/Etnografia' >ETN1</Link><br /><Link smooth to = '/Storytelling02#ST3'>ST3</Link></td>
          <td><Link to="/Adicionar Tarefa Diária">CN34</Link></td>
          <td>LX51</td>
          <td>-</td>
          <td><Link to="/iStarTarefasV2">I* Tarefa</Link></td>
          <td>-</td>
          <td>US01</td>
        </tr>
          <tr>
            <td>RQ02</td>
            <td>O usuário deve poder  adicionar novo(s) hábito(s)</td>
            <td><Link smooth to='/RichPictures#RP10'>v3-geral-todos</Link><br /><Link smooth to='/RichPictures#RP5' >v2-geral-albino</Link><br /><Link smooth to='/RichPictures#RP15'>v1-tarefas-albino</Link><br /><Link smooth to ='/RichPictures#RP10'></Link><Link smooth to='/RichPictures#RP10'>v2-geral-feo</Link><br /><Link smooth to='/RichPictures#RP3'>v1-geral-youssef</Link></td>
            <td><Link smooth to = '/AnaliseProtocolo01'>AP1</Link><br /><Link smooth to ='/AnaliseProtocolo02'>AP2</Link><br /><Link smooth to='/Brainstorm'>BS1</Link><br /><Link smooth to='/Etnografia' >ETN1</Link><br /><Link smooth to = '/Storytelling02#ST3'>ST3</Link><br /><Link smooth to='/Storytelling02#ST7'>ST7</Link></td>
            <td><Link to="/Adicionar um Afazer">CN35</Link></td>
            <td>LX56</td>
            <td>-</td>
            <td><Link to="/iStarTarefasV2">I* Tarefa</Link></td>
            <td>-</td>
            <td>US02</td>
          </tr>
          <tr>
            <td>RQ03</td>
            <td>O usuário deve poder adicionar novo(s) afazer(es)</td>
            <td><Link smooth to='/RichPictures#RP10'>v3-geral-todos</Link><br /><Link smooth to='/RichPictures#RP5' >v2-geral-albino</Link><br /><Link smooth to='/RichPictures#RP15'>v1-tarefas-albino</Link><br /><Link smooth to ='/RichPictures#RP10'></Link><Link smooth to='/RichPictures#RP10'>v2-geral-feo</Link><br /><Link smooth to='/RichPictures#RP3'>v1-geral-youssef</Link></td>
            <td><Link smooth to = '/AnaliseProtocolo01'>AP1</Link><br /><Link smooth to ='/AnaliseProtocolo02'>AP2</Link><br /><Link smooth to='/Brainstorm'>BS1</Link><br /><Link smooth to='/Etnografia' >ETN1</Link><br /><Link smooth to ='/Storytelling02#ST8' >ST8</Link></td>
            <td><Link to="/Adicionar um Hábito">CN33</Link></td>
            <td>LX61</td>
            <td>-</td>
            <td><Link to="/iStarTarefasV2">I* Tarefa</Link></td>
            <td>-</td>
            <td>US03</td>
          </tr>
          <tr>
            <td>RQ04</td>
            <td>O usuário deve poder deletar afazer(es)</td>
            <td><Link smooth to='/RichPictures#RP10'>v3-geral-todos</Link><br /><Link smooth to='/RichPictures#RP5' >v2-geral-albino</Link><br /><Link smooth to='/RichPictures#RP15'>v1-tarefas-albino</Link></td>
            <td><Link smooth to='/Storytelling02#ST7'>ST7</Link></td>
            <td>-</td>
            <td>LX63</td>
            <td>-</td>
            <td> </td>
            <td>-</td>
            <td>US04</td>
          </tr>
          <tr>
            <td>RQ05</td>
            <td>O usuário deve poder editar afazer(es)</td>
            <td><Link smooth to='/RichPictures#RP10'>v3-geral-todos</Link><br /><Link smooth to='/RichPictures#RP5' >v2-geral-albino</Link><br /><Link smooth to='/RichPictures#RP15'>v1-tarefas-albino</Link></td>
            <td> <Link smooth to = '/Storytelling02#ST3'>ST3</Link><br /></td>
            <td><Link to="/Editar Afazeres">CN41</Link></td>
            <td>LX62</td>
            <td>-</td>
            <td> </td>
            <td>-</td>
            <td>US05</td>
          </tr>
          <tr>
            <td>RQ06</td>
            <td>O usuário deve poder finalizar uma afazer(es)</td>
            <td><Link smooth to='/RichPictures#RP10'>v3-geral-todos</Link><br /><Link smooth to='/RichPictures#RP5' >v2-geral-albino</Link><br /><Link smooth to='/RichPictures#RP15'>v1-tarefas-albino</Link></td>
            <td><Link smooth to ='/AnaliseProtocolo02'>AP2</Link><br /><Link to='/Introspeccao'>INT1</Link><br /><Link smooth to ='/Storytelling02#ST6'>ST6</Link></td>
            <td><Link to="Completar Afazeres">CN37</Link></td>
            <td>LX64</td>
            <td>-</td>
            <td> </td>
            <td>-</td>
            <td>US06</td>
          </tr>
          <tr>
            <td>RQ07</td>
            <td>O usuário deve poder reorganizar a ordem das suas tarefas</td>
            <td> </td>
            <td><Link smooth to='/Storytelling02#ST7'>ST7</Link></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td> </td>
            <td>-</td>
            <td>US07</td>
          </tr>
          <tr>
            <td>RQ08</td>
            <td>O usuário deve poder adicionar observação(ões) a(s) sua(s) tarefa(s) </td>
            <td><Link smooth to ='/RichPictures#RP10'></Link><Link smooth to='/RichPictures#RP10'>v2-geral-feo</Link></td>
            <td><Link to='/Introspeccao'>INT1</Link></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td> </td>
            <td>-</td>
            <td>US08</td>
          </tr>
          <tr>
            <td>RQ09</td>
            <td>O usuário deve poder adicionar uma data limite para afazer(es)</td>
            <td><Link smooth to='/RichPictures#RP15'>v1-tarefas-albino</Link></td>
            <td><Link smooth to ='/AnaliseProtocolo02'>AP2</Link><br /><Link smooth to='/Brainstorm'>BS1</Link><br /><Link to='/Introspeccao'>INT1</Link><br /><Link smooth to ='/Storytelling02#ST9'>ST9</Link></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td><Link to="/iStarTarefasV2">I* Tarefa</Link></td>
            <td>-</td>
            <td>US09</td>
          </tr>
          <tr>
            <td>RQ10</td>
            <td>O usuário deve poder categorizar a dificuldade da(s) atividade(s)</td>
            <td><Link smooth to='/RichPictures#RP15'>v1-tarefas-albino</Link></td>
            <td><Link smooth to='/Brainstorm'>BS1</Link><br /><Link to='/Introspeccao'>INT1</Link><br /><Link smooth to='/StorytellingST14#ST14'>ST14</Link></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td><Link to="/iStarTarefasV2">I* Tarefa</Link></td>
            <td>-</td>
            <td>US10</td>
          </tr>
          <tr>
            <td>RQ11</td>
            <td>O usuário deve poder adicionar etiquetas na(s) atividade(s) para poder agrupar</td>
            <td> </td>
            <td><Link smooth to ='/AnaliseProtocolo02'>AP2</Link><br />ST1</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td> </td>
            <td>-</td>
            <td>US11</td>
          </tr>
          <tr>
            <td>RQ12</td>
            <td>O usuário deve poder determinar a repetição de uma diária</td>
            <td><Link smooth to='/RichPictures#RP15'>v1-tarefas-albino</Link></td>
            <td><Link smooth to ='/AnaliseProtocolo02'>AP2</Link><br /><Link smooth to='/Etnografia' >ETN1</Link><br /><Link to='/Introspeccao'>INT1</Link><br /><Link smooth to ='/Storytelling02#ST6'>ST6</Link></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td><Link to="/iStarTarefasV2">I* Tarefa</Link></td>
            <td>-</td>
            <td>US12</td>
          </tr>
          <tr>
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
            <td>RQ14</td>
            <td>O usuário deve poder filtrar as atividades pelas etiquetas</td>
            <td> </td>
            <td><Link smooth to ='/AnaliseProtocolo02'>AP2</Link></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td><Link to="/iStarTarefasV2">I* Tarefa</Link></td>
            <td>-</td>
            <td>US14</td>
          </tr>
          <tr>
            <td>RQ15</td>
            <td>O usuário deve poder ao completar tarefas, ganhar recompensas</td>
            <td><Link smooth to='/RichPictures#RP10'>v3-geral-todos</Link><br /><Link smooth to='/RichPictures#RP5' >v2-geral-albino</Link><br /><Link smooth to='/RichPictures#RP15'>v1-tarefas-albino</Link><br /><Link smooth to ='/RichPictures#RP10'></Link><Link smooth to='/RichPictures#RP10'>v2-geral-feo</Link><br /><Link smooth to='/RichPictures#RP3'>v1-geral-youssef</Link></td>
            <td><Link smooth to='/Brainstorm'>BS1</Link><br /><Link smooth to='/Etnografia' >ETN1</Link><br /><Link smooth to='/Etnografia' >ETN1</Link><br /><Link smooth to='/Storytelling01#ST2' >ST2</Link><br /><Link smooth to='/Storytelling02#ST11'>ST11</Link></td>
            <td><Link to="Completa Missão">CN26</Link></td><td>LX65</td>
            <td>UC13</td>
            <td><Link to="/iStarTarefasV2">I* Tarefa</Link></td>
            <td>-</td>
            <td>US15</td>
          </tr>
          <tr>
            <td rowSpan='5'>FE02 - Etiquetas</td>
            <td>RQ16</td>
            <td>O usuário deve poder criar etiqueta(s)</td>
            <td> </td>
            <td><Link to="/AnaliseProtocolo02"><Link smooth to ='/AnaliseProtocolo02'>AP2</Link></Link></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td><Link to="/iStarTarefasV2">I* Tarefa</Link></td>
            <td>-</td>
            <td><Link to="/US/US16">US16</Link></td>
          </tr>
          <tr>
            <td>RQ17</td>
            <td>O usuário deve poder deletar etiqueta(s)</td>
            <td> </td>
            <td><Link to="/AnaliseProtocolo02"><Link smooth to ='/AnaliseProtocolo02'>AP2</Link></Link></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td><Link to="/iStarTarefasV2">I* Tarefa</Link></td>
            <td>-</td>
            <td><Link to="/US/US17">US17</Link></td>
          </tr>
          <tr>
            <td>RQ18</td>
            <td>O usuário deve poder editar etiqueta(s)</td>
            <td> </td>
            <td><Link to="/AnaliseProtocolo02"><Link smooth to ='/AnaliseProtocolo02'>AP2</Link></Link></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td><Link to="/iStarTarefasV2">I* Tarefa</Link></td>
            <td>-</td>
            <td><Link to="/US/US18">US18</Link></td>
          </tr>
          <tr>
            <td>RQ19</td>
            <td>O usuário deve poder reorganizar a ordem das etiquetas</td>
            <td> </td>
            <td><Link to="/AnaliseProtocolo02"><Link smooth to ='/AnaliseProtocolo02'>AP2</Link></Link></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td><Link to="/iStarTarefasV2">I* Tarefa</Link></td>
            <td>-</td>
            <td><Link to="/US/US19">US19</Link></td>
          </tr>
          <tr>
            <td>RQ20</td>
            <td>O usuário deve poder visualizar as atividades finalizadas</td>
            <td> </td>
            <td><Link to="/AnaliseProtocolo02"><Link smooth to ='/AnaliseProtocolo02'>AP2</Link></Link></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td> </td>
            <td>-</td>
            <td><Link to="/US/US20">US20</Link></td>
          </tr>
          <tr>
            <td rowSpan='28' >E02 - Gamificação</td>
            <td rowSpan='14'>FE03 - Inventário</td>
            <td>RQ21</td>
            <td>O usuário deve de ter todos os itens que eu comprar ou ganhar separados em um local.</td>
            <td><Link smooth to='/RichPictures#RP11'>v2-inventario-feo</Link></td>
            <td><Link smooth to='/Brainstorm'>BS1</Link><br /><Link smooth to='/Etnografia' >ETN1</Link></td>
            <td>-</td>
            <td>-</td>
            <td> </td>
            <td><Link smooth to ='/iStarLojaV2'>RationaleUsuarioLoja-v2</Link></td>
            <td>-</td>
            <td><Link smooth to = '/US/US21'>US21</Link></td>
          </tr>
          <tr>
            <td>RQ22</td>
            <td>O usuário deve poder ter seus itens fossem categorizados em equipamentos, estábulo e aba itens em geral.</td>
            <td><Link smooth to='/RichPictures#RP11'>v2-inventario-feo</Link></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td> </td>
            <td><Link smooth to='/iStarLojaV2'>Loja-v2</Link></td>
            <td>-</td>
            <td><Link smooth to = '/US/US22'>US22</Link></td>
          </tr>
          <tr>
            <td>RQ23</td>
            <td>O usuário deve ter a seguinte divisão na aba de categoria para os itens: ovos, poções, comidas e selas, especial e missões</td>
            <td><Link smooth to='/RichPictures#RP11'>v2-inventario-feo</Link></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td> </td>
            <td><Link smooth to='/iStarLojaV2'>Loja-v2</Link></td>
            <td>-</td>
            <td><Link smooth to = '/US/US23'>US23</Link></td>
          </tr>
          <tr>
            <td>RQ24</td>
            <td>O usuário deve poder ter a seguinte divisão na aba de categoria para os equipamentos: cabeça, tiaras, óculos, armaduras, costas, corpo, arma e escudo</td>
            <td><Link smooth to='/RichPictures#RP11'>v2-inventario-feo</Link></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td> </td>
            <td><Link smooth to='/iStarLojaV2'>Loja-v2</Link></td>
            <td>-</td>
            <td><Link smooth to = '/US/US24'>US24</Link></td>
          </tr>
          <tr>
            <td>RQ25</td>
            <td>O usuário deve ter a seguinte divisão na abas de categoria para o estábulo: montaria e mascotes</td>
            <td><Link smooth to='/RichPictures#RP11'>v2-inventario-feo</Link></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td> </td>
            <td><Link smooth to='/iStarLojaV2'>Loja-v2</Link></td>
            <td>-</td>
            <td><Link smooth to = '/US/US25'>US25</Link></td>
          </tr>
          <tr>
            <td>RQ26</td>
            <td>O usuário deve poder filtrar itens</td>
            <td> </td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td> </td>
            <td><Link smooth to='/iStarLojaV2'>Loja-v2</Link></td>
            <td>-</td>
            <td><Link smooth to = '/US/US26'>US26</Link></td>
          </tr>
          <tr>
            <td>RQ27</td>
            <td>O usuário deve poder buscar itens por nome.</td>
            <td> </td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td> </td>
            <td><Link smooth to='/iStarLojaV2'>Loja-v2</Link></td>
            <td>-</td>
            <td><Link smooth to = '/US/US27'>US27</Link></td>
          </tr>
          <tr>
            <td>RQ28</td>
            <td>O usuário deve poder usar as poções para eclodir ovos de pets</td>
            <td><Link smooth to = '/RichPictures#RP13'>v2-loja-dutra</Link><br /><Link smooth to='/RichPictures#RP11'>v2-inventario-feo</Link></td>
            <td>-</td>
            <td><Link to="/Chocar Ovo de Mascote">CN44</Link></td>
            <td>LX66, LX67, LX68</td>
            <td><Link smooth to = '/CasosDeUsoInventário#UC20'>UC20</Link></td>
            <td> </td>
            <td>-</td>
            <td><Link smooth to = '/US/US28'>US28</Link></td>
          </tr>
          <tr>
            <td>RQ29</td>
            <td>O usuário deve poder alimentar mascotes.</td>
            <td><Link smooth to='/RichPictures#RP11'>v2-inventario-feo</Link></td>
            <td>-</td>
            <td><Link to="/Alimentar Mascote">CN45</Link></td>
            <td>LX73</td>
            <td><Link smooth to ='/CasosDeUsoInventário#UC21'>UC21</Link></td>
            <td> </td>
            <td>-</td>
            <td><Link smooth to = '/US/US29'>US29</Link></td>
          </tr>
          <tr>
            <td>RQ30</td>
            <td>Os mascotes devem poder evoluir para montarias</td>
            <td><Link smooth to = '/RichPictures#RP13'>v2-loja-dutra</Link></td>
            <td>-</td>
            <td><Link to="/Alimentar Mascote">CN45</Link></td>
            <td>LX70</td>
            <td><Link smooth to ='/CasosDeUsoInventário#UC21'>UC21</Link></td>
            <td> </td>
            <td>-</td>
            <td><Link smooth to = '/US/US30'>US30</Link></td>
          </tr>
          <tr>
            <td>RQ31</td>
            <td>O usuário deve poder propor missões para o grupo</td>
            <td><Link smooth to='/RichPictures#RP10'>v3-geral-todos</Link><br /><Link smooth to ='/RichPictures#RP10'></Link><Link smooth to ='/RichPictures#RP10'><Link smooth to='/RichPictures#RP10'>v2-geral-feo</Link></Link><br /><Link smooth to = '/RichPictures#RP13'>v2-loja-dutra</Link><br /><Link smooth to ='/RichPictures#RP11V1'>v1-inventario-roger</Link><br /><Link smooth to = '/RichPictures#RP12'>v1-grupo-saleh</Link></td>
            <td><Link smooth to='/Brainstorm'>BS1</Link><br /><Link smooth to='/Storytelling01#ST2' >ST2</Link></td>
            <td><Link to="/Propor Missões">CN46</Link></td>
            <td>LX74, LX28</td>
            <td><Link smooth to='/CasosDeUsoInventário#UC22'>UC22</Link></td>
            <td> </td>
            <td><Link to = '/NFR'>Interação com outros usuários</Link></td>
            <td><Link smooth to = '/US/US31'>US31</Link></td>
          </tr>
          <tr>
            <td>RQ32</td>
            <td>O usuário deve poder equipar e desequipar o avatar com itens</td>
            <td><Link smooth to='/RichPictures#RP10'>v3-geral-todos</Link><br /><Link smooth to='/RichPictures#RP11'>v2-inventario-feo</Link><br /><Link smooth to = '/RichPictures#RP13'>v2-loja-dutra</Link></td>
            <td><Link smooth to='/Etnografia' >ETN1</Link></td>
            <td><Link to="/Equipar Avatar com Item de Mão">CN47</Link>, <Link to="/Equipar Avatar com Capacete">CN48</Link>, <Link to="/Equipar Avatar com Armadura">CN49</Link>, <Link to="/Equipar Avatar com Acessório de Cabeça">CN50</Link>, <Link to="/Equipar Avatar com Óculos">CN51</Link>, <Link to="/Equipar Avatar com Item de Corpo">CN52</Link>, <Link to="/Equipar Avatar com Fundo">CN53</Link></td>
            <td>LX 75, LX76</td>
            <td><Link smooth to ='/CasosDeUsoInventário#UC23' >UC23</Link></td>
            <td> </td>
            <td><Link to = '/NFR'>Posse de itens e riquezas</Link></td>
            <td><Link smooth to = '/US/US32'>US32</Link></td>
          </tr>
          <tr>
            <td>RQ33</td>
            <td>O usuário deve poder adicionar e remover os mascotes do avatar</td>
            <td> </td>
            <td><Link smooth to='/Etnografia' >ETN1</Link></td>
            <td><Link to="/Equipar Avatar com Mascote">CN54</Link></td>
            <td>LX69</td>
            <td><Link smooth to ='/CasosDeUsoInventário#UC23' >UC23</Link></td>
            <td> </td>
            <td><Link to = '/NFR'>Posse de itens e riquezas</Link></td>
            <td><Link smooth to = '/US/US33'>US33</Link></td>
          </tr>
          <tr>
            <td>RQ34</td>
            <td>O usuário deve poder adicionar e remover uma montaria do avatar,</td>
            <td> </td>
            <td><Link smooth to='/Etnografia' >ETN1</Link></td>
            <td><Link to="/Equipar Avatar com Montaria">CN55</Link></td>
            <td>LX70</td>
            <td><Link smooth to ='/CasosDeUsoInventário#UC23' >UC23</Link></td>
            <td> </td>
            <td><Link to = '/NFR'>Posse de itens e riquezas</Link></td>
            <td><Link smooth to = '/US/US34'>US34</Link></td>
          </tr>
          <tr>
            <td rowSpan='7'>FE04 - <br />Loja</td>
            <td>RQ35</td>
            <td>O usuário deve poder comprar equipamento com gemas ou moedas</td>
            <td><Link smooth to='/RichPictures#RP10'>v3-geral-todos</Link><br /><Link smooth to='/RichPictures#RP11'>v2-inventario-feo</Link><br /><Link smooth to='/RichPictures#RP13'>v1-loja-dutra</Link></td>
            <td><Link to='/Brainstorm'>BS1</Link><br /><Link to='/Etnografia'>ETN1</Link><br /><Link to='/Introspeccao'><Link to='/Introspeccao'>INT1</Link></Link></td>
            <td><Link to="/Comprar Missões na Loja">CN06</Link>, <Link to="/Comprar Equipamentos na Loja Sazonal">CN09</Link></td>
            <td>LX10,  LX11, LX76</td>
            <td><Link smooth to='/CasosDeUsoLoja#UC16'>UC16</Link></td>
            <td><Link to='/iStarLojaV3'>RationaleUsuarioLoja-v3</Link></td>
            <td><Link to = '/NFR'>Posse de itens e riquezas</Link></td>
            <td><Link to='/US/US35'>US35</Link></td>
          </tr>
          <tr>
            <td>RQ36</td>
            <td>O usuário deve poder ver o valor dos itens da loja</td>
            <td><Link smooth to='/RichPictures#RP13'>v1-loja-dutra</Link></td>
            <td><Link to='/Etnografia'>ETN1</Link></td>
            <td><Link to="/Comprar Missões na Loja">CN06</Link>, <Link to="/Comprar Equipamentos na Loja Sazonal">CN09</Link></td>
            <td>LX16</td>
            <td><Link smooth to='/CasosDeUsoLoja#UC16'>UC16</Link></td>
            <td> </td>
            <td><Link to = '/NFR'>Feedback ao usuário</Link></td>
            <td><Link to='/US/US36'>US36</Link></td>
          </tr>
          <tr>
            <td>RQ37</td>
            <td>O usuário deve poder adquirir moedas para comprar itens</td>
            <td><Link smooth to='/RichPictures#RP13'>v1-loja-dutra</Link></td>
            <td> </td>
            <td><Link to="/Adquirir Moedas">CN13</Link></td>
            <td>LX11</td>
            <td><Link smooth to='/CasosDeUsoLoja#UC18'>UC18</Link></td>
            <td> </td>
            <td><Link to = '/NFR'>Posse de itens e riquezas</Link></td>
            <td><Link to='/US/US37'>US37</Link></td>
          </tr>
          <tr>
            <td>RQ38</td>
            <td>O usuário deve poder comprar itens com gemas ou moedas</td>
            <td><Link smooth to='/RichPictures#RP10'>v3-geral-todos</Link></td>
            <td><Link to='/Brainstorm'>BS1</Link></td>
            <td><Link to="/Comprar Itens na Loja">CN01</Link>, <Link to="/Comprar Itens com Moedas na Loja">CN02</Link>, <Link to="/Comprar Itens com Gemas na Loja">CN03</Link></td>
            <td>LX10,  LX11</td>
            <td>-</td>
            <td> </td>
            <td><Link to = '/NFR'>Posse de itens e riquezas</Link></td>
            <td><Link to='/US/US38'>US38</Link></td>
          </tr>
          <tr>
            <td>RQ39</td>
            <td>O usuário deve poder comprar missões com gemas ou moedas</td>
            <td><Link smooth to='/RichPictures#RP13'>v1-loja-dutra</Link></td>
            <td><Link to='/Brainstorm'>BS1</Link></td>
            <td><Link to="/Comprar Missões na Loja">CN06</Link>, <Link to="/Comprar Missões na Loja Utilizando Moedas">CN07</Link>, <Link to="/Comprar Missões na Loja Utilizando Gemas">CN08</Link></td>
            <td>LX10, LX11, LX26</td>
            <td><Link smooth to='/CasosDeUsoLoja#UC15'>UC15</Link></td>
            <td> </td>
            <td><Link to = '/NFR'>Posse de itens e riquezas</Link></td>
            <td><Link to='/US/US39'>US39</Link></td>
          </tr>
          <tr>
            <td>RQ40</td>
            <td>O usuário deve poder comprar itens limitados com gemas ou moedas</td>
            <td><Link smooth to='/RichPictures#RP13'>v1-loja-dutra</Link></td>
            <td>-</td>
            <td><Link to="/Comprar Itens na Loja Sazonal">CN10</Link>, <Link to="/Comprar Equipamentos na Loja Sazonal">CN09</Link></td>
            <td>LX13, LX14</td>
            <td><Link smooth to='/CasosDeUsoLoja#UC16'>UC16</Link></td>
            <td> </td>
            <td><Link to = '/NFR'>Posse de itens e riquezas</Link></td>
            <td><Link to='/US/US40'>US40</Link></td>
          </tr>
          <tr>
            <td>RQ41</td>
            <td>O usuário deve poder comprar missões limitadas com gemas ou moedas</td>
            <td><Link smooth to='/RichPictures#RP13'>v1-loja-dutra</Link></td>
            <td>-</td>
            <td><Link to="/Comprar Missões na Loja Sazonal">CN11</Link></td>
            <td>LX13, LX14</td>
            <td><Link smooth to='/CasosDeUsoLoja#UC15'>UC15</Link></td>
            <td> </td>
            <td><Link to = '/NFR'>Posse de itens e riquezas</Link></td>
            <td><Link to='/US/US41'>US41</Link></td>
          </tr>
          <tr>
            <td rowSpan='7'>FE05 - Desafios</td>
            <td>RQ42</td>
            <td>O usuário deve poder criar desafios</td>
            <td><Link smooth to='/RichPictures#RP10'>v3-geral-todos</Link></td>
            <td><Link smooth to='/Etnografia' >ETN1</Link></td>
            <td><Link to="/Criar desafio público">CN56</Link></td>
            <td>LX80</td>
            <td><Link smooth to ='/CasosDeUsoDesafios#UC24'>UC24</Link></td>
            <td><Link smooth to ='/iStarDesafios' >v1-Rationale Criador Desafio</Link></td>
            <td><Link to = '/NFR'>Posse de itens e riquezas</Link></td>
            <td><Link to = '/US/US42' >US42</Link></td>
          </tr>
          <tr>
            <td>RQ43</td>
            <td>O usuário deve poder participar de um desafio</td>
            <td><Link smooth to='/RichPictures#RP10'>v3-geral-todos</Link><br /><Link smooth to='/RichPictures#RP11' >v1-geral-esio</Link></td>
            <td><Link smooth to='/Etnografia' >ETN1</Link><br /><Link smooth to ='/Storytelling02#ST8' >ST8</Link></td>
            <td><Link to="/Entrar em um desafio público">CN57</Link></td>
            <td>LX82</td>
            <td><Link smooth to ='/CasosDeUsoDesafios#UC28' >UC28</Link></td>
            <td><Link smooth to ='/iStarDesafios' >v1-Rationale Participante Desafio</Link></td>
            <td>-</td>
            <td><Link to = '/US/US43' >US43</Link></td>
          </tr>
          <tr>
            <td>RQ44</td>
            <td>O usuário deve poder ver o progresso de outros participantes de um desafio</td>
            <td> </td>
            <td>-</td>
            <td><Link to="/Ver o progresso de outros participantes de um desafio">CN58</Link></td>
            <td>-</td>
            <td><Link smooth to ='/CasosDeUsoDesafios#UC27' >UC27</Link></td>
            <td><Link smooth to ='/iStarDesafios' >v1-Rationale Criador Desafio</Link></td>
            <td><Link to = '/NFR'>Feedback ao usuário</Link></td>
            <td><Link to = '/US/US44' >US44</Link></td>
          </tr>
          <tr>
            <td>RQ45</td>
            <td>O usuário criador de um desafio deve poder declarar o vencedor do desafio</td>
            <td> </td>
            <td>-</td>
            <td><Link to="/Declarar o vencedor de um desafio">CN59</Link></td>
            <td>LX84</td>
            <td><Link smooth to ='/CasosDeUsoDesafios#UC25' >UC25</Link></td>
            <td><Link smooth to ='/iStarDesafios' >v1-Rationale Criador Desafio</Link></td>
            <td>-</td>
            <td><Link to = '/US/US45' >US45</Link></td>
          </tr>
          <tr>
            <td>RQ46</td>
            <td>O usuário deve poder filtrar desafios por categoria</td>
            <td> </td>
            <td>-</td>
            <td>-</td>
            <td>LX78</td>
            <td><Link smooth to = '/CasosDeUsoDesafios#UC26' >UC26</Link>, <Link smooth to = '/CasosDeUsoDesafios#UC30' >UC30</Link></td>
            <td><Link smooth to ='/iStarDesafios' >v1-Rationale Participante Desafio</Link></td>
            <td>-</td>
            <td><Link to = '/US/US46' >US46</Link></td>
          </tr>
          <tr>
            <td>RQ47</td>
            <td>O usuário deve poder buscar desafios por nome</td>
            <td> </td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td><Link smooth to = '/CasosDeUsoDesafios#UC26' >UC26</Link>, <Link smooth to = '/CasosDeUsoDesafios#UC29' >UC29</Link></td>
            <td><Link smooth to ='/iStarDesafios' >v1-Rationale Participante Desafio</Link></td>
            <td>-</td>
            <td><Link to = '/US/US47' >US47</Link></td>
          </tr>
          <tr>
            <td>RQ48</td>
            <td>O usuário deve poder ver destacados os desafios que criou e participa</td>
            <td> </td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td> </td>
            <td>-</td>
            <td><Link to = '/US/US48' >US48</Link></td>
          </tr>
          <tr>
            <td rowSpan='9' >E03 - Interação entre usuários</td>
            <td rowSpan='9'>FE06 - Grupo</td>
            <td>RQ49</td>
            <td>O usuário deve poder acessar os grupos pela sidebar</td>
            <td> </td>
            <td><Link to='/Introspeccao'>INT1</Link></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td> </td>
            <td><Link to='/NFR' >Menor esforço ao usuário</Link></td>
            <td>US49</td>
          </tr>
          <tr>
            <td>RQ50</td>
            <td>O usuário deve poder se retirar de um grupo</td>
            <td><Link smooth to = '/RichPictures#RP12'>v1-grupo-saleh</Link></td>
            <td><Link smooth to='/Storytelling02#St15'>ST15</Link></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td> </td>
            <td>-</td>
            <td>US50</td>
          </tr>
          <tr>
            <td>RQ51</td>
            <td>O usuário deve ser capaz de acessar o chat</td>
            <td><Link smooth to = '/RichPictures#RP12'>v1-grupo-saleh</Link><br /><Link smooth to ='/RichPictures#RP10'></Link><Link smooth to='/RichPictures#RP10'>v2-geral-feo</Link></td>
            <td><Link smooth to='/Brainstorm'>BS1</Link><br /><Link to='/Introspeccao'>INT1</Link><br /><Link smooth to='/Storytelling01#ST2' >ST2</Link><br /><Link smooth to='/Storytelling02#ST12'>ST12</Link><br /><Link smooth to='/Storytelling02#St15'>ST15</Link></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td> </td>
            <td><Link to = '/NFR'>Interação com outros usuários</Link></td>
            <td>US51</td>
          </tr>
          <tr>
            <td>RQ52</td>
            <td>O usuário deve ser capaz de convidar o grupo para uma missão</td>
            <td><Link smooth to='/RichPictures#RP10'>v3-geral-todos</Link><br /><Link smooth to ='/RichPictures#RP10'></Link><Link smooth to='/RichPictures#RP10'>v2-geral-feo</Link><br /><Link smooth to = '/RichPictures#RP13'>v2-loja-dutra</Link><br /><Link smooth to ='/RichPictures#RP11V1'>v1-inventario-roger</Link><br /><Link smooth to = '/RichPictures#RP12'>v1-grupo-saleh</Link></td>
            <td><Link smooth to='/Brainstorm'>BS1</Link><br /><Link smooth to='/Etnografia' >ETN1</Link><br /><Link smooth to ='/Storytelling01'>ST1</Link><br /><Link smooth to='/Storytelling01#ST2' >ST2</Link></td>
            <td>CN21</td>
            <td>LX28</td>
            <td><Link smooth to='/CasosDeUsoGamificação#UC02'>UC02</Link></td>
            <td> </td>
            <td>-</td>
            <td>US52</td>
          </tr>
          <tr>
            <td>RQ53</td>
            <td>O usuário deve poder vizualizar o perfil de outros usuários do grupo</td>
            <td><Link smooth to = '/RichPictures#RP12'>v1-grupo-saleh</Link></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td> </td>
            <td>-</td>
            <td>US53</td>
          </tr>
          <tr>
            <td>RQ54</td>
            <td>O usuário deve poder acessar o perfil individual dos outros usuários do grupo</td>
            <td><Link smooth to = '/RichPictures#RP12'>v1-grupo-saleh</Link></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td> </td>
            <td>-</td>
            <td>US54</td>
          </tr>
          <tr>
            <td>RQ55</td>
            <td>O usuário deve poder cancelar uma missão</td>
            <td><Link smooth to = '/RichPictures#RP12'>v1-grupo-saleh</Link></td>
            <td>-</td>
            <td>CN24</td>
            <td>-</td>
            <td>-</td>
            <td> </td>
            <td>-</td>
            <td>US55</td>
          </tr>
          <tr>
            <td>RQ56</td>
            <td>O usuário deve poder criar um grupo</td>
            <td><Link smooth to='/RichPictures#RP10'>v3-geral-todos</Link></td>
            <td><Link smooth to='/Brainstorm'>BS1</Link><br /><Link smooth to='/Etnografia' >ETN1</Link><br /><Link to='/Introspeccao'>INT1</Link><br /><Link smooth to ='/Storytelling01'>ST1</Link></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td> </td>
            <td>Significado Épico e Chamado</td>
            <td>US56</td>
          </tr>
          <tr>
            <td>RQ57</td>
            <td>O usuário deve poder chamar meus amigos para o grupo</td>
            <td><Link smooth to='/RichPictures#RP10'>v3-geral-todos</Link><br /><Link smooth to ='/RichPictures#RP10'></Link><Link smooth to='/RichPictures#RP10'>v2-geral-feo</Link></td>
            <td><Link smooth to='/Brainstorm'>BS1</Link><br /><Link smooth to='/Etnografia' >ETN1</Link><br /><Link to='/Introspeccao'>INT1</Link><br /><Link smooth to='/Sorytelling01'>ST1</Link><br /><Link smooth to='/Storytelling02#ST10'>ST10</Link><br /><Link smooth to='/Storytelling02#ST12'>ST12</Link></td>
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