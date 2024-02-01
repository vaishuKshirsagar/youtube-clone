import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    email: { type: String, required: true },
    name: { type: String },
    desc: { type: String },
    joinedOn: { type: Date, default: Date.now },
    // PHONE_NUMBER: { type: String, required: true, unique: true }, // New field for phone number
    // otp: { type: Number },
})

export default mongoose.model("User", userSchema)