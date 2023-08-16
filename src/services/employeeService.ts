import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const employeeService = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:3000/api' }),
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: () => ({
        url: '/employees',
        method: 'get'
      })
    })
  })
});

export const { useGetEmployeesQuery } = employeeService;
