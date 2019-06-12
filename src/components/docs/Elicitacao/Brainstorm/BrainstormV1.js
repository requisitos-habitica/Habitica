import React from 'react'
import ReactMarkdown from 'react-markdown'

const BrainstormV1 = () => {

  const input = '# Braintorm V1\n'

  return (
    <ReactMarkdown source={ input }/>
  )
}

export default BrainstormV1