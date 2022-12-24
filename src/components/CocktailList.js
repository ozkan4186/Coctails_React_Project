import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import { useLocation } from 'react-router-dom'

const CocktailList = () => {
const{item}=useLocation()
  console.log(item);

  return (
    <div>
      <h2>cocktail list component</h2>
    </div>
  )
}

export default CocktailList
