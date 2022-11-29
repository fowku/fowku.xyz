export interface RouteConfig {
  pathTemplate: string;
  component?: React.FC;
  redirectTo?: string;
  pageTitle?: string; // key for i18next
  children?: RoutesConfig;
}

export type RoutesConfig = Record<string, RouteConfig>;
