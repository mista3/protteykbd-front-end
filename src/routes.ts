export enum ROUTES {
  HOME = '/',
  ORDER = '/order',
  CART = '/cart',
  LIKE = '/like',
  HISTORY = '/history',
  ITEM = '/item',
}

export const getRouteLabel = (route: string) => {
  if (route === ROUTES.ORDER) return 'Оформление заказа';
  if (route === ROUTES.CART) return 'Корзина';
  if (route === ROUTES.LIKE) return 'Избранное';
  if (route === ROUTES.HISTORY) return 'История заказов';
  if (`/${route.split('/')[0]}` === ROUTES.ITEM) return 'Товар';
  return '';
};
