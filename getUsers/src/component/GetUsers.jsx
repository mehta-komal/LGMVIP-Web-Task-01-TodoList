// import Axios from 'axios'
// import ShowUsers from '../redux'
// import {useDispatch, useSelector} from 'react-redux'
// const GetUsers = () => {
//     const dispatch = useDispatch();
//     const usersData = useSelector(function (output) {
//         return output.user.usersDetails;
//       });

//     const handelGetUsers=()=>{
//         Axios.get("https://reqres.in/api/users?page=1")
//         .then(function(output)
//         {
//             dispatch(ShowUsers(output.data.data))
//         })
//     }
//   return (
//     <div>
//       <button onClick={handelGetUsers}>Get Users</button>
//     </div>
//   )
// }

// export default GetUsers

import React from 'react';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addTheProduct } from '../redux';
const GetUsers = () => {
  const dispatch = useDispatch();
  const productsArray = useSelector(function (output) {
    return output.ecommerce.productDetails;
  });
  const getTheData = () => {
    Axios.get('https://reqres.in/api/users?page=1')
      .then(function (output) {
        dispatch(addTheProduct(output.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button onClick={getTheData}>Get Users</button>
      {productsArray.map(function (i) {
        console.log(i);
        return (
          <div>
            <img src={i.avatar}></img>
            <h6>{i.first_name} {i.last_name}</h6>
            <span>{i.email}</span>
          </div>
        );
      })}
    </div>
  );
};

export default GetUsers;


