import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

const IconVolumeLow: React.FC<IconProps> = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="M15 2.5v19L9.273 17H6a5 5 0 01-.14-9.998L9.273 7 15 2.5zm-2 4.311l-3 2.115v6.147l3 2.115V6.811zm4.826 1.081c2.121 2.122 2.075 5.595-.049 7.825l-.103.105-1.414-1.414c1.428-1.428 1.508-3.65.233-5.017l-.082-.085 1.415-1.414zM8 9H6.027L5.915 9a3 3 0 00-.027 5.997L6 15h2V9z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default IconVolumeLow;
