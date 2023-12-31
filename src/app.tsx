import type { FC } from 'react';
import './styles/global.css';
import Login from './pages/login/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeePage from './pages/employee/employee';
import EmployeeDetails from './pages/employeeDetails/employeeDetails';
import CreateEmployee from './pages/createEmployee/createEmployee';
const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/employee' element={<EmployeePage />} />
        <Route path='/employee/:id' element={<EmployeeDetails />} />
        <Route path='/employee/create' element={<CreateEmployee />} />
        <Route path='/employee/edit/:id' element={<CreateEmployee />} />
      </Routes>
    </BrowserRouter>

    // <Login></Login>
  );
};

export default App;
