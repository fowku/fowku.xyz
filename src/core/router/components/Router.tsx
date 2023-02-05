import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import routes from '../routes';
import { RouterSwitch } from './RouterSwitch';

export const Router: FC = () => (
  <BrowserRouter>
    <RouterSwitch routes={routes} />
  </BrowserRouter>
);
