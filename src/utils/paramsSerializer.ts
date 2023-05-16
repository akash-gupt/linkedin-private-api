import { castArray, isArray, isPlainObject, mapValues, reduce } from 'lodash';
import { stringify } from 'querystring';

const encodeFilter = (value: string | string[], key: string) => encodeURIComponent(`${key}->${castArray(value).join('|')}`);

export const paramsSerializer = (params: Record<string, string | Record<string, string>>): string => {
  const encodedParams = mapValues(params, value => {
    if (!isArray(value) && !isPlainObject(value)) {
      return value.toString();
    }

    if (isArray(value)) {
      return `List(${value.join(',')})`;
    }

    const encodedList = reduce(
      value as Record<string, string>,
      (res, filterVal, filterKey) => `${res}${res ? ',' : ''}${encodeFilter(filterVal, filterKey)}`,
      '',
    );

    return `List(${encodedList})`;
  });

  return stringify(encodedParams, undefined, undefined, {
    encodeURIComponent: uri => uri,
  });
};

export const graphqlParamSerializer = (params: Record<string, unknown>): string => {
  const encodeValue = (value: unknown): string => {
    if (!isArray(value) && !isPlainObject(value)) {
      return (<string>value).toString();
    }

    if (isArray(value)) {
      const arrayEncodedValues = value.map(x => encodeValue(x));
      return `List(${arrayEncodedValues.join(',')})`;
    }

    const object = <Record<string, unknown>>value;
    const objectKeys = Object.keys(object);
    const objectEncodedValues = objectKeys.map(k => `${k}:${encodeValue(object[k])}`);

    return `(${objectEncodedValues.join(',')})`;
  };

  const encodedParams = mapValues(params, value => {
    return encodeValue(value);
  });

  return stringify(encodedParams, undefined, undefined, {
    encodeURIComponent: uri => uri,
  });
};
