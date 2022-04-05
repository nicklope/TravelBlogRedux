const { Router } = require('express')
const router = Router()
const controllers = require('../controllers/controllers')

router.get('/', (req, res) => res.send('This is root!'))
router.get('/locations', controllers.getLocation)
router.get('/locations/:id', controllers.getLocationById)
router.post('/createcomment', controllers.createComment)
router.put('/updatecomment/:id', controllers.updateComment)
router.delete('/comment/:id', controllers.deleteComment)
module.exports = router
