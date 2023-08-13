import Subheader from '../../components/subheader/subheader';
import Layout from '../../components/layout/layout';
import { useState } from 'react';
import './createEmployee.css';
import FormInput from '../../components/formInput/formInput';

const CreateEmployee = () => {
  // const [type, setType] = seState('text');
  const [details, setDetails] = useState({
    name: '',
    department: '',
    joiningDate: '',
    role: '',
    status: '',
    experience: 0,
    action: '',
    address: ''
  });
  const handleChange = (key: string, value: string) => {
    const temp = { ...details };

    temp[key] = value;

    setDetails(temp);
  };

  return (
    <Layout>
      <Subheader heading='Create Employee'></Subheader>
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
          ></FormInput>
          <FormInput
            name='status'
            label='Status'
            type='select'
            placeholder='Status'
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
        </div>
        <div className='end'>
          <input type='submit' value='Create' className='form-create' />
          <input type='submit' value='Cancel' className='form-cancel' />
        </div>
      </div>
    </Layout>
  );
};

export default CreateEmployee;
