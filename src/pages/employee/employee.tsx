import Sidebar from '../../components/sidebar/sidebar';
import Header from '../../components/header/header';
import { useState } from 'react';
import './styles.css';

const employee = () => {
  const [type, setType] = useState('text');

  return (
    <section>
      <Sidebar></Sidebar>
      <div className='sectionRight'>
        <Header></Header>
        <div className='feed'>
          <div className='heading'>Create Employee</div>
          <div className='form'>
            <div className='input-flex'>
              <div className='wr'>
                <label htmlFor='name'>Employee Name</label>
                <input type='text' id='name' placeholder='Employee Name' />
              </div>
              <div className='wr'>
                <label htmlFor='id'>Employee ID</label>
                <input type='text' id='ID' placeholder='Employee ID' />
              </div>
              <div className='wr'>
                <label htmlFor='id'>Joining Date</label>
                <input
                  type={type}
                  name='date'
                  placeholder='Joining Date'
                  onFocus={() => setType('date')}
                />
              </div>
              <div className='wr'>
                <label htmlFor='role'>Role</label>
                <select id='role'>
                  <option value='' disabled selected>
                    Choose Role
                  </option>
                </select>
              </div>
              <div className='wr'>
                <label htmlFor='status'>Status</label>
                <select id='status'>
                  <option value='' disabled selected>
                    Status
                  </option>
                </select>
              </div>
              <div className='wr'>
                <label htmlFor='exp'>Experience</label>
                <input type='text' id='exp' placeholder='Experience' />
              </div>
              <div className='wr'>
                <label htmlFor='address'>Address</label>
                <input type='text' id='address' placeholder='Address' />
              </div>
            </div>
            <div className='end'>
              <input type='submit' value='Create' className='form-create' />
              <input type='submit' value='Cancel' className='form-cancel' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default employee;
