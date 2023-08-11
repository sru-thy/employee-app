import Subheader from '../../components/subheader/subheader';
import Layout from '../../components/layout/layout';
import { useState } from 'react';
import './createEmployee.css';
import FormInput from '../../components/formInput/formInput';

const CreateEmployee = () => {
  // const [type, setType] = useState('text');
  const [name, setName] = useState('');

  return (
    <Layout>
      <Subheader heading='Create Employee'></Subheader>
      <div className='form'>
        <div className='input-flex'>
          <FormInput
            label='Employee Name'
            type='text'
            placeholder='Employee name'
            value={name}
            onChange={setName}
          ></FormInput>
          <FormInput
            label='Joining Date'
            type='text'
            placeholder='Joining Date'
            value={name}
            onChange={setName}
          ></FormInput>
          <FormInput
            label='Experience'
            type='text'
            placeholder='Experienece'
            value={name}
            onChange={setName}
          ></FormInput>
          <FormInput
            label='Department'
            type='select'
            placeholder='Choose Department'
            value={name}
            onChange={setName}
          ></FormInput>
          <FormInput
            label='Role'
            type='select'
            placeholder='Choose Role'
            value={name}
            onChange={setName}
          ></FormInput>
          <FormInput
            label='Status'
            type='select'
            placeholder='Status'
            value={name}
            onChange={setName}
          ></FormInput>
          <FormInput
            label='Address'
            type='text'
            placeholder='Address'
            value={name}
            onChange={setName}
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
