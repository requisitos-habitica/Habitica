import React from 'react'
import lexicos from '../../../../utils/lexicos'
import Strip from '../../../UI/Strip/Strip'

const Lexico = (props) => {
  
  const pushRoute = term => {
    props.history.push(term)
  }

  return (
    <div className="content artefact">
      <h1>Léxicos</h1>

      {Object.keys(lexicos).map(group => (
          <div key={ group } style={ style.container }>
            <h2 style={ style.title }>{ group }</h2>
            {lexicos[group].lexic.map(term => <Strip  key={ term }title={ term } 
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