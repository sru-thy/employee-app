import type { FC } from 'react';
import './styles/global.css';
import Login from './pages/login/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeePage from './pages/employee/employee';
import Test from './pages/test/test';
const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/employee' element={<EmployeePage />} />
        <Route path='/employee/:id' element={<EmployeePage />} />
        <Route path='/' element={<Test />} />
      </Routes>
    </BrowserRouter>

    // <Login></Login>
  );
};

export default App;
