const mapping: Record<string, string> = {
  businesses: 'business',
  dietitians: 'dietitian',
  menus: 'menu',
  schedules: 'schedule',
  subscriptions: 'subscription',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
