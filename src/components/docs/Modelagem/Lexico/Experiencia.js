import React from 'react'
import { Link } from 'react-router-dom'

const Experiencia = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Experiência" author="Pedro Féo"/>
    <Card>
      <h2>Nome</h2>
      <p>Experiência</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Pontos de Experiência</li>
        <li>EXP</li>
        <li>XP</li>
        <li>Barra de Experiência</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Acompanham o progresso de um Usuário</li>
        <li>Representa o progresso até <Link to="/Cenarios/SubirDeNivel">Subir de Nível</Link></li>
        <li>A Experiência pertence ao Usuário</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Usuários ganham Experiência ao <Link to="/Cenarios/CompletarTarefa">Completar Tarefa</Link></li>
        <li>Usuários ganham Experiência através de Habilidades</li>
        <li>Usuários ganham Experiência ao <Link to="/Cenarios/CompletaMissao">Completar uma Missão</Link></li>
        <li>Usuários <Link to="/Cenarios/SobirDeNivel">Sobem um Nível</Link> ao se completar a Barra de Experiência</li>
        <li>A Experiência do Usuário se torna zero ao <Link to="/Cenarios/SobirDeNivel">Subir de Nível</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default Experiencia