const router = require("express").Router();

const { checkEmail, register } = require("../db/authQueries");
const { validateForm } = require("../utils/formValidation");
const { hashPassword, comparePassword } = require("../utils/hash");

router.post("/register", async (req, res) => {
  const { data } = req.body;

  try {
    validateForm("register", data);
    const emailCheck = await checkEmail(data.email);

    if (emailCheck.length > 0) {
      throw new Error("Email already in use!");
    }

    const hashedPassword = await hashPassword(data.password);
    data.password = hashedPassword;

    await register(data);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  const { data } = req.body;

  try {
    validateForm("login", data);
    const emailCheck = await checkEmail(data.email);

    if (emailCheck.length <= 0) {
      throw new Error("Email has not been registered!");
    }

    const compare = await comparePassword(
      data.password,
      emailCheck[0].password_hash
    );

    if (!compare) {
      throw new Error("Wrong email or password!");
    }

    res.status(201).json({ user: data.email, message: "Login successfull." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
