import { createAction } from '@reduxjs/toolkit';

type addEmployeeType = {
  id?: string;
  name: string;
  department: string;
  joiningDate: string;
  role: string;
  status: string;
  experience: number;
  address: string;
};

const addEmployee = createAction<addEmployeeType>('EMPLOYEE:CREATE');
const editEmployee = createAction<addEmployeeType>('EMPLOYEE:EDIT');

export { addEmployee, editEmployee };
