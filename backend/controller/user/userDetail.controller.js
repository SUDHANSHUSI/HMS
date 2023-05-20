const userModel = require("../../model/user.model");

const userDetail = async (req, res) => {
  try {
    let userId = req.userId;
    if (!userId) {
      return res.status(404).json({
        message: "Invalid Token..",
      });
    }
    // let user = await userModel.findById(userId);
    let users = await userModel.find();

    if (users.length > 0) {
      // Count the total number of users
      const totalUsers = users.length;

      return res.status(200).json({
        totalUsers: totalUsers,
        users: users,
      });
    } else {
      return res.status(404).json({
        message: "No users found.",
      });
    }
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: "Something went wrong.",
    });
  }
};

module.exports = userDetail;

