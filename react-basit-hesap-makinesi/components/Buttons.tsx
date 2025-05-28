import React from 'react'
import "../css/calculator.css"
import { useDispatch } from 'react-redux';
import { addToDisplay , calculateResult, clearAll, deleteValue } from '../redux/calculatorSlice';



function Buttons() {
 const dispatch = useDispatch()    

 const buttonClick = (e: React.MouseEvent<HTMLButtonElement>) =>{
    const rawValue =   e.currentTarget.dataset.value

    if (rawValue !== undefined) {
     const payloadValue : string = rawValue
     dispatch(addToDisplay(payloadValue));
    }
 }

 const clearAllBtn = () =>{
   dispatch(clearAll())
 }
 const delete_ = () =>{
   dispatch(deleteValue())
 }


 const hesapla = () =>{
  dispatch(calculateResult())
 }

  return (
    <div className='buttons'>
            <button onClick={clearAllBtn}  className="clear">C</button>
            <button  onClick={delete_} className="delete">⌫</button>
            <button onClick={buttonClick} data-value = "%" className="operator">%</button>
            <button onClick={buttonClick} data-value = "÷" className="operator">÷</button>
            <button onClick={buttonClick} data-value = "7" className="number">7</button>
            <button onClick={buttonClick} data-value = "8" className="number">8</button>
            <button onClick={buttonClick} data-value = "9" className="number">9</button>
            <button onClick={buttonClick} data-value = "×" className="operator">×</button>
            <button onClick={buttonClick} data-value = "4" className="number">4</button>
            <button onClick={buttonClick} data-value = "5" className="number">5</button>
            <button onClick={buttonClick} data-value = "6" className="number">6</button>
            <button onClick={buttonClick} data-value = "-" className="operator">-</button>
            <button onClick={buttonClick} data-value = "3" className="number">3</button>
            <button onClick={buttonClick} data-value = "2" className="number">2</button>
            <button onClick={buttonClick} data-value = "1" className="number">1</button>
            <button onClick={buttonClick} data-value = "+" className="operator">+</button>
            <button onClick={buttonClick} data-value = "0" className="number">0</button>
            <button onClick={buttonClick} data-value = "," className="number">,</button>
            <button onClick={buttonClick} data-value = "(" className="operator">(</button>
            <button onClick={buttonClick} data-value = ")" className="operator">)</button>
            <button onClick={hesapla}  className="equals">=</button>
    </div>
  )
}

export default Buttons