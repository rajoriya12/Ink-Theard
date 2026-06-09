import mongoose from "mongoose";

const contectFormSchema = new mongoose.Schema( {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ContactForm =
  mongoose.models.ContactForm ||
  mongoose.model("ContactForm", contectFormSchema);

export default ContactForm;