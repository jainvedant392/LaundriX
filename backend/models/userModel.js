const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      minlength: [8, "Username must be at least 8 characters long"],
      required: [true, "Please provide a username"],
      unique: [true, "Username already taken"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: [true, "Email already taken"],
      validate: {
        validator: validator.isEmail,
        message: "Invalid email",
      },
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters long"],
      validate: {
        validator: function (value) {
          // At least one uppercase letter, one lowercase letter, one digit, and one special character
          return /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/g.test(value);
        },
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character",
      },
    },
    confirmPassword: {
      type: String,
      required: [true, "Please confirm password"],
      validate: {
        validator: function (value) {
          return value === this.password;
        },
        message: "Passwords do not match",
      },
    },
  },
  {
    timestamps: true,
    collection: "User",
  }
);

module.exports = mongoose.model("User", userSchema);
