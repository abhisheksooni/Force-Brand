import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // value:0,
    cartItems:[
        {
            id:'14',
            name:"ptanahi",
            img:"https://lh3.googleusercontent.com/HC6QxVesbB4M8jJ9ynHXc607cAdyxNvaQ0_3TOVZ8VV3cKoV8u3NdkfAGt4golqpW14n0FRO3cWyk5MSuOZVL0yQhpc=s1280-w1280-h800",
            price:"233"        
        },
    ]
}
 
export const MainSlice = createSlice({
    name:'MainSlice',
    initialState,
    reducers:{
            ClickBtn:(state)=>{
                state.onClickBtn != onClickBtn
                console.log("ok ji ");
            },
            AddCartItem:(state,action)=>{
                state.cartItems.push(action.payload)
            },
            RemoveCartItem:(state,action)=>{
                return state.cartItems.filter((i)=>i.id !== action.payload)
                
                
            },
    }
})

export const { ClickBtn,AddCartItem,RemoveCartItem } = MainSlice.actions

export default MainSlice.reducer