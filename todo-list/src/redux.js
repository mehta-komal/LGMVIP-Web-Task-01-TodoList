import configureStore, { createSlice } from '@reduxjs/toolkit';

//Create an state
const initialTask = {
  addTask: [],
};

// Created Reducer

const todoSlice = createSlice({
  name: 'todoapplication',
  initialState: initialTask,
  reducers: {
    addTheTask: (state, action) => {
      state.addTask.push(action.payload);
    },
  },
});
export const addTheTask = todoSlice.actions.addTheTask;
const todoReducer = todoSlice.reducer;
const combineReducer = {
  todo: todoReducer,
};

//Created an store

export const myTodoStore = configureStore({
  reducer: combineReducer,
});
