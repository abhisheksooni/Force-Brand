import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value:0,
    onClickBtn:false,
}
 
export const MainSlice = createSlice({
    name:'MainSlice',
    initialState,
    reducers:{
            ClickBtn:(state)=>{
                state.onClickBtn != onClickBtn
                console.log("ok ji ");
            },
    }
})

export const { ClickBtn } = MainSlice.actions

export default MainSlice.reducer