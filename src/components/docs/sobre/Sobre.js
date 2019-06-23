import React from "react";
import './Sobre.scss';
import IssiesIMG from '../assets/sobre/s1.png'
import ComentIMG from '../assets/sobre/s2.png'
import TelegIMG from '../assets/sobre/s3.png'
import CommiIMG from '../assets/sobre/s4.png'
import DriveIMG from '../assets/sobre/s5.png'
import labelsIMG from '../assets/sobre/s6.png'

const Sobre = () => (
    <div className="sobre-page content">
        <h1>Metodologia</h1>
        <div>
            <div className="topico-container">
                <h2>Organização no Drive</h2>
                <div>
                    <img src={DriveIMG} />
                    <p>O time desde o começo do projeto reservou um drive para poder armazenar os documentos e assim melhor manter a rastreabilidade e o versionamento. Alem disso, tinhamos um calendário de provas e de atividades, pois assim poderiamos melhor montar nossas atividades durante a semana.</p>
                </div>
            </div>
            <hr/>
            <div className="topico-container">
                <h2>Uso de Issues</h2>
                <div>
                    <img src={IssiesIMG}/>
                    <p>Outra ferramenta muito importante para o time foram o uso de issues. Por elas, consegue-se ver todo o fluxo de trabalho, quem era responsável pela atividade e a interação em relação aquela atividade com o time.</p>
                </div>
            </div>
            <hr/>
            <div className="topico-container">
                <h2>Uso de labels</h2>
                <div>
                    <img src={labelsIMG} />
                    <p>Com o intuito de ter melhor rastreabilidade e organização, fizemos uso de labels para conseguir separar as atividades por módulos da atividades</p>
                </div>
            </div>
            <hr/>
            <div className="topico-container">
                <h2>Histórico de commit</h2>
                <div>
                    <img src={CommiIMG} className='about-image'/>
                    <p>Tivemos um problema com o histórico de de commits, pois ele não representa ativamente o fluxo de trabalho da equipe. O que ocorre é que fizemos todos os artefatos no Drive, enquanto o Youssef era responsável por fazer os componentes da aplicação. Ressaltamos que todos trabalhamos na produção dos artefatos proporcionalmente. No entanto, Youssef teve maior esforço junto à wiki</p>
                </div>
            </div>
            <hr/>
            <div className="topico-container">
                <h2>Interação no GitHub</h2>
                <div>
                    <img src={ComentIMG} className='about-image'/>
                    <p>Como parte da nossa interação oficial, usamos os comentários das issues do GitHub, pois ficavam lincadas com o modulo e atividade específica</p>
                </div>
            </div>
            <hr/>
            <div className="topico-container">
                <h2>Interação no Telegram</h2>
                <div>
                    <img src={TelegIMG} className='about-image'/>
                    <p>Por fim, como meio de comunicação rápida e não oficial, usamos um grupo no telegram. O usamos para ter rastreabilidade dos links e detalhes sobre o projeto. Ressalto que qualquer decisã importante era registrada no GitHub</p>
                </div>
            </div>
        </div>
    </div>
);

export default Sobre;

