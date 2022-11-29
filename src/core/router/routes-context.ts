import { createContext } from 'react';

import type { RoutesConfig } from './types';

const RoutesContext = createContext<RoutesConfig>({});

export { RoutesContext };
