import { Home } from '@pages';

import type { RoutesConfig } from '../types';

const routesConfig: RoutesConfig = {
  home: {
    pathTemplate: '/',
    pageTitle: 'pageNames.hello',
    component: Home,
  },
};

export default routesConfig;
