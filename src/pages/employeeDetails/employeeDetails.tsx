import { useState } from 'react';
import './employeeDetails.css';
import Subheader from '../../components/subheader/subheader';
import Layout from '../../components/layout/layout';
import { useParams } from 'react-router-dom';
import employees from '../../employeeTest';
import DetailsItem from '../../components/empDetailsItem/empDetailsItem';

const EmployeeDetails = () => {
  const [icon] = useState('pencil');
  const { id } = useParams();
  const employee = employees.find((emp) => emp.id == Number(id));

  console.log(employee);

  return (
    <Layout>
      <Subheader heading='Employee Details' iconText='Edit' iconImg={icon}></Subheader>
      <div className='detailsCard'>
        <DetailsItem label='Employee Name' value={employee.name} type='text' />
        <DetailsItem label='Joining Date' value={employee.joiningDate} type='text' />
        <DetailsItem label='Experience' value={String(employee.experience)} type='text' />
        <DetailsItem label='Role' value={employee.role} type='text' />
        <DetailsItem label='Status' value={employee.status} type='status' />
        <DetailsItem label='Address' value='Mock Address' type='text' />
        <DetailsItem label='Employee ID' value={String(employee.id)} type='text' />
      </div>
    </Layout>
  );
};

export default EmployeeDetails;
