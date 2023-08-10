import { useState } from 'react';
import Input from '../../components/Input/input';
import Button from '../../components/button/button';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    if (name.length == 0 || password.length == 0) setError(true);
    else navigate('/employee');
  };

  return (
    <section>
      <div className='section1'>
        <div>
          <img src='assets/img/banner.png' className='login' />
        </div>
      </div>
      <div className='section2'>
        <div>
          <div className='logo'>
            <img src='assets/img/kv-logo.png' className='logo' />
          </div>
          <form>
            <Input
              label='Username'
              type='text'
              placeholder='username'
              value={name}
              onChange={setName}
            ></Input>
            <Input
              label='Password'
              type='password'
              placeholder='password'
              value={password}
              onChange={setPassword}
            ></Input>
            {error && <div>Provide username and Password</div>}
            <Button value='Login' onClick={submit}></Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
