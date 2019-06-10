import React from 'react'
import ReactMarkdown from 'react-markdown'

const BrainstormV1 = () => {

  const input = `
  # Braintorm V1\n
  Neste Brainstorm foi feito lalalalaal\n
  ooooiiii
  ## HEEEEEEEELooow
  `

  return (
    <div className="artefact content">
      <ReactMarkdown source={ input }/>
    </div>
  )
}

export default BrainstormV1