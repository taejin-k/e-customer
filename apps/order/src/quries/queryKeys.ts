export const QUERY_KEY_CART_PREFIX = ['cart'];
export const QUERY_KEY_RECOMMENDED_PRODUCT_PREFIX = ['recommendedProduct'];

export const QUERY_KEY_CART = {
  CART_LIST: [...QUERY_KEY_CART_PREFIX, 'cartList'] as const,
};

export const QUERY_KEY_RECOMMENED_PRODUCT = {
  RECOMMENDED_PRODUCT_LIST: [...QUERY_KEY_RECOMMENDED_PRODUCT_PREFIX, 'recommendedProductList'] as const,
};
