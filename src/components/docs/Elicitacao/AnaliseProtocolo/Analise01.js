import React from 'react'
import ReactMarkdown from 'react-markdown'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'
import { Link } from 'react-router-dom'
import img1 from '../../../../assets/ProtocoloKaique/1.jpeg'
import img2 from '../../../../assets/ProtocoloKaique/2.jpeg'
import img3 from '../../../../assets/ProtocoloKaique/3.jpeg'
import img4 from '../../../../assets/ProtocoloKaique/4.jpeg'
import './Analise.scss'



const Analise01 = () => {

  return (
    <div className='content artefact'>
      <HeadArtefact versions={ null } rastreability={ null }
                    title="Análise de protocolo 01" author="Kaique Borges"/>

    <Card>
        <p>De acordo com a Análise de Protocolo 1 (AP1) e a Análise de Protocolo 2 (AP2), um entendimento maior sobre a organização de tarefas de estudantes foi adquirida e alguns requisitos foram inferidos.</p>
    </Card>

    <Card>
        <p>Em AP1, um vídeo foi gravado no dia 08/04/2019 e AP2 é o conjunto de um áudio e fotos feitos em 09/04/2019.</p>
    </Card>

    <Card>
        <p>AP1 teve pouca utilidade, já que o indivíduo não costuma externalizar suas tarefas a serem feitas. Já o indivíduo de AP2 explicou detalhadamente como funciona seu sistema de organização tanto para o trabalho quanto para os estudos, em um momento em que planejava seu dia seguinte.</p>
    </Card>

    <Card>
        <h2>Requisitos Extraídos</h2>
        <p>- O usuário deve ser capaz de guardar tarefas.</p>
        <br></br>
        <p>Surge de AP1 e AP2 - mais de AP2 que de AP1 - onde relatam que às vezes se lembrar de tudo não é possível, precisando externalizar as atividades.</p>
        <br></br>
        <p>- O usuário deve ser capaz de guardar tarefas recorrentes.</p>
        <br></br>
        <p>Surge a partir de uma extrapolação de AP2. As tarefas que ocorrem todos os dias não são colocadas na agenda, perdendo assim o rastro e muitas vezes é esquecida. Também é um trabalho repetitivo e cansativo ter de escrever essas tarefas todos os dias na agenda.</p>
        <br></br>
        <p>- O usuário deve ser capaz de definir uma data limite para as tarefas.</p>
        <br></br>
        <p>Surge de AP2, onde o indivíduo relata colocar em sua agenda os eventos e tarefas nas datas onde devem ser feitas.</p>
        <br></br>
        <p>- O usuário deve ser capaz de marcar uma tarefa como concluída.</p>
        <br></br>
        <p>Surge de AP2, onde o indivíduo relata marcar as tarefas com "OK" assim que são feitas, para manter controle da sua produtividade.</p>
        <br></br>
        <p>- O usuário deve ser capaz de categorizar tarefas</p>
        <br></br>
        <p>Surge de AP1 e AP2, onde os indivíduos relatam separar tarefas de estudos de tarefas do trabalho.</p>
    </Card>

    <Card>
        <h2>API01</h2>
        <a href='https://drive.google.com/file/d/1pKMI3DpQnBCOlqYwixIbLw97R1qHoUWx/view?usp=sharing'>https://drive.google.com/file/d/1pKMI3DpQnBCOlqYwixIbLw97R1qHoUWx/view?usp=sharing</a>
    </Card>

    <Card>
        <h2>API02</h2>
        <h3>Agenda</h3>
        <img src={img1}></img>
        <br></br>
        <h3>Agenda Futura</h3>
        <img src={img2}></img>
        <br></br>
        <h3>Agenda OK</h3>
        <img src={img3}></img>
        <br></br>
        <h3>Cronograma</h3>
        <img src={img4}></img>
        <br></br>
        <h3>Áudio</h3>
        <a href='https://drive.google.com/file/d/1pVYiV1mdHDTVRFHiIh2rcMh6DXpb1xQG/view?usp=sharing'>https://drive.google.com/file/d/1pVYiV1mdHDTVRFHiIh2rcMh6DXpb1xQG/view?usp=sharing</a>
    </Card>

    </div>
  )
}

export default Analise01