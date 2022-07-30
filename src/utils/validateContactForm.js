export const validateContactForm = (values) => {
  const { firstName, lastName, phoneNum, email } = values;
  const errors = {};

  // Name (first and last) check
  if (!firstName) {
    errors.firstName = "Required";
  } else if (firstName.length < 2) {
    errors.firstName = "Must be at least 2 characters.";
  } else if (firstName.length > 16) {
    errors.firstName = "Must be 15 characters or less.";
  }

  if (!lastName) {
    errors.lastName = "Required";
  } else if (lastName.length < 2) {
    errors.lastName = "Must be at least 2 characters.";
  } else if (lastName.length > 16) {
    errors.lastName = "Must be 15 characters or less.";
  }

  // Want to enforce (XXX) XXX - XXXX with dashes and parenthesis being optional
  const phoneReg = /\(*[0-9]{3,3}\)*\s*-*\s*[0-9]{3,3}\s*-*\s*[0-9]{4,4}/;
  if (!phoneReg.test(phoneNum)) {
    errors.phoneNum = "The phone number should be a ten digit number.";
  } else if (phoneNum.length < 10) {
    errors.phoneNum = "Phone number needs to include area code.";
  }

  // Make sure email address makes sense
  if (!email.includes("@") || !email.includes(".")) {
    errors.email = "Please entere a valid email address.";
  }

  return errors;
};
