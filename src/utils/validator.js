export const isValidEmail = email => {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(email);
};

export const isValidPassword = password => {
  const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&])[0-9a-zA-Z!@#$%^&*]{8,}$/;
  return reg.test(password);
};

export const isNum = number => {
  const reg = /^\d+$/;
  return reg.test(number) && number.length > 0;
};

export const isFloat = number => {
  const reg = /^[+-]?([0-9]*[.])?[0-9]+$/;
  return reg.test(number) && number.length > 0;
};
export const isPhone = phone => {
  const reg = /^\+?[0-9]{3}-?([0-9]{7}|[0-9]-[0-9]{2}-[0-9]{2}-[0-9]{2}|[0-9]{3}-[0-9]{2}-[0-9]-[0-9])$/;
  return reg.test(phone) && phone.length > 0;
};

export const isEmpty = text =>
  text === undefined ? true : !(text.trim().length === 0);

export const isConfirmPassword = (password, confirmPassword) =>
  password === confirmPassword;
