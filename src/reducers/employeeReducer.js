import { addEmployee, editEmployee } from '../actions/employeeActions';
import { createReducer } from '@reduxjs/toolkit';

const initialstate = [
  {
    name: 'Sruthy',
    id: 1,
    joiningDate: '11/02/2012',
    role: 'user',
    status: 'ACTIVE',
    experience: 1,
    address: 'address',
    department: '1'
  },
  {
    name: 'Vaishnav',
    id: 2,
    joiningDate: '11/02/2012',
    role: 'user',
    status: 'INACTIVE',
    experience: 1,
    address: 'address',
    department: '2'
  },
  {
    name: 'Jithin',
    id: 3,
    joiningDate: '11/02/2012',
    role: 'user',
    status: 'PROBATION',
    experience: 1,
    address: 'address',
    department: '3'
  }
];

const employeeReducer = createReducer(initialstate, (builder) => {
  builder.addCase(addEmployee, (state, action) => {
    return [...state, action.payload];
  });
  builder.addCase(editEmployee, (state, action) => {
    const index = state.findIndex((emp) => emp.id == action.payload.id);

    state[index] = { ...action.payload };

    return state;
  });
});

// const employeeReducer = (state = initialstate, action) => {
//   switch (action.type) {
//     case 'EMPLOYEE:CREATE': {
//       const newState = [...initialstate, action.payload];

//       return newState;
//     }
//     case 'EMPLOYEE:DELETE': {
//       const updatedState = state.filter((emp) => emp.id != action.payload.id);

//       return updatedState;
//     }
//     case 'EMPLOYEE:EDIT': {
//       const updatedState = [...initialstate, action.payload];

//       return updatedState;
//     }
//     default:
//       return state;
//   }
// };

export default employeeReducer;
