import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import type { RoutesConfig } from '../types';
import RouteWrapper from './RouteWrapper';

export interface RouterSwitchProps {
  routes: RoutesConfig;
}

export const RouterSwitch: FC<RouterSwitchProps> = ({ routes }) => {
  return (
    <Routes>
      {Object.keys(routes).map(route => {
        const { component, redirectTo, children } = routes[route];

        // if route has children, render recursively
        if (children !== undefined) {
          return (
            <Route
              path={routes[route].pathTemplate}
              key={`${route}_parent`}
              element={
                <RouterSwitch
                  routes={{
                    [route]: {
                      ...routes[route],
                      children: undefined,
                    },
                    ...routes[route].children,
                  }}
                />
              }
            />
          );
        }

        // render component
        if (component !== undefined) {
          return (
            <Route
              path={routes[route].pathTemplate}
              key={route}
              element={
                <RouteWrapper pageTitleTranslationKey={routes[route].pageTitle}>
                  {component}
                </RouteWrapper>
              }
            />
          );
        }

        // if there's no component, use redirectTo
        if (redirectTo !== undefined) {
          return (
            <Route
              path={routes[route].pathTemplate}
              key={route}
              element={<Navigate to={redirectTo} />}
            />
          );
        }

        return null;
      })}
    </Routes>
  );
};
