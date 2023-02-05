import { FC, ReactNode } from 'react';

import styles from './TextPulsate.module.scss';

export interface TextPulsateProps {
  children: ReactNode;
}

const TextPulsate: FC<TextPulsateProps> = ({ children }) => {
  return <span className={styles['text-pulsate']}>{children}</span>;
};

export default TextPulsate;
