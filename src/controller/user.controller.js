const UserModel = require("../models/user");

const getAllUser = async (req, res) => {
  try {
    const [data] = await UserModel.getAllUser();
    res.json({
      message: "GET all users success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan",
      error: error,
    });
  }
};

const createNewUser = (req, res) => {
  res.json({
    message: "CREATE new user",
  });
};

module.exports = {
  getAllUser,
  createNewUser,
};
