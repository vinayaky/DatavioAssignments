const mongoose = require("mongoose");

const detailSchema = mongoose.Schema(
  {
    user_id: {
     type:mongoose.Schema.Types.ObjectId,
     required:true,
     ref:"User",
    },
    Tittle: {
      type: String,
      required: [true, "Please add the contact name"],
    },
    price: {
      type: Number,
      required: [true, "Please add the contact email address"],
    },
    description: {
      type: String,
    },
    nrr: {
      type: Number,
    },
    ratings: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("productsDetails", detailSchema);