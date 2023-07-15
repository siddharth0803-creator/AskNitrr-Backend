const express = require('express')
const router = express.Router()

const answerDB = require('../models/Answer')

router.post('/',async (req,res)=>{
    const {answer,questionId, user}=req.body
    try{
        const answers= await answerDB.create({
            answer,
            questionId,
            user
        })
        if(answers){
            res.status(201).json({
                answer:answers.answer,
                questionId:answers.questionId,
                user: answers.user
            })
        }
        else{
            res.status(400)
            throw new Error("Failed to add answer")
        }
    }catch(e){
        res.status(500)
        throw new Error("Internal Server Error")
    }
})


module.exports = router