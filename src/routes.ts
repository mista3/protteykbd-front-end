export enum ROUTES {
  HOME = '/',
  ORDER = '/order',
  CART = '/cart',
  LIKE = '/like',
  HISTORY = '/history',
  ITEM = '/item/:id',
}

export const getRouteLabel = (route: string) => {
  if (route === ROUTES.ORDER) return 'Оформление заказа';
  if (route === ROUTES.CART) return 'Корзина';
  if (route === ROUTES.LIKE) return 'Избранное';
  if (route === ROUTES.HISTORY) return 'История заказов';
  if (route === ROUTES.ITEM) return 'Товар';
  return '';
};
