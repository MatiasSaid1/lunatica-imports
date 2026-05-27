require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("./models/User");

mongoose.connect(process.env.MONGO_URI);

const createAdmin = async () => {
  try {
    const hashedPassword = await bcrypt.hash(
      "admin123",
      10
    );

    const user = new User({
      email: "admin@lunatica.com",
      password: hashedPassword,
    });

    await user.save();

    console.log("Admin creado 🚀");

    process.exit();
  } catch (error) {
    console.log(error);

    process.exit(1);
  }
};

createAdmin();