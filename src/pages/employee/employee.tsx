import { useState } from 'react';
import './styles.css';
import Subheader from '../../components/subheader/subheader';
import Layout from '../../components/layout/layout';
import TableHeader from '../../components/tableHeader/tableHeader';
import TableRow from '../../components/tableRow/tableRow';
// import employees from '../../employeeTest';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import DeletePopup from '../../components/deletePopup/deletePopup';

const EmployeePage = () => {
  const [icon] = useState('pencil');
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const onClick = (id) => {
    navigate(`/employee/${id}`);
  };
  const employeesData = useSelector((state: any) => {
    return state.employees;
  });
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
    dispatch({
      type: 'EMPLOYEE:EDIT',
      payload: {
        id
      }
    });
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
        {employeesData.map((employee) => (
          <TableRow
            key={employee.id}
            employee={employee}
            onClick={() => onClick(employee.id)}
            onDelete={() => handleDelete(employee.id)}
            onEdit={() => handleEdit(employee.id)}
            // onDelete={() => {
            //   setOpen(true);
            // }}
            // onEdit={() => navigate(`edit/${employee.id}`)}
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
