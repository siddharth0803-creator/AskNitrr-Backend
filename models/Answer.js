const mongoose=require('mongoose')

const answerModel= mongoose.Schema(
    {
        answer: {type: String},
        questionId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "questions",
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
        user: {type : Object},
    },
    {
        timestamp:true
    }
)

const answer=mongoose.model("answer",answerModel)
module.exports=answer