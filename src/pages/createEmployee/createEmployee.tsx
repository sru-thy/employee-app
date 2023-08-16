import Subheader from '../../components/subheader/subheader';
import Layout from '../../components/layout/layout';
import { useEffect, useState } from 'react';
import './createEmployee.css';
import FormInput from '../../components/formInput/formInput';
import { useNavigate, useParams } from 'react-router-dom';
import employees from '../../employeeTest';

const CreateEmployee = () => {
  const [details, setDetails] = useState({
    name: '',
    department: '',
    joiningDate: '',
    role: '',
    status: '',
    experience: 0,
    address: ''
  });

  const handleChange = (key: string, value: string) => {
    const temp = { ...details };

    temp[key] = value;
    setDetails(temp);
  };

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/employee');
  };

  const { id } = useParams();
  const isEditing = !!id;

  useEffect(() => {
    const employee = employees.find((emp) => emp.id == Number(id));

    if (employee) setDetails(employee);
  }, [id]);

  return (
    <Layout>
      <Subheader heading={isEditing ? 'Edit Employee' : 'Create Employee'}></Subheader>
      <div className='form'>
        <div className='input-flex'>
          <FormInput
            name='name'
            label='Employee Name'
            type='text'
            placeholder='Employee name'
            value={details.name}
            onChange={handleChange}
          ></FormInput>
          <FormInput
            name='joiningDate'
            label='Joining Date'
            type='text'
            placeholder='Joining Date'
            value={details.joiningDate}
            onChange={handleChange}
          ></FormInput>
          <FormInput
            name='experience'
            label='Experience'
            type='text'
            placeholder='Experienece'
            value={String(details.experience)}
            onChange={handleChange}
          ></FormInput>
          <FormInput
            name='department'
            label='Department'
            type='select'
            placeholder='Choose Department'
            options={['1', '2', '3', '4']}
            value={details.department}
            onChange={handleChange}
          ></FormInput>
          <FormInput
            name='role'
            label='Role'
            type='select'
            placeholder='Choose Role'
            value={details.role}
            onChange={handleChange}
            options={['admin', 'user']}
          ></FormInput>
          <FormInput
            name='status'
            label='Status'
            type='select'
            placeholder='Status'
            options={['ACTIVE', 'PROBATION', 'INACTIVE']}
            value={details.status}
            onChange={handleChange}
          ></FormInput>
          <FormInput
            name='address'
            label='Address'
            type='text'
            placeholder='Address'
            value={details.address}
            onChange={handleChange}
          ></FormInput>
          {isEditing ? (
            <FormInput
              name='employeeid'
              label='Employee ID'
              type='text'
              placeholder=''
              value={id}
            ></FormInput>
          ) : null}
        </div>
        <div className='end'>
          <input
            type='submit'
            value={isEditing ? 'Save' : 'Create'}
            className='form-create'
            onClick={handleSubmit}
          />
          <input type='submit' value='Cancel' className='form-cancel' />
        </div>
      </div>
    </Layout>
  );
};

export default CreateEmployee;
