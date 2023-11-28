const SignUp = require("../models/Signup");
const register = async (req, res) => {
  // Rest of your login route code...
  const { username, email, password, password2 } = req.body;

  const signupUser = new SignUp({
    username,
    email,
    password,
  });

  try {
    const register = await signupUser.save();
    console.log("succesful");
    return res.redirect("/login");
    console.log("succesful");
  } catch (error) {
    res.json({ message: "error occured" });
  }
};

module.exports = { register };
