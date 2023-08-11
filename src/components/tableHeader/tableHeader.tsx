import './tableHeader.css';

const TableHeader = () => {
  const headerData = [
    'Employee Name',
    'Employee ID',
    'Joining Date',
    'Role',
    'Status',
    'Experience',
    'Action'
  ];

  return (
    <th className='tableHeader'>
      {headerData.map((item) => (
        <td key={item}>{item}</td>
      ))}
    </th>
  );
};

export default TableHeader;
