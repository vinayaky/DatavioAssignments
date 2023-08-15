const asyncHandler = require("express-async-handler");
const Contact = require("../models/productModels");
// Get all  user details

const getDetails = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});

//Create New user details

const createDetails = asyncHandler(async (req, res) => {
  console.log("The request body is :", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  console.log(req.user.id);
  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user.id,
      
  });

  res.status(201).json(contact);
});