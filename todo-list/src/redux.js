import configureStore, { createSlice } from '@reduxjs/toolkit'


//Create an state
const initialTask={
    addTask:[],
}

// Created Reducer

createSlice({
    name:"todoapplication",
    initialState:initialTask,
    reducers:{
        addTheTask:(state, action) =>{
            state.addTask.push(action.payload)
        }
    }
})

//Created an store

const myTodoStore = configureStore()