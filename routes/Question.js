const express = require('express')
const router = express.Router()

const questionDB = require('../models/Question')

router.post('/',async (req,res)=>{
    const {questionName,questionUrl, user}=req.body
    try{
        const question = await questionDB.create({
            questionName,
            questionUrl,
            user
        })
        if(question){
            res.status(201).json({
            questionName:question.questionName,
            questionUrl:question.questionUrl,
            user: question.user
        })
        }else{
            res.status(400)
            throw new Error("Failed To add question")
        }
    }catch(e){
        res.status(500)
        throw new Error("Internal server error")
    }
})

router.get('/',async (req,res)=>{
    try{
        const question = await questionDB.aggregate([
            {
              $lookup: {
                from: "answers", 
                localField: "_id", 
                foreignField: "questionId",
                as: "allAnswers"
              },
            },
        ]).exec()

        if(question){
            res.status(201).send(question)
        }
        else{
            res.status(400)
            throw new Error("Cannot get all Questions")
        }
    }catch(e){
        res.status(500)
        throw new Error("Internal Server Error")
    }
})

module.exports=router