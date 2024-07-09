import fsPromises from 'fs/promises';

export const readJSON = async (jsonPath: string, initialData: [] | Record<PropertyKey, unknown> = {}) => {
  try {
    const buffer = await fsPromises.readFile(jsonPath);
    const jsonData = buffer.toString();
    return JSON.parse(jsonData);
  } catch (error) {
    await fsPromises.writeFile(jsonPath, JSON.stringify(initialData));
    return initialData;
  }
};

export const updateJSON = (jsonPath: string, updatedData: string) => {
  try {
    return new Promise((resolve) => resolve(fsPromises.writeFile(jsonPath, updatedData)));
  } catch (error) {
    return new Promise((rejects) => rejects(`데이터베이스를 갱신하지 못했습니다. 사유: ${JSON.stringify(error)}`));
  }
};
