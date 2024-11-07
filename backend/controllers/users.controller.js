import User from "../models/user.model.js";

export const getUsersForSitebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUser = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filteredUser);
  } catch (error) {
    console.error("error in getUsersForSitebar: ", error.message);
    res.statud(500).json({ error: "Internal server error" });
  }
};
