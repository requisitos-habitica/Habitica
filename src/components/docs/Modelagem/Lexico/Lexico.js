import React from 'react'
import lexicosObj from '../../../../utils/lexicos'
import Strip from '../../../UI/Strip/Strip'

const Lexico = () => {
  
  const [lexicos, setLexicos] = React.useState(lexicosObj)

  return (
    <div className="content artefact">
      <h1>Léxicos</h1>

      <div style={ style }>
        { lexicos.Fóruns.map(it => <Strip key={ it } title={ it } color="pink"/>) }
      </div>
    </div>
  )
}

const style = {
  display: "flex",
  flexDirection: "column",
  marginTop: "8rem",
}

export default Lexico