// libs
import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

// components
import { RouterSwitch } from './RouterSwitch';

// config
import routes from '../routes';

export const Router: FC = () => (
  <BrowserRouter>
    <RouterSwitch routes={routes} />
  </BrowserRouter>
);
