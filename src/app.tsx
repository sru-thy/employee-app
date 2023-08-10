import type { FC } from 'react';
import './styles/global.css';
import Login from './pages/login/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Employee from './pages/employee/employee';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/employee' element={<Employee />} />
      </Routes>
    </BrowserRouter>

    // <Login></Login>
  );
};

export default App;
