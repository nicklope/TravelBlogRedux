const db = require('../db')
const Comment = require('../models/Comment')
db.on('error', console.error.bind(console, 'MongoDB connect error:'))

const main = async () => {
  const comments = [
    {
      commenter: 'Anonymous',
      comment: 'Wow I love Hawaii!'
    },
    {
      commenter: 'Nick',
      comment: 'Wow I love Hawaii!'
    }
  ]
  await Comment.insertMany(comments)
  console.log('Here come some locations!')
}

const run = async () => {
  await main()
  db.close()
}
run()
