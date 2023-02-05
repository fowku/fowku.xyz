import { useCallback, useContext } from 'react';
import {
  URLSearchParamsInit,
  matchPath,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';

import { RoutesContext } from '../router/routes-context';
import type { RoutesConfig } from '../router/types';

const useRoutes: <S>() => {
  routes: RoutesConfig;
  params: URLSearchParams;
  allParams: {
    [key: string]: string | undefined;
  };
  setParams: (
    nextInit: URLSearchParamsInit,
    navigateOptions?:
      | {
          replace?: boolean;
          state?: unknown;
        }
      | undefined,
  ) => void;
  goBack: () => void;
  logout: () => void;
  reload: () => void;
  matchPath: typeof matchPath;
  changeLocation: (to: string, state?: S) => void;
  replaceLocation: (to: string, state?: S) => void;
  goToNewPage: (route: string) => void;
} = <S>() => {
  const routes = useContext(RoutesContext);
  const allParams = useParams();
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();

  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const logout = () => {
    window.location.replace('/home/logout');
  };

  const reload = () => {
    window.location.reload();
  };

  const changeLocation = (to: string, state?: S) => navigate(to, { state });

  const replaceLocation = (to: string, state?: S) =>
    navigate(to, { replace: true, state });

  const goToNewPage = (route: string) =>
    window.open(route, '_target', 'noreferrer');

  return {
    routes,
    params,
    setParams,
    allParams,
    goBack,
    logout,
    reload,
    matchPath,
    changeLocation,
    replaceLocation,
    goToNewPage,
  };
};

export { useRoutes };
