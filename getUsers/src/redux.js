// import { configureStore, createSlice } from '@reduxjs/toolkit';

// //Create a store

// const initialData ={
//     usersDetails:[]
// }
// //create an reducer

// const usersData = createSlice({
//     name:'getusersdata',
//     initialState:initialData,
//     reducers:{
//         ShowUsers:(state, action)=>{
//             state.show=action.payload
//         }
//     }
// })

// export const ShowUsers = todoSilce.actions;
// const userReducer = todoSlice.reducer;
// const combineReducer ={
//     user:userReducer,
// }
// //create an store
// export const myUsersDetails = configureStore({
//     reducer:combineReducer
// });

import { createStore, combineReducers } from 'redux';

const initialData = {
  productDetails: [],
};

export const addTheProduct = (info) => {
  return {
    type: 'ADD_PRODUCTS',
    payload: info,
  };
};

const ecommerceReducer = (state = initialData, actionAndData) => {
  if (actionAndData.type == 'ADD_PRODUCTS') {
    return {
      productDetails: actionAndData.payload,
    };
  }
  return state;
};

const combineReducer = combineReducers({
  ecommerce: ecommerceReducer,
});

export const myProductStore = createStore(combineReducer);
