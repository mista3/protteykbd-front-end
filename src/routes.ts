export enum ROUTES {
  HOME = '/',
  ORDER = '/order',
  CART = '/cart',
  LIKE = '/like',
  ITEM = '/item',
}

export const getRouteLabel = (route: string) => {
  if (route === ROUTES.ORDER) return 'Оформление заказа';
  if (route === ROUTES.CART) return 'Корзина';
  if (route === ROUTES.LIKE) return 'Избранное';
  if (`/${route.split('/')[0]}` === ROUTES.ITEM) return 'Товар';
  return '';
};
