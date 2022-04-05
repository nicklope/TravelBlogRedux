const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Location = new Schema(
  {
    locationName: { type: String, required: true },
    locationImage: { type: String, required: true },
    locationOverview: { type: String, required: true },
    locationComments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Location', Location)
