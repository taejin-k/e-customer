export const QUERY_KEY_BANNER_PREFIX = ['banner'];
export const QUERY_KEY_GATE_PREFIX = ['gate'];
export const QUERY_KEY_FEED_PREFIX = ['feed'];
export const QUERY_KEY_CART_PREFIX = ['cart'];

export const QUERY_KEY_BANNER = {
  BANNER_LIST: [...QUERY_KEY_BANNER_PREFIX, 'bannerList'] as const,
};

export const QUERY_KEY_GATE = {
  GATE_LIST: [...QUERY_KEY_GATE_PREFIX, 'gateList'] as const,
};

export const QUERY_KEY_FEED = {
  FEED_LIST: [...QUERY_KEY_FEED_PREFIX, 'feedList'] as const,
};

export const QUERY_KEY_CART = {
  CART_LIST: [...QUERY_KEY_CART_PREFIX, 'cartList'] as const,
};
