import React from 'react'
import "../css/calculator.css"
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'


function Display() {
  const {value} = useSelector((state :RootState)=> state.calculatorValue)

  return (
    <div>
      <input type="text" value={value}   className='display-input' />
      </div>
  )
}

export default Display