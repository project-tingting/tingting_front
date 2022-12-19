export const checkIdValid = (id: string): boolean => {
  const regExp = /^[a-z]+[a-z0-9]{5,15}$/g;
  return regExp.test(id);
};
