import mongoose from "mongoose";

const poertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      default: "Anonymous",
    },

    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Poetry =
  mongoose.models.poetry ||
  mongoose.model("poetry", poertySchema);

export default Poetry;