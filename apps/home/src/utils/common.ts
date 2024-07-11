export const omit = <T>(obj: T, keys: (keyof T)[]) => {
  const result = { ...obj };

  keys.forEach((key) => {
    delete result[key];
  });

  return result;
};
