import './formInput.css';
import type { FC } from 'react';

type FormInputPropTypes = {
  label: string;
  type: 'text' | 'password' | 'select';
  placeholder: string;
  value: string;
  onChange: (e) => void;
};

const FormInput: FC<FormInputPropTypes> = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className='wr'>
      <label>{label}</label>
      {type != 'select' ? (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(evt) => onChange(evt.target.value)}
          className='formInputCreate'
        />
      ) : (
        <select>
          <option value={placeholder} disabled selected>
            {placeholder}
          </option>
        </select>
      )}
    </div>
  );
};

export default FormInput;
