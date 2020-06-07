import mongoose from "mongoose";

const User = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    mobile_number: {
      type: String,
    },
    created_at: {
      type: Date,
    },
    is_active: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", User);
