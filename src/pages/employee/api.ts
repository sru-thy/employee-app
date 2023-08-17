import baseApi from '../../services/index';

// interface Employee {
//   name: string;
//   department: string;
//   joiningDate: string;
//   role: string;
//   status: string;
//   experience: number;
//   address: string;
//   id: number;
// }

const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployees: builder.query<any, void>({
      query: () => ({
        url: '/employees',
        method: 'get'
      }),
      providesTags: ['employee.list']
    }),
    deleteEmployees: builder.mutation({
      query: (id) => ({
        url: `/employees/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['employee.list']
    })
  })
});

export default employeeApi;

export const { useGetEmployeesQuery, useLazyGetEmployeesQuery, useDeleteEmployeesMutation } = employeeApi;
