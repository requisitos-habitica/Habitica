import React from 'react'
import Feature from '../../UI/Feature/Feature'
import features from '../../../utils/features'
import './Features.scss'

const Features = () => (
  <section className="content features">
    { features.map(feature => <Feature {...feature}/>) }
  </section>
)

export default Features