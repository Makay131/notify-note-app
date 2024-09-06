import mongoose from 'mongoose';

//get createdAt and updatedAt with timestamps
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    categories: {
      type: [
        {
          name: { type: String, required: true },
          color: { type: String, required: true },
        },
      ],
      default: [
        { name: 'Projects', color: '#ffcc61' },
        { name: 'Business', color: '#ff9745' },
        { name: 'Personal', color: '#47d8ff' },
      ],
    },
    resetPasswordToken: String,
    resetPasswordTokenExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
