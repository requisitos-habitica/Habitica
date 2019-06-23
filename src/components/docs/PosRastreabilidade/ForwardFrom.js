import React from 'react'
import Card from '../../UI/Card/Card'
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'

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
            <th title="Field #8">Código</th>
            <th title="Field #9"> Códigos Backend</th>
            <th title="Field #10">Códigos Frontend</th>
            <th title="Field #11">Telas</th>
            </tr></thead>
            <tbody>
            <tr>
            <td> </td>
            <td>E01 - Gerenciamento de tarefas</td>
            <td>FE01 - Tarefas</td>
            <td>RQ01</td>
            <td>O usuário deve poder adicionar nova(s) diária(s)</td>
            <td>Eu, como usuário do sistema, desejo poder adicionar uma nova diária, para que eu possa ter controle sobre minhas metas diárias</td>
            <td>- Deve haver um botão de adicionar tarefa<br/>- O usuário deve ser capaz de decidir qual tipo de tarefa ele quer criar</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td>BC01</td>
            <td>CF1</td>
            <td>US01</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ02</td>
            <td>O usuário deve poder adicionar novo(s) hábito(s)</td>
            <td>Eu, como usuário do sistema, desejo poder adicionar um novo hábito para que eu possa controlá-los</td>
            <td>- Deve haver um botão de adicionar tarefa<br/>- O usuário deve ser capaz de decidir qual tipo de tarefa ele quer criar</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF2</td>
            <td>US02</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ03</td>
            <td>O usuário deve poder adicionar novo(s) afazer(es)</td>
            <td>Eu, como usuário do sistema, desejo poder adicionar um novo afazer para que eu possa controlar o que falta para eu cumprir minhas obrigações</td>
            <td>- Deve haver um botão de adicionar tarefa<br/>- O usuário deve ser capaz de decidir qual tipo de tarefa ele quer criar</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF3</td>
            <td>US03</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ04</td>
            <td>O usuário deve poder deletar afazer(es)</td>
            <td>Eu, como usuário do sistema, desejo deletar tarefa para não ter atividades que não fazem mais sentido fazer.</td>
            <td>- Deve existir um botão de excluir tarefa<br/>- Deve haver uma caixa de confirmação antes de deletar a tarefa</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF4</td>
            <td>US04</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ05</td>
            <td>O usuário deve poder editar afazer(es)</td>
            <td>Eu, como usuário do sistema, desejo editar uma tarefa para arrumar dados que estão incorretos ou que mudaram.</td>
            <td>O botão de edição deve ser de fácil acesso ao usuário</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF5</td>
            <td>US05</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ06</td>
            <td>O usuário deve poder finalizar uma afazer(es)</td>
            <td>Eu, como usuário do sistema, desejo finalizar uma tarefa para poder salvar que eu a terminei.</td>
            <td>- Deve haver um botão para marcar uma tarefa como concluída<br/>- A tarefa concluída deve ter um estilo visual diferente da tarefa a ser concluída</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF6</td>
            <td>US06</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ07</td>
            <td>O usuário deve poder reorganizar a ordem das suas tarefas</td>
            <td>Eu, como usuário do sistema, desejo reorganizar a ordem das tarefas para que eu consiga personalizar como eu quero minha atividades.</td>
            <td>- O sistema deverá armazenar a posição da tarefa e exibi-la na posição correta<br/>- O usuário deverá ser capaz de reordenar tarefas arrastando-as</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF7</td>
            <td>US07</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ08</td>
            <td>O usuário deve poder adicionar observação(ões) a(s) sua(s) tarefa(s) </td>
            <td>Eu, como usuário do sistema, desejo botar observações nas tarefas para que eu não me esqueça de nenhum detalhe importante sobre ela.</td>
            <td>- O usuário deve ser capaz de digitar um texto de observação na criação da tarefa<br/>- O texto de observação deverá ser facilmente acessado</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF8</td>
            <td>US08</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ09</td>
            <td>O usuário deve poder adicionar uma data limite para afazer(es)</td>
            <td>Eu, como usuário do sistema, desejo adicionar uma data da tarefa para me lembrar no dia dela.</td>
            <td>- O usuário deve ser capaz de escolher uma data limite na criação da tarefa<br/>- A data limite deve ser facilmente acessado</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF9</td>
            <td>US09</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ10</td>
            <td>O usuário deve poder categorizar a dificuldade da(s) atividade(s)</td>
            <td>Eu, como usuário do sistema, desejo determinar uma dificuldade na atividade para que eu possa determinar prioridades.</td>
            <td>O usuário deve ser capaz de escolher uma dificuldade para a tarefa em sua criação</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF10</td>
            <td>US10</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ11</td>
            <td>O usuário deve poder adicionar etiquetas na(s) atividade(s) para poder agrupar</td>
            <td>Eu, como usuário do sistema, desejo adicionar uma etiqueta na atividade para poder agrupá-las como eu quiser.</td>
            <td>- O usuário deverá ser capaz de atribuir etiquetas já criadas às tarefas<br/>- O sistema deverá guardar as etiquetas de cada tarefa</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF11</td>
            <td>US11</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ12</td>
            <td>O usuário deve poder determinar a repetição de uma diária</td>
            <td>Eu, como usuário do sistema, desejo determinar que a tarefa repita para não precisar adicioná-la sempre.</td>
            <td>- O usuário deve ser capaz de definir o intervalo de repetição da tarefa<br/>- O usuário deve ser capaz de definir uma data limite para a tarefa<br/></td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF12</td>
            <td>US12</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ13</td>
            <td>O usuário deve poder pesquisar atividade(s)</td>
            <td>Eu, como usuário do sistema, desejo poder pesquisar por uma tarefa para eu ter acesso rápido a ela.</td>
            <td>- Deverá existir um campo de texto para o usuário digitar o título da tarefa<br/>- Apenas as tarefas correspondentes ao texto devem aparecer filtradas</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF13</td>
            <td>US13</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ14</td>
            <td>O usuário deve poder filtrar as atividades pelas etiquetas</td>
            <td>Eu, como usuário do sistema, desejo filtrar atividades por etiquetas para ter um acesso rápido a ela.</td>
            <td>- Deverá existir um campo para selecionar a etiqueta a ser exibida<br/>- Somente deverão aparecer resultados que pertençam a etiqueta escolhida</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF14</td>
            <td>US14</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ15</td>
            <td>O usuário deve poder ao completar tarefas, ganhar recompensas</td>
            <td>Eu, como usuário do sistema, desejo, ao completar tarefas, ganhar recompensas</td>
            <td>- A recompensa deve ser mostrada imediatamente após completar a tarefa<br/>- A o valor da recompensa deve ser mostrado</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF15</td>
            <td>US15</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td>FE02 - Etiquetas</td>
            <td>RQ16</td>
            <td>O usuário deve poder criar etiqueta(s)</td>
            <td>Eu, como usuário do sistema, desejo criar uma etiqueta para que eu possa organizar atividades.</td>
            <td>- O usuário deve ser capaz de cadastrar etiquetas com nome e cor<br/>- As etiquetas devem ser de fácil visualização</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td>BC02</td>
            <td>CF16</td>
            <td>US16</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ17</td>
            <td>O usuário deve poder deletar etiqueta(s)</td>
            <td>Eu, como usuário do sistema, desejo deletar uma etiqueta para não bagunçar minha organização.</td>
            <td>- Deverá existir um botão para excluir etiquetas existentes<br/>- Após a exclusão a etiqueta deve ser desacoplada de todos as tarefas que ela classificava<br/>- A etiqueta excluída não deverá ser exibida na seleção de etiquetas</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF17</td>
            <td>US17</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ18</td>
            <td>O usuário deve poder editar etiqueta(s)</td>
            <td>Eu, como usuário do sistema, desejo atualizar uma etiqueta para arrumar dados incorretos ou desatualizados.</td>
            <td>- Deverá existir um botão para editar a etiqueta<br/>- O sistema deverá salvar as informações atualizadas da etiqueta e aplicá-las à todas as tarefas que a possuía</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF18</td>
            <td>US18</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ19</td>
            <td>O usuário deve poder reorganizar a ordem das etiquetas</td>
            <td>Eu, como usuário do sistema, desejo reorganizar a ordem das etiquetas para eu poder organizar da forma que eu quiser.</td>
            <td>- O usuário deve ser capaz de definir a ordem de uma etiqueta arrastando-a<br/>- O sistema deverá guardar a posição da etiqueta e exibi-la no lugar correto</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF19</td>
            <td>US19</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ20</td>
            <td>O usuário deve poder visualizar as atividades finalizadas</td>
            <td>Eu, como usuário do sistema, desejo ver atividades completadas para eu saber o que ja foi finalizado.</td>
            <td>- Deverá ter um botão para exibir as tarefas já concluídas<br/>- As tarefas concluídas devem ter um visual diferente das tarefas não concluídas para fácil reconhecimento</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF20</td>
            <td>US20</td>
            </tr>
            <tr>
            <td> </td>
            <td>E02 - Gamificação</td>
            <td>FE03 - Inventário</td>
            <td>RQ21</td>
            <td>O usuário deve ter todos os itens que eu comprar ou ganhar separados em um local.</td>
            <td>Eu, como usuário do sistema, gostaria de ter todos os itens que eu comprar ou ganhar separados em um local.</td>
            <td>- Esse local deve poder ser acessado diretamente do menu principal da aplicação</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td>BC03</td>
            <td>CF21</td>
            <td>US21</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ22</td>
            <td>O usuário deve poder ter seus itens fossem categorizados em equipamentos, estábulo e aba itens em geral.</td>
            <td>Eu, como usuário do sistema, gostaria que meus itens fossem categorizados na aba equipamentos, que podem personalizar o avatar, aba estábulo, para ficar os mascotes e montarias, e aba itens em geral.</td>
            <td>- Essas categorias devem estar bem visíveis aos usuários</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF22</td>
            <td>US22</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ23</td>
            <td>O usuário deve ter a seguinte divisão na aba de categoria para os itens: ovos, poções, comidas e selas, especial e missões</td>
            <td>Eu, como usuário do sistema, gostaria de ter a seguinte divisão na aba de categoria para os itens: ovos, poções, comidas e selas, especial e missões</td>
            <td>- Em cada categoria, deve ter uma indicação que quantos itens daquela categoria tenho<br/>- Em item, deve ter uma indicação de quantos itens daquele tenho</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF23</td>
            <td>US23</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ24</td>
            <td>O usuário deve poder ter a seguinte divisão na aba de categoria para os equipamentos: cabeça, tiaras, óculos, armaduras, costas, corpo, arma e escudo</td>
            <td>Eu, como usuário do sistema, gostaria de ter a seguinte divisão na aba de categoria para os equipamentos: cabeça, tiaras, óculos, armaduras, costas, corpo, arma e escudo</td>
            <td>- Em cada categoria, deve ter uma indicação que quantos itens daquela categoria tenho<br/>- Em item, deve ter uma indicação de quantos equipamentos daquele tipo tenho</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF24</td>
            <td>US24</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ25</td>
            <td>O usuário deve ter a seguinte divisão na abas de categoria para o estábulo: montaria e mascotes</td>
            <td>Eu, como usuário do sistema, gostaria de ter a seguinte divisão na abas de categoria para o estábulo: montaria e mascotes</td>
            <td>- Deve existir uma indicação que quantos pets tenho vs quantos pets existem no total</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF25</td>
            <td>US25</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ26</td>
            <td>O usuário deve poder filtrar itens</td>
            <td>Eu, como usuário do sistema, gostaria de poder filtrar meus itens para acessa-los de maneira mais rápida</td>
            <td>- Deverá ser possível selecionar mais de uma categoria por vez</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF26</td>
            <td>US26</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ27</td>
            <td>O usuário deve poder buscar itens por nome.</td>
            <td>Eu, como usuário do sistema, gostaria de poder buscar meus itens por nome.</td>
            <td>- Deverá existir um campo de texto para o usuário digitar o título da tarefa<br/>- Apenas os itens correspondentes ao texto devem aparecer filtradas</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF27</td>
            <td>US27</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ28</td>
            <td>O usuário deve poder usar as poções para eclodir ovos de pets</td>
            <td>Eu, como usuário do sistema, gostaria de usar as poções para eclodir nos meus ovos de pets.</td>
            <td>- O usuário deve clicar na poção para selecioná-la e depois clicar no ovo que deseja eclodir</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF28</td>
            <td>US28</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ29</td>
            <td>O usuário deve poder alimentar mascotes.</td>
            <td>Eu, como usuário do sistema, gostaria de poder alimentar os meus mascotes.</td>
            <td>- O usuário deve clicar na comida para selecioná-la e depois clicar no mascote que deseja alimentar</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF29</td>
            <td>US29</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ30</td>
            <td>Os mascotes devem poder evoluir para montarias</td>
            <td>Eu, como usuário do sistema, gostaria que os mascotes pudessem evoluir para algo que o avatar pudesse montar.</td>
            <td>- Sempre que o mascote evoluir, deve haver uma indicação visual</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF30</td>
            <td>US30</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ31</td>
            <td>O usuário deve poder propor missões para o grupo</td>
            <td>Eu, como usuário do sistema, gostaria poder propor as missões que eu tenho para o grupo o qual participo.</td>
            <td> </td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF31</td>
            <td>US31</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ32</td>
            <td>O usuário deve poder equipar e desequipar o avatar com itens</td>
            <td>Eu, como usuário do sistema, gostaria de poder equipar meu avatar com os equipamentos que tenho disponíveis ou desequipá-lo.</td>
            <td>- Deverá existir um indicador de qual equipamento o usuário está usando para facilitar a identificação</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF32</td>
            <td>US32</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ33</td>
            <td>O usuário deve poder adicionar e remover os mascotes do avatar</td>
            <td>Eu, como usuário do sistema, gostaria de ser capaz de colocar e retirar os mascotes junto ao meu avatar.</td>
            <td>- O usuário deve ser capaz de colocar os mascotes com apenas um clique<br/>- O usuário deve ser capaz de retirar os mascotes com apenas um clique</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF33</td>
            <td>US33</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ34</td>
            <td>O usuário deve poder adicionar e remover uma montaria do avatar,</td>
            <td>Eu, como usuário do sistema, gostaria de adicionar uma montaria ao meu avatar, de forma que o avatar esteja montado nele, ou retirá-la.</td>
            <td>- O usuário deve ser capaz de colocar os montarias com apenas um clique<br/>- O usuário deve ser capaz de retirar os montarias com apenas um clique</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF34</td>
            <td>US34</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td>FE04 - <br/>Loja</td>
            <td>RQ35</td>
            <td>O usuário deve poder comprar equipamento com gemas ou moedas</td>
            <td>Eu, como usuário do sistema, desejo comprar equipamento com gemas ou moedas para meu avatar para que eu possa customizar meu avatar</td>
            <td>- O usuário deve ser capaz de visualizar os equipamentos disponíveis para a compra<br/>- O usuário deve ser capaz de ao clicar no equipamento, escolher de qual forma ele irá adquiri-lo</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF35</td>
            <td>US35</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ36</td>
            <td>O usuário deve poder ver o valor dos itens da loja</td>
            <td>Eu, como usuário do sistema, desejo ver o valor dos itens da loja para que eu possa avaliar se posso comprar e decidir qual item comprar</td>
            <td>- O usuário deve ser capaz de visualizar os itens disponíveis para a compra na loja<br/>- O usuário deve ser capaz de visualizar a quantia de moedas e gemas que cada item custa</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF36</td>
            <td>US36</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ37</td>
            <td>O usuário deve poder adquirir moedas para comprar itens</td>
            <td>Eu, como usuário do sistema, desejo adquirir moedas para que eu possa comprar itens da loja</td>
            <td>- O sistema deve, automaticamente, ao o usuário completar uma tarefa ou missão fornecer moedas ao usuário</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF37</td>
            <td>US37</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ38</td>
            <td>O usuário deve poder comprar itens com gemas ou moedas</td>
            <td>Eu, como usuário do sistema, desejo comprar itens com gemas ou moedas para que eu possa usá-los e melhorar meu rendimento em missões</td>
            <td>- O usuário deve ser capaz de visualizar os itens disponíveis para a compra<br/>- O usuário deve ser capaz de ao clicar no item, escolher de qual forma ele irá adquiri-lo</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF38</td>
            <td>US38</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ39</td>
            <td>O usuário deve poder comprar missões com gemas ou moedas</td>
            <td>Eu, como usuário do sistema, desejo comprar missões com gemas ou moedas para que eu possa me divertir e ganhar pontos de experiência</td>
            <td>- O usuário deve ser capaz de visualizar as missões disponíveis para a compra<br/>- O usuário deve ser capaz de ao clicar a missão, escolher de qual forma ele irá adquiri-lo</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF39</td>
            <td>US39</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ40</td>
            <td>O usuário deve poder comprar itens limitados com gemas ou moedas</td>
            <td>Eu, como usuário do sistema, desejo comprar itens limitados com gemas ou moedas para que eu customizar meu avatar</td>
            <td>- O usuário deve ser capaz de trocar moedas por itens na loja<br/>- O usuário deve ser capaz de trocar gemas por itens na loja<br/>- Ao trocar moedas ou gemas na loja o usuário deve obter itens</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF40</td>
            <td>US40</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ41</td>
            <td>O usuário deve poder comprar missões limitadas com gemas ou moedas</td>
            <td>Eu, como usuário do sistema, desejo comprar missões limitadas com gemas ou moedas para que eu possa me divertir e ganhar pontos de experiência</td>
            <td>- O usuário deve ser capaz de trocar moedas por missões na loja<br/>- O usuário deve ser capaz de trocar gemas por missões na loja<br/>- Ao trocar moedas ou gemas na loja o usuário deve obter missões</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF41</td>
            <td>US41</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td>FE05 - Desafios</td>
            <td>RQ42</td>
            <td>O usuário deve poder criar desafios</td>
            <td>Eu, como usuário do sistema, desejo criar desafios para motivar outros usuários através de uma competição</td>
            <td>- O usuário deve poder selecionar se quer um desafio público ou privado<br/>- O usuário deve poder selecionar um prêmio para o desafio</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td>BC05</td>
            <td>CF42</td>
            <td>US42</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ43</td>
            <td>O usuário deve poder participar de um desafio</td>
            <td>Eu, como usuário do sistema, desejo participar de um desafio para competir com outros usuários, me divertir sendo mais produtivo e ganhar um prêmio</td>
            <td>- O usuário deve ser capaz de participar em desafios <br/>- Os desafios podem conter diversos usuários <br/>- Ao ganhar um desafio o usuário deve ganhar uma premiação</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF43</td>
            <td>US43</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ44</td>
            <td>O usuário deve poder ver o progresso de outros participantes de um desafio</td>
            <td>Eu, como usuário do sistema, desejo ver o progresso de outros participantes de um desafio para que eu possa comparar meu desempenho com o deles</td>
            <td>- O usuário deve possuir um progresso em relação ao desafio <br/>- O usuário deve ser capaz de visualizar seu progresso<br/>- O usuário deve ser capaz de visualizar o progresso de outros usuários no mesmo desafio</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF44</td>
            <td>US44</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ45</td>
            <td>O usuário criador de um desafio deve poder declarar o vencedor do desafio</td>
            <td>Eu, como usuário criador de um desafio, desejo declarar o vencedor de tal desafio para que a pessoa receba o prêmio</td>
            <td>- O usuário criador do desafio deve poder encerrar o desafio <br/>- Ao encerrar o desafio o usuário criador deve escolher um usuário vencedor</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF45</td>
            <td>US45</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ46</td>
            <td>O usuário deve poder filtrar desafios por categoria</td>
            <td>Eu, como usuário do sistema, desejo filtrar desafios por categoria para que eu veja somente desafios de uma área que eu me interesso</td>
            <td>- O usuário deve ser capaz de visualizar uma lista de desafios <br/>- O usuário deve ser capaz de filtrar os desafios com base em categorias <br/>- O sistema deve possuir categorias para filtrar os desafios</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF46</td>
            <td>US46</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ47</td>
            <td>O usuário deve poder buscar desafios por nome</td>
            <td>Eu, como usuário do sistema, desejo buscar desafios por nome para que eu encontre mais rapidamente desafios com aquela característica</td>
            <td>- Deverá existir um campo de texto para o usuário digitar o título da tarefa<br/>- Apenas os desafios correspondentes ao texto devem aparecer filtradas</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF47</td>
            <td>US47</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ48</td>
            <td>O usuário deve poder ver destacados os desafios que criou e participa</td>
            <td>Eu, como usuário do sistema, desejo ver destacados os desafios que criei e participo para que não precise buscá-los por categoria, nome ou manualmente</td>
            <td>- O usuário deve ter acesso a uma tela que mostra os desafios que criou<br/>- Deverá existir um botão na tela principal de desafios para que o usuário possa acessar os desafios criados por ele</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF48</td>
            <td>US48</td>
            </tr>
            <tr>
            <td> </td>
            <td>E03 - Interação entre usuários</td>
            <td>FE06 - Grupo</td>
            <td>RQ49</td>
            <td>O usuário deve poder acessar os grupos pela sidebar</td>
            <td>Eu, como usuário do sistema, desejo acessar os grupos pela sidebar para acessar suas funcionalidades.</td>
            <td>- O sistema deve conter uma sidebar que disponibilize algumas funcionalidades<br/>- O usuário deve ser capaz de acessar a aba de grupos pela sidebar disponível no sistema</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td>BC06</td>
            <td>CF49</td>
            <td>US49</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ50</td>
            <td>O usuário deve poder se retirar de um grupo</td>
            <td>Eu, como usuário do sistema, desejo ser capaz de me retirar do grupo para poder participar de outros grupos.</td>
            <td>- O usuário deve ser capaz de ter acesso a um botão que possibilite a saída dele do grupo atual<br/>- O sistema deve oferecer ao usuário dupla verificação de opção do usuário, ao ser clicada a opção de sair do grupo<br/>- O sistema deve desvincular o usuário do grupo atual quando a opção de saída for confirmada</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF50</td>
            <td>US50</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ51</td>
            <td>O usuário deve ser capaz de acessar o chat</td>
            <td>Eu, como usuário do sistema, desejo ser capaz de acessar o chat para poder interagir com outros usuários.</td>
            <td>- O sistema deverá possuir um chat que exiba as mensagens instantaneamente, ao serem enviadas, de cada usuário<br/>- O usuário deve ser capaz de digitar uma mensagem de seu gosto no campo determinado<br/>- O usuário deve poder enviar a mensagem digitada ao seu grupo<br/>- O usuário deve ser capaz de visualizar as mensagens enviadas por outros memebros do grupo</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF51</td>
            <td>US51</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ52</td>
            <td>O usuário deve ser capaz de convidar o grupo para uma missão</td>
            <td>Eu, como usuário do sistema, desejo ser capaz de convidar o grupo para uma missão para trabalharmos em equipe.</td>
            <td>- O usuário deve ser capaz de ao acessar seu inventário poder visualizar suas missões disponíveis<br/>- O usuário deve ser capaz de ao clicar em uma missão possuída, receber a opção de propor para seu grupo</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF52</td>
            <td>US52</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ53</td>
            <td>O usuário deve poder vizualizar o perfil de outros usuários do grupo</td>
            <td>Eu, como usuário do sistema, desejo vizualizar o perfil de outros usuários do grupo para conhecê-los.</td>
            <td>- O usuário deve ter acesso a uma sessão que exibe todos os participantes de seu grupo<br/>- O usuário deve ser capaz de, ao escolher um membro do grupo, ao clicar em seu avatar poder ter acesso ao seu perfil</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF53</td>
            <td>US53</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ54</td>
            <td>O usuário deve poder acessar o perfil individual dos outros usuários do grupo</td>
            <td>Eu, como usuário do sistema, desejo acessar o perfil individual dos outros usuários do grupo para identificar os seus atributos.</td>
            <td>- O usuário deve ser capaz de, ao escolher um membro do grupo, ao clicar em seu avatar poder ter acesso ao seu perfil</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF54</td>
            <td>US54</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ55</td>
            <td>O usuário deve poder cancelar uma missão</td>
            <td>Eu, como usuário do sistema, desejo cancelar uma missão para poder participar de outras missões.</td>
            <td>- O usuário deve ser capaz de, na aba de grupos, visualizar a missão em andamento de seu grupo<br/>- O usuário deve ser capaz de cancelar a missão que está em vigor<br/>- O sistema deve precaver ações indesejadas do usuário com dupla verificação de resposta, caso a intenção seja abandonar a missão</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF55</td>
            <td>US55</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ56</td>
            <td>O usuário deve poder criar um grupo</td>
            <td>Eu, como usuário do sistema, desejo criar um grupo para chamar meus amigos</td>
            <td>- O usuário deve ser capaz de na aba grupos, possuir uma opção de criar um novo<br/>- O usuário deve ser capaz de dar um nome ao seu novo grupo<br/>- O sistema deve vincular o novo grupo ao usuário criador</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF56</td>
            <td>US56</td>
            </tr>
            <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>RQ57</td>
            <td>O usuário deve poder chamar amigos para o grupo</td>
            <td>Eu, como usuário do sistema, desejo chamar meus amigos para o meu grupo</td>
            <td>- O usuário deve ser capaz de pesquisar por outros usuários <br/>- O usuário deve ser capaz de convidar o terceiro usuário escolhido para seu grupo<br/>- O sistema deverá ser capaz de notificar o usuário escolhido para ingressar no grupo criado</td>
            <td>- Independente<br/>- Negociável<br/>- Valiosa<br/>- Sucinta<br/>- Testável</td>
            <td> </td>
            <td>CF57</td>
            <td>US57</td>
            </tr>
        </tbody></table>
      </Card>

    </div>
  )
}

export default ForwardFrom