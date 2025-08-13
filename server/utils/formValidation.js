const isEmpty = (data) => Object.values(data).some((e) => e === "");
const isEmail = (value) => /\S+@\S+\.\S+/.test(value);
const minLength = (value, length) => value.length >= length;
const passCheck = (pass, confirmPass) => pass === confirmPass;

exports.validateForm = (form, data) => {
  if (isEmpty(data)) {
    throw new Error("All fields are required!");
  }

  if (!isEmail(data.email)) {
    throw new Error("Please enter a valid email!");
  }

  if (form === "register") {
    if (!minLength(data.password, 6)) {
      throw new Error("Password must be at least 6 characters!");
    }

    if (!passCheck(data.password, data.confirmPassword)) {
      throw new Error("Passwords do not match!");
    }
  }
};
