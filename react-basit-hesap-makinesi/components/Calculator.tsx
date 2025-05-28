import React, { useEffect } from 'react'
import "../css/calculator.css"
import Display from './Display'
import Buttons from './Buttons'
import { addToDisplay , calculateResult, clearAll, deleteValue } from '../redux/calculatorSlice';
import { useDispatch } from 'react-redux';


function Calculator() {
  const dispatch = useDispatch()

  useEffect(()=>{
    const handleKeyDown = (e:KeyboardEvent) =>{
       const key = e.key;


      if (!/^[0-9+\-*/%.(),]$/.test(key) && !['Enter', 'Backspace', 'Escape', 'c', 'C'].includes(key)) {
        return; 
      }

       
      if (/[\d\(\)]/.test(key)) {
        dispatch(addToDisplay(key))
      }

      // Nokta veya virgül
      else if (key === '.' || key === ',') {
        dispatch(addToDisplay(','))
      }

      // Operatörler
      else if (['+', '-', '*', '/', '%'].includes(key)) {
        let value = key;
        if (key === '*') value = '×'
        if (key === '/') value = '÷'
        dispatch(addToDisplay(value))
      }

      // Enter tuşu
      else if (key === 'Enter') {
        dispatch(calculateResult())
      }

      // Backspace
      else if (key === 'Backspace') {
        dispatch(deleteValue())
      }

      // ESC veya 'c' ile temizle
      else if (key === 'Escape' || key.toLowerCase() === 'c') {
        dispatch(clearAll())
      }
    }

    window.addEventListener('keydown', handleKeyDown)


    return () => {
        window.removeEventListener('keydown', handleKeyDown)
    }

  },[dispatch])

  return (
    <div className='calculator-app'>
      <Display />
      <Buttons />
    </div>
  )
}

export default Calculator