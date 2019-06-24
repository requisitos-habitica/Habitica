import React from 'react'
import ReactMarkdown from 'react-markdown'
import Card from '../../UI/Card/Card'
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'
import './Verificacao.scss'



const Prototipo = () => {

  return (
    <div className='content artefact'>
      <HeadArtefact versions={ null } rastreability={ null }
                    title="Validação por Protótipo" author="Gabriel Albino"/>

        <Card>
           <h2>Link do Protótipo</h2>
           <p>O seguinte link contem as telas das Versões 1, 2 e 3 do protótipo</p> 
           <a href='https://www.figma.com/file/XzKZo1x7myKuw5rTz3TPalLm/Habitica?node-id=0%3A1' >https://www.figma.com/file/XzKZo1x7myKuw5rTz3TPalLm/Habitica?node-id=0%3A1</a>
        </Card>

        <Card>
            <h2>Conversa 1</h2>
            <ul>
                <li><b>[9/6 23:32] Helena:</b> Em “hábitos” O que é essa dificuldade dentro do protótipo?</li>
                <li><b>[9/6 23:32] Gabriel Albino:</b> Não foi possível identificar o que é a dificuldade nas tarefas rs</li>
                <li><b>[9/6 23:32] Gabriel Albino:</b> Anotei :v</li>
                <li><b>[9/6 23:33] Gabriel Albino:</b> Mas na lista de tarefas eh a cor da linha embaixo de cada um delas</li>
                <li><b>[9/6 23:33] Helena:</b> É pq como to me guiando sozinha vc vai ter que dar essa luz heheheh</li>
                <li><b>[9/6 23:33] Gabriel Albino:</b> Eh esse tipo de feedback q preciso</li>
                <li><b>[9/6 23:33] Helena:</b> Hmmmmmmmm</li>
                <li><b>[9/6 23:33] Helena:</b> Top</li>
                <li><b>[9/6 23:36] Helena:</b> Em diárias a dificuldade segue implícita demais</li>
                <li><b>[9/6 23:37] Helena:</b> Essa história de que tem que ter um estilo visual diferente entre a tarefa a ser concluída e a já concluída</li>
                <li><b>[9/6 23:37] Helena:</b> Ficou mto clarinho</li>
                <li><b>[9/6 23:37] Helena:</b> Quase não deu pra ver</li>
                <li><b>[9/6 23:38] Helena:</b> Ficou mais legal em afazeres</li>
                <li><b>[9/6 23:38] Helena:</b> Não sei se cabe falar isso mas falei</li>
                <li><b>[9/6 23:38] Helena:</b> A dificuldade fica mais clara quando vc tem os 3 níveis distintos pela cor Mas ainda assim tá muito implícito</li>
                <li><b>[9/6 23:39] Helena:</b> Pra adicionar uma nova tarefa eu fui em diária por exemplo</li>
                <li><b>[9/6 23:39] Helena:</b> Pq isso tá dentro daquela US</li>
                <li><b>[9/6 23:39] Helena:</b> E não ficou claro e tbm não achei</li>
                <li><b>[9/6 23:40] Helena:</b> Onde tá essa decisão de qual tipo de tarefa criar</li>
            </ul>
        </Card>

        <Card>
            <h2>Conversa 2</h2>
            <ul>
                <li><b>[10/6 01:59] Alexandre Miguel:</b> A primeira tem, só que não entendi direito como o “X/Y” se encaixa no conceito de nome</li>
                <li><b>[10/6 01:59] Alexandre Miguel:</b> Mas de resto cumpre o objetivo</li>
                <li><b>[10/6 02:01] Alexandre Miguel:</b> Pra eu que sou da área da pra entender que a corzinha quer dizer o tipo de dificuldade mas acho que não ficou muito intuitivo</li>
                <li><b>[10/6 02:01] Alexandre Miguel:</b> A segunda tem sim, só que não fica intuitivo descobrir qual botão cria oq</li>
                <li><b>[10/6 02:01] Alexandre Miguel:</b> Tem que ser na tentativa e erro</li>
                <li><b>[10/6 02:01] Alexandre Miguel:</b> Maaaas</li>
                <li><b>[10/6 02:02] Alexandre Miguel:</b> Depois que você abre da pra identificar tranquilo por causa do nome em cima</li>
                <li><b>[10/6 02:03] Alexandre Miguel:</b> A última tbm tem, se mudar o estilo da tarefa que eu fiz</li>
                <li><b>[10/6 02:03] Alexandre Miguel:</b> Curti</li>
                <li><b>[10/6 02:03] Alexandre Miguel:</b> Da pra entender essa</li>
                <li><b>[10/6 02:03] Alexandre Miguel:</b> Tem 2 recursos visuais</li>
                <li><b>[10/6 02:03] Alexandre Miguel:</b> Eh isto</li>
                <li><b>[10/6 02:03] Alexandre Miguel:</b> De nada</li>
            </ul>
        </Card>

    </div>
  )
}

export default Prototipo