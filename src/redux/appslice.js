import { createSlice } from "@reduxjs/toolkit";

export const Appslice = createSlice({
    name:"appslice",
    initialState:{
        firstname:"",
        lastname:"",
        friends:[],
        count:10,
        products:[]
    },

    reducers:{
        increaseCount:(state)=>{
            state.count++
        },

        decreaseCount:(state)=>{
            state.count--
        },

        updateFirstname:(state, action)=>{
            state.firstname=action.payload
        }
    }
})


export default Appslice.reducer

export const {increaseCount, decreaseCount, updateFirstname}= Appslice.actions