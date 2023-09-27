const mapping: Record<string, string> = {
  pharmacies: 'pharmacy',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
