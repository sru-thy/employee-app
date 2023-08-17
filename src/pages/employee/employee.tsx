import { useState } from 'react';
import './styles.css';
import Subheader from '../../components/subheader/subheader';
import Layout from '../../components/layout/layout';
import TableHeader from '../../components/tableHeader/tableHeader';
import TableRow from '../../components/tableRow/tableRow';
// import employees from '../../employeeTest';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import DeletePopup from '../../components/deletePopup/deletePopup';
import { useGetEmployeesQuery } from './api';

const EmployeePage = () => {
  const [icon] = useState('pencil');
  const [open, setOpen] = useState(false);

  const { data: employeesData } = useGetEmployeesQuery();

  console.log('data', employeesData);
  const navigate = useNavigate();
  const onClick = (id) => navigate(`/employee/${id}`);

  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch({
      type: 'EMPLOYEE:DELETE',
      payload: {
        id
      }
    });
  };
  const handleEdit = (id: string) => {
    navigate(`edit/${id}`);
  };

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
        {employeesData &&
          employeesData.data.map((employee) => (
            <TableRow
              key={employee.id}
              employee={employee}
              onClick={() => onClick(employee.id)}
              onDelete={() => handleDelete(String(employee.id))}
              onEdit={() => handleEdit(String(employee.id))}
              // onDelete={() => {
              //   setOpen(true);
              // }}
            />
          ))}
      </table>
      {open ? (
        <DeletePopup onConfirm={() => {}} onClose={() => setOpen(false)}></DeletePopup>
      ) : null}
    </Layout>
  );
};

export default EmployeePage;
