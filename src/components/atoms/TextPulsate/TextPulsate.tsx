// libs
import { FC, ReactNode } from 'react';

// styles
import styles from './TextPulsate.module.scss';

export interface TextPulsateProps {
  children: ReactNode;
}

const TextPulsate: FC<TextPulsateProps> = ({ children }) => {
  return <div className={styles['text-pulsate']}>{children}</div>;
};

export default TextPulsate;
