import './subheader.css';
import type { FC } from 'react';

type subheaderProps = {
  heading: string;
  iconText?: string;
  iconImg?: string;
  onClick?: (e) => void;
};

const Subheader: FC<subheaderProps> = ({ heading, iconText, iconImg, onClick }) => {
  console.log(onClick);

  return (
    <div className='subheader' onClick={onClick}>
      <div className='heading'>{heading}</div>
      {iconText ? (
        <a className='subheader-right'>
          <div className='icon-edit'>
            <img src={`assets/icons/${iconImg}.svg`} />
          </div>
          <span>{iconText}</span>
        </a>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Subheader;
