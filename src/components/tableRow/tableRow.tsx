import { FC } from 'react';
import './tableRow.css';
import Status from '../status/status';
type tableRowProps = {
  employee: Object;
  onClick: (e) => void;
};

const TableRow: FC<tableRowProps> = ({ employee, onClick }) => {
  return (
    <tr className='tabled' onClick={onClick}>
      {Object.keys(employee).map((i) => (
        <td key={employee[i]}>
          {i === 'status' ? <Status status={employee[i]}></Status> : employee[i]}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
