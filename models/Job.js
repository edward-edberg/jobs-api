const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      requires: [true, "Please provide company name"],
      maxlength: 50,
    },
    position: {
      type: String,
      requires: [true, "Please provide position"],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please probive user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
