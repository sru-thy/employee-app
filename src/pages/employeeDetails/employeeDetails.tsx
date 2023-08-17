import { useState } from 'react';
import './employeeDetails.css';
import Subheader from '../../components/subheader/subheader';
import Layout from '../../components/layout/layout';
import { useNavigate, useParams } from 'react-router-dom';
// import employees from '../../employeeTest';
import DetailsItem from '../../components/empDetailsItem/empDetailsItem';
import { useGetEmployeeByIDQuery } from './api';

const EmployeeDetails = () => {
  const [icon] = useState('pencil');
  const { id } = useParams();

  const { data: employee } = useGetEmployeeByIDQuery(id);

  console.log('employee', employee);
  const navigate = useNavigate();

  return (
    <Layout>
      <Subheader
        heading='Employee Details'
        iconText='Edit'
        iconImg={icon}
        onClick={() => navigate(`/employees/edit/${id}`)}
      ></Subheader>
      <div className='detailsCard'>
        {employee && (
          <>
            <DetailsItem label='Employee Name' value={employee.data.name} type='text' />
            <DetailsItem label='Joining Date' value={employee.data.joiningDate} type='text' />
            <DetailsItem label='Experience' value={String(employee.data.experience)} type='text' />
            <DetailsItem label='Role' value={employee.data.role} type='text' />
            <DetailsItem label='Status' value={employee.data.status} type='status' />
            <DetailsItem label='Address' value={employee.data.address.line1} type='text' />
            <DetailsItem label='Employee ID' value={String(employee.data.id)} type='text' />
          </>
        )}
      </div>
    </Layout>
  );
};

export default EmployeeDetails;
