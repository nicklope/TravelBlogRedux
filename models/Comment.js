const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema(
  {
    commenter: { type: String, required: true },
    comment: { type: String, required: true },

    location: { type: Schema.Types.ObjectId, ref: 'Location' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Comment', Comment)
