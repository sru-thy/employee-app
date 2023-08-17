import { useState } from 'react';
import './styles.css';
import Subheader from '../../components/subheader/subheader';
import Layout from '../../components/layout/layout';
import TableHeader from '../../components/tableHeader/tableHeader';
import TableRow from '../../components/tableRow/tableRow';
import { useNavigate } from 'react-router-dom';
import DeletePopup from '../../components/deletePopup/deletePopup';
import { useDeleteEmployeesMutation, useGetEmployeesQuery } from './api';

const EmployeePage = () => {
  const [icon] = useState('pencil');
  const [id, setId] = useState('');
  const [open, setOpen] = useState(false);

  const { data: employeesData } = useGetEmployeesQuery();
  const [deleteEmp] = useDeleteEmployeesMutation();

  const navigate = useNavigate();
  const onClick = (id) => navigate(`/employees/${id}`);

  const handleDelete = (id) => {
    deleteEmp(id);
    setOpen(false);
    navigate('/employees');
  };

  const handleEdit = (id: string) => {
    navigate(`/employees/edit/${id}`);
  };

  return (
    <Layout>
      <Subheader
        heading='Employee List'
        iconText='Create employee'
        iconImg={icon}
        onClick={() => navigate(`/employees/create`)}
      ></Subheader>
      <table className='table'>
        <TableHeader></TableHeader>
        {employeesData &&
          employeesData.data.map((employee) => (
            <TableRow
              key={employee.id}
              employee={employee}
              onClick={() => onClick(employee.id)}
              onEdit={() => handleEdit(String(employee.id))}
              onDelete={() => {
                setOpen(true);
                setId(employee.id);
              }}
            />
          ))}
        {open ? (
          <DeletePopup
            onConfirm={() => handleDelete(id)}
            onClose={() => setOpen(false)}
          ></DeletePopup>
        ) : null}
      </table>
    </Layout>
  );
};

export default EmployeePage;
