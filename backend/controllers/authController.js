const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt"); // For hashing passwords
const jwt = require("jsonwebtoken");
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists
    let user = await prisma.user.findFirst({
      where: { email },
    });

    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Create a new user
    user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    // Return the created user
    return res.status(201).json(user);
  } catch (error) {
    console.error("Signup Error:", error); // Log the error
    return res.status(500).json({ error: "An error occurred during signup" });
  }
};

// Login function
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    let user = await prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Verify the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Return the token and user data
    return res.status(200).json({ token, user });
  } catch (error) {
    console.error("Login Error:", error); // Log the error
    return res.status(500).json({ error: "An error occurred during login" });
  }
};

module.exports = { signup,login };
