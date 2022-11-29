// libs
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface RouteWrapperProps {
  children: React.ComponentType;
  pageTitleTranslationKey?: string;
}

const RouteWrapper: FC<RouteWrapperProps> = ({
  children: Component,
  pageTitleTranslationKey,
}) => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t(pageTitleTranslationKey ?? '');
  }, [pageTitleTranslationKey, t]);

  return <Component />;
};

export default RouteWrapper;
