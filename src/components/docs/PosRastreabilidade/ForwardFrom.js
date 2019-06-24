import React from 'react'
import Card from '../../UI/Card/Card'
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'
import { Link } from 'react-router-dom'

const ForwardFrom = () => {

  return (
    <div className='content artefact'>
      <HeadArtefact versions={ null } rastreability={ null }
                    title="Forward From" author="Rogério Júnior"/>
    
      <Card style = { {padding: "1rem"} }>
        <table class="table table-bordered table-hover table-condensed">
            <thead><tr><th title="Field #1">Épico</th>
            <th title="Field #2">Feature</th>
            <th title="Field #3">ID</th>
            <th title="Field #4">Descrição</th>
            <th title="Field #5">História de Usuário</th>
            <th title="Field #6">História de Aceitação</th>
            <th title="Field #7">Critérios de Pronto</th>
            <th title="Field #9"> Códigos Backend</th>
            <th title="Field #10">Códigos Frontend</th>
            <th title="Field #11">Telas</th>
            </tr></thead>
            <tbody>
            <tr>
            <td rowspan = "20">E01 - Gerenciamento de tarefas</td>
            <td rowspan = "15">FE01 - Tarefas</td>
            <td>RQ01</td>
            <td>O usuário deve poder adicionar nova(s) diária(s)</td>
            <td><Link to='/gif/us01'>US01</Link></td>
            <td><Link to='/gif/us01'>US01</Link></td>
            <td><Link to='/gif/us01'>US01</Link></td>
            <td rowspan = "15"><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/server/controllers/api-v3/tasks.js">CB01</a></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/tasks/taskModal.vue">CF01</a></td>
            <td><Link to='/gif/us01'>US01</Link></td>
            </tr>
            <tr>
            <td>RQ02</td>
            <td>O usuário deve poder adicionar novo(s) hábito(s)</td>
            <td><Link to='/gif/us02'>US02</Link></td>
            <td><Link to='/gif/us02'>US02</Link></td>
            <td><Link to='/gif/us02'>US02</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/tasks/taskModal.vue">CF02</a></td>
            <td><Link to='/gif/us02'>US02</Link></td>
            </tr>
            <tr>
            <td>RQ03</td>
            <td>O usuário deve poder adicionar novo(s) afazer(es)</td>
            <td><Link to='/gif/us03'>US03</Link></td>
            <td><Link to='/gif/us03'>US03</Link></td>
            <td><Link to='/gif/us03'>US03</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/tasks/taskModal.vue">CF03</a></td>
            <td><Link to='/gif/us03'>US03</Link></td>
            </tr>
            <tr>
            <td>RQ04</td>
            <td>O usuário deve poder deletar afazer(es)</td>
            <td><Link to='/gif/us04'>US04</Link></td>
            <td><Link to='/gif/us04'>US04</Link></td>
            <td><Link to='/gif/us04'>US04</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/tasks/task.vue">CF04</a></td>
            <td><Link to='/gif/us04'>US04</Link></td>
            </tr>
            <tr>
            <td>RQ05</td>
            <td>O usuário deve poder editar afazer(es)</td>
            <td><Link to='/gif/us05'>US05</Link></td>
            <td><Link to='/gif/us05'>US05</Link></td>
            <td><Link to='/gif/us05'>US05</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/tasks/taskModal.vue">CF05</a></td>
            <td><Link to='/gif/us05'>US05</Link></td>
            </tr>
            <tr>
            <td>RQ06</td>
            <td>O usuário deve poder finalizar uma afazer(es)</td>
            <td><Link to='/gif/us06'>US06</Link></td>
            <td><Link to='/gif/us06'>US06</Link></td>
            <td><Link to='/gif/us06'>US06</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/tasks/task.vue">CF06</a></td>
            <td><Link to='/gif/us06'>US06</Link></td>
            </tr>
            <tr>
            <td>RQ07</td>
            <td>O usuário deve poder reorganizar a ordem das suas tarefas</td>
            <td><Link to='/gif/us07'>US07</Link></td>
            <td><Link to='/gif/us07'>US07</Link></td>
            <td><Link to='/gif/us07'>US07</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/tasks/task.vue">CF07</a></td>
            <td><Link to='/gif/us07'>US07</Link></td>
            </tr>
            <tr>
            <td>RQ08</td>
            <td>O usuário deve poder adicionar observação(ões) a(s) sua(s) tarefa(s) </td>
            <td><Link to='/gif/us08'>US08</Link></td>
            <td><Link to='/gif/us08'>US08</Link></td>
            <td><Link to='/gif/us08'>US08</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/tasks/column.vue">CF08</a></td>
            <td><Link to='/gif/us08'>US08</Link></td>
            </tr>
            <tr>
            <td>RQ09</td>
            <td>O usuário deve poder adicionar uma data limite para afazer(es)</td>
            <td><Link to='/gif/us09'>US09</Link></td>
            <td><Link to='/gif/us09'>US09</Link></td>
            <td><Link to='/gif/us09'>US09</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/tasks/taskModal.vue">CF09</a></td>
            <td><Link to='/gif/us09'>US09</Link></td>
            </tr>
            <tr>
            <td>RQ10</td>
            <td>O usuário deve poder categorizar a dificuldade da(s) atividade(s)</td>
            <td><Link to='/gif/us10'>US10</Link></td>
            <td><Link to='/gif/us10'>US10</Link></td>
            <td><Link to='/gif/us10'>US10</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/tasks/taskModal.vue">CF10</a></td>
            <td><Link to='/gif/us10'>US10</Link></td>
            </tr>
            <tr>
            <td>RQ11</td>
            <td>O usuário deve poder adicionar etiquetas na(s) atividade(s) para poder agrupar</td>
            <td><Link to='/gif/us11'>US11</Link></td>
            <td><Link to='/gif/us11'>US11</Link></td>
            <td><Link to='/gif/us11'>US11</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/tasks/taskModal.vue">CF11</a></td>
            <td><Link to='/gif/us11'>US11</Link></td>
            </tr>
            <tr>
            <td>RQ12</td>
            <td>O usuário deve poder determinar a repetição de uma diária</td>
            <td><Link to='/gif/us12'>US12</Link></td>
            <td><Link to='/gif/us12'>US12</Link></td>
            <td><Link to='/gif/us12'>US12</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/tasks/taskModal.vue">CF12</a></td>
            <td><Link to='/gif/us12'>US12</Link></td>
            </tr>
            <tr>
            <td>RQ13</td>
            <td>O usuário deve poder pesquisar atividade(s)</td>
            <td><Link to='/gif/us13'>US13</Link></td>
            <td><Link to='/gif/us13'>US13</Link></td>
            <td><Link to='/gif/us13'>US13</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/tasks/taskModal.vue">CF13</a></td>
            <td><Link to='/gif/us13'>US13</Link></td>
            </tr>
            <tr>
            <td>RQ14</td>
            <td>O usuário deve poder filtrar as atividades pelas etiquetas</td>
            <td><Link to='/gif/us14'>US14</Link></td>
            <td><Link to='/gif/us14'>US14</Link></td>
            <td><Link to='/gif/us14'>US14</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/tasks/user.vue">CF14</a></td>
            <td><Link to='/gif/us14'>US14</Link></td>
            </tr>
            <tr>
            <td>RQ15</td>
            <td>O usuário deve poder ao completar tarefas, ganhar recompensas</td>
            <td><Link to='/gif/us15'>US15</Link></td>
            <td><Link to='/gif/us15'>US15</Link></td>
            <td><Link to='/gif/us15'>US15</Link></td>
            <td>NF</td>
            <td><Link to='/gif/us15'>US15</Link></td>
            </tr>
            <tr>
            <td rowspan = "5">FE02 - Etiquetas</td>
            <td>RQ16</td>
            <td>O usuário deve poder criar etiqueta(s)</td>
            <td><Link to='/gif/us16'>US16</Link></td>
            <td><Link to='/gif/us16'>US16</Link></td>
            <td><Link to='/gif/us16'>US16</Link></td>
            <td rowspan = "5"><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/server/controllers/api-v3/tags.js">CB02</a></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/tasks/user.vue">CF16</a></td>
            <td><Link to='/gif/us16'>US16</Link></td>
            </tr>
            <tr>
            <td>RQ17</td>
            <td>O usuário deve poder deletar etiqueta(s)</td>
            <td><Link to='/gif/us17'>US17</Link></td>
            <td><Link to='/gif/us17'>US17</Link></td>
            <td><Link to='/gif/us17'>US17</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/tasks/user.vue">CF17</a></td>
            <td><Link to='/gif/us17'>US17</Link></td>
            </tr>
            <tr>
            <td>RQ18</td>
            <td>O usuário deve poder editar etiqueta(s)</td>
            <td><Link to='/gif/us18'>US18</Link></td>
            <td><Link to='/gif/us18'>US18</Link></td>
            <td><Link to='/gif/us18'>US18</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/tasks/user.vue">CF18</a></td>
            <td><Link to='/gif/us18'>US18</Link></td>
            </tr>
            <tr>
            <td>RQ19</td>
            <td>O usuário deve poder reorganizar a ordem das etiquetas</td>
            <td><Link to='/gif/us19'>US19</Link></td>
            <td><Link to='/gif/us19'>US19</Link></td>
            <td><Link to='/gif/us19'>US19</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/tasks/user.vue">CF19</a></td>
            <td><Link to='/gif/us19'>US19</Link></td>
            </tr>
            <tr>
            <td>RQ20</td>
            <td>O usuário deve poder visualizar as atividades finalizadas</td>
            <td><Link to='/gif/us20'>US20</Link></td>
            <td><Link to='/gif/us20'>US20</Link></td>
            <td><Link to='/gif/us20'>US20</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/tasks/column.vue">CF20</a></td>
            <td><Link to='/gif/us20'>US20</Link></td>
            </tr>
            <tr>
            <td rowspan = "28">E02 - Gamificação</td>
            <td rowspan = "14">FE03 - Inventário</td>
            <td>RQ21</td>
            <td>O usuário deve ter todos os itens que eu comprar ou ganhar separados em um local.</td>
            <td><Link to='/gif/us21'>US21</Link></td>
            <td><Link to='/gif/us21'>US21</Link></td>
            <td><Link to='/gif/us21'>US21</Link></td>
            <td rowspan = "14"><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/server/controllers/api-v3/user.js">CB03</a></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/inventory/items/index.vue">CF21</a></td>
            <td><Link to='/gif/us21'>US21</Link></td>
            </tr>
            <tr>
            <td>RQ22</td>
            <td>O usuário deve poder ter seus itens fossem categorizados em equipamentos, estábulo e aba itens em geral.</td>
            <td><Link to='/gif/us22'>US22</Link></td>
            <td><Link to='/gif/us22'>US22</Link></td>
            <td><Link to='/gif/us22'>US22</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/inventory/index.vue">CF22</a></td>
            <td><Link to='/gif/us22'>US22</Link></td>
            </tr>
            <tr>
            <td>RQ23</td>
            <td>O usuário deve ter a seguinte divisão na aba de categoria para os itens: ovos, poções, comidas e selas, especial e missões</td>
            <td><Link to='/gif/us23'>US23</Link></td>
            <td><Link to='/gif/us23'>US23</Link></td>
            <td><Link to='/gif/us23'>US23</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/inventory/items/index.vue">CF23</a></td>
            <td><Link to='/gif/us23'>US23</Link></td>
            </tr>
            <tr>
            <td>RQ24</td>
            <td>O usuário deve poder ter a seguinte divisão na aba de categoria para os equipamentos: cabeça, tiaras, óculos, armaduras, costas, corpo, arma e escudo</td>
            <td><Link to='/gif/us24'>US24</Link></td>
            <td><Link to='/gif/us24'>US24</Link></td>
            <td><Link to='/gif/us24'>US24</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/inventory/equipment/index.vue">CF24</a></td>
            <td><Link to='/gif/us24'>US24</Link></td>
            </tr>
            <tr>
            <td>RQ25</td>
            <td>O usuário deve ter a seguinte divisão na abas de categoria para o estábulo: montaria e mascotes</td>
            <td><Link to='/gif/us25'>US25</Link></td>
            <td><Link to='/gif/us25'>US25</Link></td>
            <td><Link to='/gif/us25'>US25</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/inventory/stable/index.vue">CF25</a></td>
            <td><Link to='/gif/us25'>US25</Link></td>
            </tr>
            <tr>
            <td>RQ26</td>
            <td>O usuário deve poder filtrar itens</td>
            <td><Link to='/gif/us26'>US26</Link></td>
            <td><Link to='/gif/us26'>US26</Link></td>
            <td><Link to='/gif/us26'>US26</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/inventory/items/index.vue">CF26</a></td>
            <td><Link to='/gif/us26'>US26</Link></td>
            </tr>
            <tr>
            <td>RQ27</td>
            <td>O usuário deve poder buscar itens por nome.</td>
            <td><Link to='/gif/us27'>US27</Link></td>
            <td><Link to='/gif/us27'>US27</Link></td>
            <td><Link to='/gif/us27'>US27</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/inventory/items/index.vue">CF27</a></td>
            <td><Link to='/gif/us27'>US27</Link></td>
            </tr>
            <tr>
            <td>RQ28</td>
            <td>O usuário deve poder usar as poções para eclodir ovos de pets</td>
            <td><Link to='/gif/us28'>US28</Link></td>
            <td><Link to='/gif/us28'>US28</Link></td>
            <td><Link to='/gif/us28'>US28</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/inventory/items/index.vue">CF28</a></td>
            <td><Link to='/gif/us28'>US28</Link></td>
            </tr>
            <tr>
            <td>RQ29</td>
            <td>O usuário deve poder alimentar mascotes.</td>
            <td><Link to='/gif/us29'>US29</Link></td>
            <td><Link to='/gif/us29'>US29</Link></td>
            <td><Link to='/gif/us29'>US29</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/inventory/items/index.vue">CF29</a></td>
            <td><Link to='/gif/us29'>US29</Link></td>
            </tr>
            <tr>
            <td>RQ30</td>
            <td>Os mascotes devem poder evoluir para montarias</td>
            <td><Link to='/gif/us30'>US30</Link></td>
            <td><Link to='/gif/us30'>US30</Link></td>
            <td><Link to='/gif/us30'>US30</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/inventory/items/index.vue">CF30</a></td>
            <td><Link to='/gif/us30'>US30</Link></td>
            </tr>
            <tr>
            <td>RQ31</td>
            <td>O usuário deve poder propor missões para o grupo</td>
            <td><Link to='/gif/us31'>US31</Link></td>
            <td><Link to='/gif/us31'>US31</Link></td>
            <td><Link to='/gif/us31'>US31</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/groups/questDetailsModal.vue">CF31</a></td>
            <td><Link to='/gif/us31'>US31</Link></td>
            </tr>
            <tr>
            <td>RQ32</td>
            <td>O usuário deve poder equipar e desequipar o avatar com itens</td>
            <td><Link to='/gif/us32'>US32</Link></td>
            <td><Link to='/gif/us32'>US32</Link></td>
            <td><Link to='/gif/us32'>US32</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/inventory/equipment/equipGearModal.vue">CF32</a></td>
            <td><Link to='/gif/us32'>US32</Link></td>
            </tr>
            <tr>
            <td>RQ33</td>
            <td>O usuário deve poder adicionar e remover os mascotes do avatar</td>
            <td><Link to='/gif/us33'>US33</Link></td>
            <td><Link to='/gif/us33'>US33</Link></td>
            <td><Link to='/gif/us33'>US33</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/inventory/stable/mountItem.vue">CF33</a></td>
            <td><Link to='/gif/us33'>US33</Link></td>
            </tr>
            <tr>
            <td>RQ34</td>
            <td>O usuário deve poder adicionar e remover uma montaria do avatar,</td>
            <td><Link to='/gif/us34'>US34</Link></td>
            <td><Link to='/gif/us34'>US34</Link></td>
            <td><Link to='/gif/us34'>US34</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/inventory/stable/petItem.vue">CF34</a></td>
            <td><Link to='/gif/us34'>US34</Link></td>
            </tr>
            <tr>
            <td rowspan = "7">FE04 - Loja</td>
            <td>RQ35</td>
            <td>O usuário deve poder comprar equipamento com gemas ou moedas</td>
            <td><Link to='/gif/us35'>US35</Link></td>
            <td><Link to='/gif/us35'>US35</Link></td>
            <td><Link to='/gif/us35'>US35</Link></td>
            <td rowspan = "7">NF</td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/shops/market/equipmentSection.vue">CF35</a></td>
            <td><Link to='/gif/us35'>US35</Link></td>
            </tr>
            <tr>
            <td>RQ36</td>
            <td>O usuário deve poder ver o valor dos itens da loja</td>
            <td><Link to='/gif/us36'>US36</Link></td>
            <td><Link to='/gif/us36'>US36</Link></td>
            <td><Link to='/gif/us36'>US36</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/shops/buyModal.vue">CF36</a></td>
            <td><Link to='/gif/us36'>US36</Link></td>
            </tr>
            <tr>
            <td>RQ37</td>
            <td>O usuário deve poder adquirir moedas para comprar itens</td>
            <td><Link to='/gif/us37'>US37</Link></td>
            <td><Link to='/gif/us37'>US37</Link></td>
            <td><Link to='/gif/us37'>US37</Link></td>
            <td>NF</td>
            <td><Link to='/gif/us37'>US37</Link></td>
            </tr>
            <tr>
            <td>RQ38</td>
            <td>O usuário deve poder comprar itens com gemas ou moedas</td>
            <td><Link to='/gif/us38'>US38</Link></td>
            <td><Link to='/gif/us38'>US38</Link></td>
            <td><Link to='/gif/us38'>US38</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/shops/shopItem.vue">CF38</a></td>
            <td><Link to='/gif/us38'>US38</Link></td>
            </tr>
            <tr>
            <td>RQ39</td>
            <td>O usuário deve poder comprar missões com gemas ou moedas</td>
            <td><Link to='/gif/us39'>US39</Link></td>
            <td><Link to='/gif/us39'>US39</Link></td>
            <td><Link to='/gif/us39'>US39</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/shops/quests/buyQuestModal.vue">CF39</a></td>
            <td><Link to='/gif/us39'>US39</Link></td>
            </tr>
            <tr>
            <td>RQ40</td>
            <td>O usuário deve poder comprar itens limitados com gemas ou moedas</td>
            <td><Link to='/gif/us40'>US40</Link></td>
            <td><Link to='/gif/us40'>US40</Link></td>
            <td><Link to='/gif/us40'>US40</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/shops/shopItem.vue">CF40</a></td>
            <td><Link to='/gif/us40'>US40</Link></td>
            </tr>
            <tr>
            <td>RQ41</td>
            <td>O usuário deve poder comprar missões limitadas com gemas ou moedas</td>
            <td><Link to='/gif/us41'>US41</Link></td>
            <td><Link to='/gif/us41'>US41</Link></td>
            <td><Link to='/gif/us41'>US41</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/shops/seasonal/index.vue">CF41</a></td>
            <td><Link to='/gif/us41'>US41</Link></td>
            </tr>
            <tr>
            <td rowspan = "7">FE05 - Desafios</td>
            <td>RQ42</td>
            <td>O usuário deve poder criar desafios</td>
            <td><Link to='/gif/us42'>US42</Link></td>
            <td><Link to='/gif/us42'>US42</Link></td>
            <td><Link to='/gif/us42'>US42</Link></td>
            <td rowspan = "7"><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/server/controllers/api-v3/challenges.js">CB04</a></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/challenges/challengeModal.vue">CF42</a></td>
            <td><Link to='/gif/us42'>US42</Link></td>
            </tr>
            <tr>
            <td>RQ43</td>
            <td>O usuário deve poder participar de um desafio</td>
            <td><Link to='/gif/us43'>US43</Link></td>
            <td><Link to='/gif/us43'>US43</Link></td>
            <td><Link to='/gif/us43'>US43</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/challenges/challengeDetail.vue">CF43</a></td>
            <td><Link to='/gif/us43'>US43</Link></td>
            </tr>
            <tr>
            <td>RQ44</td>
            <td>O usuário deve poder ver o progresso de outros participantes de um desafio</td>
            <td><Link to='/gif/us44'>US44</Link></td>
            <td><Link to='/gif/us44'>US44</Link></td>
            <td><Link to='/gif/us44'>US44</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/challenges/challengeMemberProgressModal.vue">CF44</a></td>
            <td><Link to='/gif/us44'>US44</Link></td>
            </tr>
            <tr>
            <td>RQ45</td>
            <td>O usuário criador de um desafio deve poder declarar o vencedor do desafio</td>
            <td><Link to='/gif/us45'>US45</Link></td>
            <td><Link to='/gif/us45'>US45</Link></td>
            <td><Link to='/gif/us45'>US45</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/challenges/challengeItem.vue">CF45</a></td>
            <td><Link to='/gif/us45'>US45</Link></td>
            </tr>
            <tr>
            <td>RQ46</td>
            <td>O usuário deve poder filtrar desafios por categoria</td>
            <td><Link to='/gif/us46'>US46</Link></td>
            <td><Link to='/gif/us46'>US46</Link></td>
            <td><Link to='/gif/us46'>US46</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/challenges/findChallenges.vue">CF46</a></td>
            <td><Link to='/gif/us46'>US46</Link></td>
            </tr>
            <tr>
            <td>RQ47</td>
            <td>O usuário deve poder buscar desafios por nome</td>
            <td><Link to='/gif/us47'>US47</Link></td>
            <td><Link to='/gif/us47'>US47</Link></td>
            <td><Link to='/gif/us47'>US47</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/challenges/findChallenges.vue">CF47</a></td>
            <td><Link to='/gif/us47'>US47</Link></td>
            </tr>
            <tr>
            <td>RQ48</td>
            <td>O usuário deve poder ver destacados os desafios que criou e participa</td>
            <td><Link to='/gif/us48'>US48</Link></td>
            <td><Link to='/gif/us48'>US48</Link></td>
            <td><Link to='/gif/us48'>US48</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/challenges/myChallenges.vue">CF48</a></td>
            <td><Link to='/gif/us48'>US48</Link></td>
            </tr>
            <tr>
            <td rowspan = "9">E03 - Interação entre usuários</td>
            <td rowspan = "9">FE06 - Grupo</td>
            <td>RQ49</td>
            <td>O usuário deve poder acessar os grupos pela sidebar</td>
            <td><Link to='/gif/us49'>US49</Link></td>
            <td><Link to='/gif/us49'>US49</Link></td>
            <td><Link to='/gif/us49'>US49</Link></td>
            <td rowspan = "9"><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/server/controllers/api-v3/groups.js">CB05</a></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/groups/sidebar.vue">CF49</a></td>
            <td><Link to='/gif/us49'>US49</Link></td>
            </tr>
            <tr>
            <td>RQ50</td>
            <td>O usuário deve poder se retirar de um grupo</td>
            <td><Link to='/gif/us50'>US50</Link></td>
            <td><Link to='/gif/us50'>US50</Link></td>
            <td><Link to='/gif/us50'>US50</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/groups/group.vue">CF50</a></td>
            <td><Link to='/gif/us50'>US50</Link></td>
            </tr>
            <tr>
            <td>RQ51</td>
            <td>O usuário deve ser capaz de acessar o chat</td>
            <td><Link to='/gif/us51'>US51</Link></td>
            <td><Link to='/gif/us51'>US51</Link></td>
            <td><Link to='/gif/us51'>US51</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/groups/chat.vue">CF51</a></td>
            <td><Link to='/gif/us51'>US51</Link></td>
            </tr>
            <tr>
            <td>RQ52</td>
            <td>O usuário deve ser capaz de convidar o grupo para uma missão</td>
            <td><Link to='/gif/us52'>US52</Link></td>
            <td><Link to='/gif/us52'>US52</Link></td>
            <td><Link to='/gif/us52'>US52</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/groups/startQuestModal.vue">CF52</a></td>
            <td><Link to='/gif/us52'>US52</Link></td>
            </tr>
            <tr>
            <td>RQ53</td>
            <td>O usuário deve poder vizualizar o perfil de outros usuários do grupo</td>
            <td><Link to='/gif/us53'>US53</Link></td>
            <td><Link to='/gif/us53'>US53</Link></td>
            <td><Link to='/gif/us53'>US53</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/groups/participantListModal.vue">CF53</a></td>
            <td><Link to='/gif/us53'>US53</Link></td>
            </tr>
            <tr>
            <td>RQ54</td>
            <td>O usuário deve poder acessar o perfil individual dos outros usuários do grupo</td>
            <td><Link to='/gif/us54'>US54</Link></td>
            <td><Link to='/gif/us54'>US54</Link></td>
            <td><Link to='/gif/us54'>US54</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/groups/membersModal.vue">CF54</a></td>
            <td><Link to='/gif/us54'>US54</Link></td>
            </tr>
            <tr>
            <td>RQ55</td>
            <td>O usuário deve poder cancelar uma missão</td>
            <td><Link to='/gif/us55'>US55</Link></td>
            <td><Link to='/gif/us55'>US55</Link></td>
            <td><Link to='/gif/us55'>US55</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/groups/questDetailsModal.vue">CF55</a></td>
            <td><Link to='/gif/us55'>US55</Link></td>
            </tr>
            <tr>
            <td>RQ56</td>
            <td>O usuário deve poder criar um grupo</td>
            <td><Link to='/gif/us56'>US56</Link></td>
            <td><Link to='/gif/us56'>US56</Link></td>
            <td><Link to='/gif/us56'>US56</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/groups/newPartyModal.pug">CF56</a></td>
            <td><Link to='/gif/us56'>US56</Link></td>
            </tr>
            <tr>
            <td>RQ57</td>
            <td>O usuário deve poder chamar amigos para o grupo</td>
            <td><Link to='/gif/us57'>US57</Link></td>
            <td><Link to='/gif/us57'>US57</Link></td>
            <td><Link to='/gif/us57'>US57</Link></td>
            <td><a href = "https://github.com/HabitRPG/habitica/blob/develop/website/client/components/groups/inviteModal.vue">CF57</a></td>
            <td><Link to='/gif/us57'>US57</Link></td>
            </tr>
      </tbody></table>
      </Card>
    </div>
  )
}

export default ForwardFrom