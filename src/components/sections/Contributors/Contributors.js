import React from 'react'
import contributors from '../../../utils/contributors'

const Contributors = () => (
  contributors.map(contributor => <img src={ contributor.img } alt="Contribuidor"/>)
)

export default Contributors