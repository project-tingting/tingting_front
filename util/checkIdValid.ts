export const checkIdValid = (id: string): boolean => {
  const regExp = /^[a-z]+[a-z0-9]{5,15}$/g;
  return regExp.test(id);
};

export const checkSchoolEmailValid = (email: string): boolean => {
  const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return regExp.test(email);
};

export const checkPhoneNumValid = (phoneNum: string): boolean => {
  const regExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
  return regExp.test(phoneNum);
};
