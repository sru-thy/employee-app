import { FC } from 'react';
import './deletePopup.css';

type deletePopupTypes = {
  onClose: () => void;
};

const DeletePopup: FC<deletePopupTypes> = ({ onClose }) => {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <img src='assets/icons/close.svg' className='close' onClick={onClose} />
        <div className='popHeading'>Are you sure ?</div>
        <div className='popSubheading'>Do you really want to delete employee ?</div>
        <div className='popupButton'>
          <input type='submit' value='Confirm' className='pop-confirm' />
          <input type='submit' value='Cancel' className='pop-cancel' />
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
