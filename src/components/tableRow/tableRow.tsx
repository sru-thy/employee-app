import { FC } from 'react';
import './tableRow.css';
import Status from '../status/status';
type tableRowProps = {
  employee: Object;
  onClick: (e) => void;
  onEdit: (e) => void;
  onDelete: (e) => void;
};

const TableRow: FC<tableRowProps> = ({ employee, onClick, onEdit, onDelete }) => {
  const keys = ['name', 'id', 'joiningDate', 'role', 'status', 'experience'];

  return (
    <tr className='tabled'>
      {keys.map((key) => (
        <td key={employee[key]} onClick={onClick}>
          {key === 'status' ? <Status status={employee[key]}></Status> : employee[key]}
        </td>
      ))}
      <td className='img-td'>
        <img src={`assets/icons/delete.svg`} onClick={onDelete} />
        <img src={`assets/icons/pencil-edit.svg`} onClick={onEdit} />
      </td>
    </tr>
  );
};

export default TableRow;
