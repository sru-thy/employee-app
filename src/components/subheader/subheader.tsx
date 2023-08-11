import './subheader.css';
import type { FC } from 'react';

type subheaderProps = {
  heading: string;
  iconText: string;
  iconImg: string;
};

const Subheader: FC<subheaderProps> = ({ heading, iconText, iconImg }) => {
  return (
    <div className='subheader'>
      <div className='heading'>{heading}</div>
      <a className='subheader-right'>
        <div className='icon-edit'>
          <img src={`assets/icons/${iconImg}.svg`} />
        </div>
        <span>{iconText}</span>
      </a>
    </div>
  );
};

export default Subheader;
