import React from 'react'
import lexicosObj from '../../../../utils/lexicos'
import Strip from '../../../UI/Strip/Strip'
import SearchBar from '../../../UI/SearchBar/SearchBar'

const Lexico = (props) => {

  const [lexicos, setLexicos] = React.useState(lexicosObj)

  const pushRoute = term => {
    props.history.push(term)
  }

  const filter = event => {
    let termGroup = Object.keys(lexicos).flatMap(group => 
      Object.keys(lexicos[group].lexic).filter(term => term.indexOf(event.target.value) > -1))
    // setta o state pra nao renderizar 
    console.log(termGroup)
  }

  return (
    <div className="content artefact">
      <h1>Léxicos</h1>
      <SearchBar placeholder="Pesquise por um léxico" onChange={filter}/>

      {Object.keys(lexicos).map(group => (
          <div key={ group } style={ style.container }>
            <h2 style={ style.title }>{ group }</h2>

            {Object.keys(lexicos[group].lexic).map(term => <Strip  key={ term } title={ term } 
                                                      color={ lexicos[group].color }
                                                      onClick={ () => pushRoute(term) }/>)}
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