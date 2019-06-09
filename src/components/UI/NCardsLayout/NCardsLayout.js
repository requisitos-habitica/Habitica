import React from 'react'
import { Link } from 'react-router-dom'
import './NCardsLayout.scss'

const NCardsLayout = props => (
  <div className="n-cards-layout">
    {
      props.items.map(item => (
        <Link to={ item.link } style={{ textDecoration: 'none' }} key={ item.title }>
          <div className="cards">
            <img src={ item.img } alt="Léxico"/>
            <h2>{ item.title }</h2>
          </div>
        </Link>
      ))
    }
  </div>
)

export default NCardsLayout