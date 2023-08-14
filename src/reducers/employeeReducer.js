const initialstate = [
  {
    name: 'Sruthy',
    id: 1,
    joiningDate: '11/02/2012',
    role: 'user',
    status: 'ACTIVE',
    experience: 1,
    action: 'action'
  },
  {
    name: 'Vaishnav',
    id: 2,
    joiningDate: '11/02/2012',
    role: 'user',
    status: 'INACTIVE',
    experience: 1,
    action: 'action'
  },
  {
    name: 'Jithin',
    id: 3,
    joiningDate: '11/02/2012',
    role: 'user',
    status: 'PROBATION',
    experience: 1,
    action: 'action'
  }
];

const employeeReducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'EMPLOYEE:CREATE': {
      const newState = [...initialstate, action.payload.employee];

      return newState;
    }
    case 'EMPLOYEE:DELETE': {
      const updatedState = state.filter((emp) => emp.id != action.payload.id);

      return updatedState;
    }
    default:
      return state;
  }
};

export default employeeReducer;
