import './tets.css';

const Test = () => {
  const employee = {
    id: 1,
    name: 'Sruthy',
    username: 'sruthy',
    experience: 1,
    departmentId: '2',
    role: 'user',
    joiningDate: '11/02/2012'
  };

  return (
    <td>
      {Object.values(employee).map((i) => (
        <tr key={i}>{i}</tr>
      ))}
    </td>
  );
};

export default Test;
