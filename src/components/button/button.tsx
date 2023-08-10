import type { FC } from 'react';

interface ButtonProps {
  value: string;
  onClick: (e) => void;
}

const Button: FC<ButtonProps> = ({ value, onClick }) => {
  return (
    <div className='relative'>
      <input type='submit' value={value} className='form-login' onClick={onClick} />
    </div>
  );
};

export default Button;
