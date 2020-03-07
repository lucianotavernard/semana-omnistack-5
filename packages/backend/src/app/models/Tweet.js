import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
  author: String,
  content: String,
  likes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default model('User', UserSchema)
