const mysql = require('../db/conn')
const { schema } = mysql

const User = mysql.model(
    'User',
    new schema({
        name:{
            type: String,
            required: true
        },
        email:{
            true: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        image:{
            type:String,
        },
        phone:{
            type:String,
            reqiored: true,
        },
        
    },
    //timetamps vai criar uma data, para poder alterar
    {timestamps: true},
 )
)

module.exports = User