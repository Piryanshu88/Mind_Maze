const express = require("express");
const { QuestionModel } = require("../model/question.model");
const questionRouter = express.Router();

questionRouter.get("/", async (req, res) => {
  const category = req.query.category;
  const page = Math.max(0, req.query.page);
  const limit = req.query.limit || 1;
  try {
    if (category && page) {
      const users = await QuestionModel.find({ category: category })
        .limit(limit)
        .skip(limit * page);
      const userLength = await QuestionModel.find({
        category: category,
      }).count();
      res.status(201).json({
        status: "success",
        data: users,
        userId: req.body.authorID,
        totalCount: userLength,
      });
    } else if (category) {
      const users = await QuestionModel.find({ category: category }).limit(
        limit
      );
      const userLength = await QuestionModel.find({
        category: category,
      }).count();
      res.status(201).json({
        status: "success",
        data: users,
        userId: req.body.authorID,
        totalCount: userLength,
      });
    } else if (page) {
      const users = await QuestionModel.find()
        .limit(limit)
        .skip(page * limit);
      const userLength = await QuestionModel.find().count();
      res.status(201).json({
        status: "success",
        data: users,
        userId: req.body.authorID,
        totalCount: userLength,
      });
    } else {
      const users = await QuestionModel.find();
      const userLength = await QuestionModel.find().count();
      res.status(201).json({
        status: "success",
        data: users,
        userId: req.body.authorID,
        totalCount: userLength,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong", status: "error" });
  }
});

questionRouter.post("/add", async (req, res) => {
  try {
    const users = new QuestionModel(req.body);
    users.save();
    res.status(201).json({
      status: "success",
      data: "question added successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong", status: "error" });
  }
});

questionRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const users = await QuestionModel.find({ _id: id });
    const userLength = await QuestionModel.find({ _id: id });
    res.status(201).json({
      status: "success",
      data: users,
      totalCount: userLength,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong", status: "error" });
  }
});

questionRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const users = await QuestionModel.findByIdAndUpdate({ _id: id }, req.body);

    res.status(201).json({
      status: "success",
      message: "question updated successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong", status: "error" });
  }
});

questionRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const users = await QuestionModel.findByIdAndDelete({ _id: id });

    res.status(201).json({
      status: "success",
      message: "question deleted successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong", status: "error" });
  }
});

module.exports = {
  questionRouter,
};
