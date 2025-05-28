import { createSlice } from '@reduxjs/toolkit'
import { evaluate } from "mathjs";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CalculatorState {
 value : string
}

const initialState : CalculatorState = {
 value : ""
}


export const calculatorSlice = createSlice({
 name : "hesap-makinesi",
 initialState,
 reducers : {
  addToDisplay : (state,action:PayloadAction<string>) =>{
    state.value += action.payload
  },
  clearAll : (state) =>{
    state.value = ""
  },
  deleteValue : (state) =>{
    state.value = state.value.slice(0,-1)
  },
  calculateResult: (state) => {
    state.value = state.value.replace(/÷/g, '/').replace(/×/g, '*').replace(/,/g,".")
    try {
      const result = evaluate(state.value)

      if (typeof result === "number") {
          state.value = result.toLocaleString("tr-TR");
      } else {
          state.value = result.toString();
      }

    } catch (error) {
        state.value = "Hata";
    }
  }
}
})


export const {addToDisplay,clearAll,deleteValue,calculateResult} = calculatorSlice.actions

export default calculatorSlice.reducer