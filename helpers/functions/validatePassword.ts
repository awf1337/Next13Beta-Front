const validatePassword = (password: string) => {
  /*
    this is the regex that validates the password to have at least 8 characters,
    1 uppercase character, 1 lowercase character, 1 number or 1 special character
  */
  const regex = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  return regex.test(password);
};

export default validatePassword;
