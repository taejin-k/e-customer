import { randomNumber } from './randomNumber';

export const shuffle = <T extends Array<unknown> = unknown[]>(array: T) => {
  const copied = structuredClone(array);

  for (let index = copied.length - 1; index > 0; index--) {
    const generatedRandomIndex = randomNumber(index + 1);
    [copied[index], copied[generatedRandomIndex]] = [copied[generatedRandomIndex], copied[index]];
  }

  return copied;
};
