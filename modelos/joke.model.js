const mongoose = require( 'mongoose' );

const JokeSchema = new mongoose.Schema({
    setup : {
        type : String,
        required : [true, "The setup must be provided"],
        minlength : [10, "The setup must have at least 10 characters"]
    },
    punchline : {
        type : String,
        required : [true, "The punchline must be provided!"],
        minlength : [3, "The punchline must have at least 3 characters"]
    }
});

const Jokes = mongoose.model( 'jokes', JokeSchema );

module.exports = {
    Jokes,
    JokeSchema
}