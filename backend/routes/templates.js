const express = require("express");
const Template = require("../models/template");

const router = express.Router();

router.get("/", async (req, res) => {
  const templates = await Template.find();
  res.json(templates);
});

router.get("/:id", async (req, res) => {
  const template = await Template.findById(req.params.id);
  res.json(template);
});

router.post("/", async (req, res) => {
  const newTemplate = new Template(req.body);
  await newTemplate.save();
  res.status(201).json(newTemplate);
});

router.put("/:id", async (req, res) => {
  const updatedTemplate = await Template.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedTemplate);
});

module.exports = router;
