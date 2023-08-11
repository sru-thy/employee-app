import { useState } from 'react';
import './employeeDetails.css';
import Subheader from '../../components/subheader/subheader';
import Layout from '../../components/layout/layout';
import { useParams } from 'react-router-dom';
import employees from '../../employeeTest';
import Status from '../../components/status/status';

const EmployeeDetails = () => {
  const [icon] = useState('pencil');
  const { id } = useParams();
  const employee = employees.find((emp) => emp.id == Number(id));

  console.log(employee);

  return (
    <Layout>
      <Subheader heading='Employee Details' iconText='Edit' iconImg={icon}></Subheader>
      <div className='detailsCard'>
        <div className='wr'>
          <span>Employee Name</span>
          <div>{employee.name}</div>
        </div>
        <div className='wr'>
          <span>Joining Date</span>
          <div>{employee.joiningDate}</div>
        </div>
        <div className='wr'>
          <span>Experience</span>
          <div>{employee.experience}</div>
        </div>
        <div className='wr'>
          <span>Role</span>
          <div>{employee.role}</div>
        </div>
        <div className='wr'>
          <span>Status</span>
          <div>
            <Status status={employee.status}></Status>
          </div>
        </div>
        <div className='wr'>
          <span>Employee ID</span>
          <div>{employee.id}</div>
        </div>
        <div className='wr'>
          <span>Address</span>
          <div>Mock Address</div>
        </div>
      </div>
    </Layout>
  );
};

export default EmployeeDetails;
