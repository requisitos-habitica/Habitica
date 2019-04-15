import React from 'react'
import Feature from '../../UI/Feature/Feature'
import img from '../../../assets/inAppGroupAndStore.svg'
import './Features.scss'

const Features = () => (
  <section className="features">
    <Feature title="Teste1" img={ img } description="Testandoooooo"/>
    <Feature title="Teste2" img={ img } description="Testandoooooo"/>
  </section>
)

export default Features