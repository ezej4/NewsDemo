import { INew } from '../entities';

const newListToObject = (arr: INew[]) =>
  arr.reduce((accumulator, value) => {
    return { ...accumulator, [value.id]: value };
  }, {});

export default newListToObject;
