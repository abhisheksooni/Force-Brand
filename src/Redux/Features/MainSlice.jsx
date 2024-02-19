import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    // {
    //     id:'14',
    //     name:"ptanahi",
    //     img:"https://lh3.googleusercontent.com/HC6QxVesbB4M8jJ9ynHXc607cAdyxNvaQ0_3TOVZ8VV3cKoV8u3NdkfAGt4golqpW14n0FRO3cWyk5MSuOZVL0yQhpc=s1280-w1280-h800",
    //     price:233,        
    // },
]
 
 
export const MainSlice = createSlice({
    name:'MainSlice',
    initialState,
    reducers:{
           
            AddCartItem:(state,action)=>{
                state.push(action.payload)
            },
            RemoveCartItem:(state,action)=>{
                return state.filter((i)=>i.id !== action.payload)
                              
            },
            TotalItem:(state,action)=>{
              return  state.length
            }
    }
})

export const {TotalItem, ClickBtn,AddCartItem,RemoveCartItem, } = MainSlice.actions

export default MainSlice.reducer