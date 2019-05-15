import React from 'react'
import cenariosObj from '../../../../utils/cenarios'
import Strip from '../../../UI/Strip/Strip'

const Cenario = (props) => {

  const [cenarios, setCenarios] = React.useState(cenariosObj)

  const pushRoute = term => props.history.push("/" + term)

  return (
    <div className="content artefact">
      <h1>Cenários</h1>

      {Object.keys(cenarios).map(group => (
          <div key={ group } style={ style.container }>
            <h2 style={ style.title }>{ group }</h2>

            {Object.keys(cenarios[group].lexic).map(term => <Strip key={ term } title={ term } 
                                                                  color={ cenarios[group].color }
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

export default Cenario