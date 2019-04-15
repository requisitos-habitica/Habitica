import React from 'react'
import contributors from '../../../utils/contributors'
import Contributor from '../../UI/Contributor/Contributor'
import './Contributors.scss'

const Contributors = () => (
  <section className="content contributors">
    <h1>Contribuidores</h1>
    { contributors.map(contributor => <Contributor { ...contributor }/>) }
  </section>
)

export default Contributors