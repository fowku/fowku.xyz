// libs
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// components
import { TextPulsate } from '@atoms';
import { HomeLayout } from '@templates';

// assets
// import happyAnimation from '../../../assets/images/happy.webp';

// styles
import styles from './Home.module.scss';

const Home: FC = () => {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage('en');
  }, []);

  return (
    <div className={styles.home}>
      <HomeLayout>
        <TextPulsate>
          <div className={styles['hello-text']}>
            {t('home.hello')}&nbsp;
            <span className={styles['hello-text__kamoji']}>{'o(>< )o'}</span>
          </div>
        </TextPulsate>

        {/* <div className={styles.bottom}>
          <img src={happyAnimation} className={styles['happy-animation']} />
        </div> */}
      </HomeLayout>
    </div>
  );
};

export default Home;
