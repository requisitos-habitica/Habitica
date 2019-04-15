import React from 'react'
import Feature from '../../UI/Feature/Feature'
import configFeatures from '../../../utils/configFeatures'
import './Features.scss'

const Features = () => (
  <section className="content features">
    <Feature { ...configFeatures.feat1 }/>
    <Feature { ...configFeatures.feat2 }/>
  </section>
)

export default Features