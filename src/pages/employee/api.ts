import baseApi from '../../services/index';

interface Employee {
  name: string;
  department: string;
  joiningDate: string;
  role: string;
  status: string;
  experience: number;
  address: string;
  id: number;
}

const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployees: builder.query<Employee[], void>({
      query: () => ({
        url: '/employees',
        method: 'get'
      })
    })
  })
});

export default employeeApi;

export const { useGetEmployeesQuery, useLazyGetEmployeesQuery } = employeeApi;