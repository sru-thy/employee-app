import './subheader.css';

const Subheader = () => {
  return (
    <div className='subheader'>
      <div className='heading'>Create Employee</div>
      <a className='subheader-right'>
        <div className='icon-edit'>
          <img src='assets/icons/Path 327.svg' />
        </div>
        <span>Edit</span>
      </a>
    </div>
  );
};

export default Subheader;
