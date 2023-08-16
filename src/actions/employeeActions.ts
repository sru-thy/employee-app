import { createAction } from '@reduxjs/toolkit';

type addEmployeeType = {
  name: string;
  department: string;
  joiningDate: string;
  role: string;
  status: string;
  experience: number;
  action: string;
  address: string;
};

const addEmployee = createAction<addEmployeeType>('EMPLOYEE.CREATE');
