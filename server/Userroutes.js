const express = require("express");
const UserModel = require("./UserModels");
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const user_datum = await UserModel.find({});
    res.status(200).json(user_datum);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});
router.get("/:email", async (req, res) => {
  const { email } = req.params;
  try {
    const user_data = await UserModel.findOne({ email: email });
    if (!user_data) {
      return res.status(404).json({ error: "No such user found." });
    } else {
      return res.status(200).json(user_data);
    }
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});
router.post("/", async (req, res) => {
  const { Fullname, email, phone, pass } = req.body;
  try {
    const user_data = await UserModel.create({ Fullname, email, phone, pass });
    res.status(200).json(user_data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.delete("/:id", (req, res) => {
  res.json({ mes: "deleted this documents" });
});
router.put("/:email", async (req, res) => {
  const { email } = req.params;
  try {
    const user_data = await UserModel.findOneAndUpdate(
      { email: email },
      {
        ...req.body,
      }
    );
    if (!user_data) {
      return res.status(404).json({ error: "No such user found." });
    } else {
      return res.status(200).json(user_data);
    }
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});
module.exports = router;
