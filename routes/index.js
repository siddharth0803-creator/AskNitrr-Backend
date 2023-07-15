const express= require('express')
const router = express.Router()

const questionRouter = require('./Question')
const answerRouter = require('./Answer')

router.get('/',(req,res)=>{
    res.send("Hello")
})

router.use('/questions',questionRouter)
router.use('/answers',answerRouter)
module.exports = router