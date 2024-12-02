export const getEnumKeyFromValue = (value: string, enumObject: any): string | undefined => {
  return Object.keys(enumObject).find((key) => enumObject[key] === value);
};
