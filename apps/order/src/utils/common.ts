export const omit = <T>(obj: T, keys: (keyof T)[]) => {
  const result = { ...obj };

  keys.forEach((key) => {
    delete result[key];
  });

  return result;
};

export const getKeys = <T extends object>(object: T) => {
  return Object.keys(object) as (keyof T)[];
};
