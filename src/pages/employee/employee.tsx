import { useState } from 'react';
import './styles.css';
import Subheader from '../../components/subheader/subheader';
import Layout from '../../components/layout/layout';
import TableHeader from '../../components/tableHeader/tableHeader';
import TableRow from '../../components/tableRow/tableRow';
// import employees from '../../employeeTest';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const EmployeePage = () => {
  const [icon] = useState('pencil');
  const navigate = useNavigate();
  const onClick = (id) => {
    navigate(`/employee/${id}`);
  };
  const employeesData = useSelector((state: any) => {
    return state.employees;
  });

  return (
    <Layout>
      <Subheader
        heading='Employee List'
        iconText='Create employee'
        iconImg={icon}
        onClick={() => navigate(`/employee/create`)}
      ></Subheader>
      <table className='table'>
        <TableHeader></TableHeader>
        {employeesData.map((employee) => (
          <TableRow key={employee.id} employee={employee} onClick={() => onClick(employee.id)} />
        ))}
      </table>
    </Layout>
  );
};

export default EmployeePage;
