const mysql = require('../db/conn')
const { Schema } = mysql

const Pet = mysql.model(
    'Pet',
    new Schema ({
            nome:{
                type:String
            },
            age:{
                type: Number
                require: true
            },
            weight:{
                type: Number,
                require:true
            },
            image:{
                type: Array,
                require: true
            },
            avalable:{
                type: Boolean
            },
            user: Object,
            adopter: Object
        },{timestamps:true}),
)
module.exports = Pet