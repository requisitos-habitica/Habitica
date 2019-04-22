import React from 'react'
import './SearchBar.scss'
import icon from '../../../assets/search.svg'

const SearchBar = ({ onChange, placeholder }) => (
  <div className="search-bar">
    <img src={ icon } alt="lupa"/>
    <input placeholder={ placeholder } onChange={ (event) => onChange(event)}/>
  </div>
)

export default SearchBar