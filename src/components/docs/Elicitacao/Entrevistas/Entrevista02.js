import React from 'react'
import ReactMarkdown from 'react-markdown'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'
import { Link } from 'react-router-dom'


const Entrevista02 = () => {

  return (
    <div className='content artefact'>
      <HeadArtefact versions={ null } rastreability={ null }
                    title="Entrevista 02" author="Saleh Kader"/>

    <Card>
        <h2>Entrevistado</h2>
        <p>Filipe Toyoshima, aluno da FGA</p>
    </Card>

    <Card>
        <h2>Você utiliza algum aplicativo para gerenciar suas tarefas?</h2>
        <p><b>a. </b>“Utilizo o ToDoist. Antes eu usava o Any.Do, mas decidi ir para o ToDoist, por conta das suas features diferenciadas, mas no final não usei nenhuma.”</p>
    </Card>

    <Card>
        <h2>A quanto tempo você utiliza esse aplicativo?</h2>
        <p><b>a. </b>“Eu estou utilizando o aplicativo há aproximadamente 8 meses.”</p>
    </Card>

    <Card>
    <h2>Você acha que esse aplicativo tem facilitado sua vida? Por que?</h2>
        <p><b>a. </b>“Sim. Porque eu não seria capaz de lembrar de todas as tarefas que eu deveria fazer. E o fato dela estar acessíveis tanto no celular quanto no computador, facilita.”</p>
    </Card>

    <Card>
        <h2>Quais são os maiores defeitos que você enxerga nesse aplicativo?</h2>
        <p><b>a. </b>“Não enxergo nenhum defeito. Eu que não tenho tanta disposição para utilizá-lo ao máximo.”</p>
    </Card>

    <Card>
        <h2>Você acredita que um aplicativo gamificado para gerência de tarefas iria trazer um diferencial para você? Justifique.</h2>
        <p><b>a. </b>“Não. Não tenho paciência nem para utilizar as features adicionais do ToDoist, imagine as tarefas gamificadas do Habitica.”</p>
    </Card>

    <Card>
        <h2>Você conhece o Habitica?</h2>
        <p><b>a. </b>“Sim. Já tentei utilizá-lo duas vezes e falhei nas duas.”</p>
    </Card>

    </div>
  )
}

export default Entrevista02