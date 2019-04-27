import React from 'react'
import { Link } from 'react-router-dom'

const ConsegueTomoDeMissao = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Consegue Tomo de Missao" author="Pedro Féo"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Obter um Item do tipo <Link to="/Lexicos/TomoDeMissao">Tomo de Missão</Link> para que possa realizar <Link to="/Lexicos/Missao">Missões</Link></p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Pré-condição: Estar logado</li>
        <li>Local: Loja</li>
        <li>Tempo: Em qualquer momento</li>
      </ul>
    </Card>

    <Card>
      <h2>Atores</h2>
      <ul>
        <li>Usuário</li>
        <li>Sistema</li>
      </ul>
    </Card>

    <Card>
      <h2>Recursos</h2>
      <ul>
        <li><Link to="/Lexicos/TomoDeMissao">Tomo de missão</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Ou Usuário compra <Link to="/Lexicos/TomoDeMissao">Tomo de missão</Link> na <Link to="/Lexicos/Loja">Loja</Link></li>
        <li>Ou Usuário recebe <Link to="/Lexicos/TomoDeMissao">Tomo de missão</Link> ao passar de Nível</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>Para receber ou comprar uma <Link to="/Lexicos/Missao">Missão</Link> o Usuário não deve ter comprado ou Recebido ela antes</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>O Usuário recebe um <Link to="/Lexicos/TomoDeMissao">Tomo de missão</Link> quando um evento mundial começa</li>
      </ul>
    </Card>

  </div>
)

export default ConsegueTomoDeMissao