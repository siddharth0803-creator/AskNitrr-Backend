const mongoose=require('mongoose')

const questionModel= mongoose.Schema(
    {
        questionName: {type: String},
        questionUrl: {type: String},
        createdAt: {
        type: Date,
        default: Date.now()
        },
        answers: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "answers"
        },
        user: {type: Object}
    },
    {
        timestamp:true
    }
)

const question=mongoose.model("question",questionModel)
module.exports=question