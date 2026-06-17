import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
{
  name: String,

  email: {
    type: String,
    unique: true,
  },

  phone: {
    type: String,
    unique: true,
  },

  role: {
    type: String,
    default: "user",
  },

  isVerified: {
    type: Boolean,
    default: false,
  },
},
{ timestamps: true }
);
export default mongoose.models.User ||
  mongoose.model("User", UserSchema);