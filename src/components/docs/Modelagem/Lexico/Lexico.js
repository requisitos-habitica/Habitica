import React from 'react'
import lexicosObj from '../../../../utils/lexicos'
import Strip from '../../../UI/Strip/Strip'
import SearchBar from '../../../UI/SearchBar/SearchBar'
import { HashLink as Link } from 'react-router-hash-link'
import Card from '../../../UI/Card/Card'

const Lexico = (props) => {

  const [lexicos, setLexicos] = React.useState(lexicosObj)

  const pushRoute = term => props.history.push("/" + term)

  return (
    <div className="content artefact">
      <h1>Léxicos</h1>


      <Card>
        <h2>Rastreabilidade</h2>
        <ul>
          <li><b>Pré-Rastreabilidade</b></li>
          <ul style={{ display: "flex", justifyContent: "space-between" }}>
            <li><Link smooth to='/StoryTelling02#RP10'>v3-geral-todos</Link></li>
            <li><Link smooth to='/StoryTelling02#RP5'>v2-geral-albino</Link></li>
            <li><Link smooth to='/StoryTelling02#RP15'>v1-tarefas-albino</Link></li>
            <li><Link smooth to='/StoryTelling02#RP4'>v2-geral-feo</Link></li>
            <li><Link smooth to='/StoryTelling02#RP3'>v1-geral-youseff</Link></li>
            <li><Link smooth to='/StoryTelling02#RP11'>v2-inventario-feo</Link></li>
            <li><Link smooth to='/StoryTelling02#RP13'>v2-loja-dutra</Link></li>
            <li><Link smooth to='/StoryTelling02#RP11V1'>v1-inventario-roger</Link></li>
            <li><Link smooth to='/StoryTelling02#RP12'>v1-grupo-saleh</Link></li>
          </ul>
          <li><b>Elicitação</b></li>
          <ul style={{ display: "flex", justifyContent: "space-between" }}>
            <li><Link smooth to='/AnaliseProtocolo01'>AP1</Link></li>
            <li><Link smooth to='/AnaliseProtocolo02'>AP2</Link></li>
            <li><Link smooth to='/Brainstorm'>BS1</Link></li>
            <li><Link smooth to='/Etnografia' >ETN1</Link></li>
            <li><Link smooth to='/StoryTelling01#ST1'>ST1</Link></li>
            <li><Link smooth to='/StoryTelling01#ST2'>ST2</Link></li>
            <li><Link smooth to='/StoryTelling02#ST3'>ST3</Link></li>
            <li><Link smooth to='/StoryTelling02#ST6'>ST6</Link></li>
            <li><Link smooth to='/StoryTelling02#ST7'>ST7</Link></li>
            <li><Link smooth to='/StoryTelling02#ST8'>ST8</Link></li>
            <li><Link smooth to='/StoryTelling02#ST9'>ST9</Link></li>
            <li><Link smooth to='/StoryTelling02#ST10'>ST10</Link></li>
            <li><Link smooth to='/StoryTelling02#ST11'>ST11</Link></li>
            <li><Link smooth to='/StoryTelling02#ST12'>ST12</Link></li>
            <li><Link smooth to='/StoryTelling02#ST14'>ST14</Link></li>
            <li><Link smooth to='/StoryTelling02#ST15'>ST15</Link></li>
            <li><Link smooth to='/Introspeccao'>INT01</Link></li>
          </ul>
          <li>Para informações de rastreabilidade mais detalhadas acesse a tabela <Link smooth to='/BackwardFrom'>BackwardFrom</Link></li>
        </ul>
      </Card>

      {/* <SearchBar placeholder="Pesquise por um léxico" onChange={filter}/> */}

      {Object.keys(lexicos).map(group => (
        <div key={group} style={style.container}>
          <h2 style={style.title}>{group}</h2>
          {Object.keys(lexicos[group].lexic).map(term => <Strip key={term} title={term}
            color={lexicos[group].color}
            onClick={() => pushRoute(term)} />)}
        </div>
      ))}
    </div>
  )
}

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: "8rem",
  },
  title: {
    fontSize: "2rem",
    letterSpacing: "1px",
    marginBottom: "1.2rem"
  }
}

export default Lexico