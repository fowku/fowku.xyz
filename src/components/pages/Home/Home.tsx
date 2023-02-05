import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { TextPulsate } from '@atoms';

import { HomeLayout } from '@templates';

import styles from './Home.module.scss';

const Home: FC = () => {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage('en');
  }, []);

  return (
    <HomeLayout>
      <div className={styles.home}>
        <TextPulsate>
          <div className={styles['hello-text']}>
            {t('home.hello')}&nbsp;
            <span className={styles['hello-text__kamoji']}>{'o(>< )o'}</span>
          </div>
        </TextPulsate>

        {/* <div className={styles.bottom}>
          <img src={happyAnimation} className={styles['happy-animation']} />
        </div> */}
      </div>
    </HomeLayout>
  );
};

export default Home;
