import { FC } from 'react';
import './tableRow.css';
import Status from '../status/status';
type tableRowProps = {
  employee: Object;
  onClick: (e) => void;
};

const TableRow: FC<tableRowProps> = ({ employee, onClick }) => {
  const keys = ['name', 'id', 'joiningDate', 'role', 'status', 'experience'];

  return (
    <tr className='tabled' onClick={onClick}>
      {keys.map((key) => (
        <td key={employee[key]}>
          {key === 'status' ? <Status status={employee[key]}></Status> : employee[key]}
        </td>
      ))}
      <td> Action </td>
    </tr>
  );
};

export default TableRow;
