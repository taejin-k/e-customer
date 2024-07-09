export const _1_SECOND = 1_000;

export const delay = (second = _1_SECOND) => new Promise((resolve) => setTimeout(resolve, second));
