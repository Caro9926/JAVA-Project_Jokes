const {Jokes} = require('../modelos/joke.model');

const listJokes = (request, response) => {
    Jokes.find()
    .then( listjokes => {
        return response.status( 200 ).json( listjokes );
    })
    .catch( err => {
        response.statusMessage = "There was an error searching for the joke" + err;
        return response.status( 400 ).end();
    });
}

const idJoke = (request, response) => {

    const {_id} = request.params; 

    Jokes.find( { _id } )
        .then( (idJokes) => {
            return response.status( 200 ).json( idJokes ); 
        })
        .catch( err => {
            response.statusMessage = "There was an error searching for the joke " + err;
            return response.status( 400 ).end();
        });
}

const newJoke = (request , response) => {

    const { setup, punchline } = request.body 

    if( !setup || !punchline ){
        response.statusMessage = "For create a new joke it is necessary to send 'setup', 'punchline'.";
        return response.status( 406 ).end();
    }
    else {
        const nuevoJokes = {
            setup, punchline 
        };

        Jokes.create( nuevoJokes )
        .then( jokeNuevo => {
            return response.status( 201 ).json( jokeNuevo );
        })
        .catch( err => { 
            console.log( err );
            response.statusMessage = "There was an error inserting a new joke " + err;
            return response.status( 400 ).json(err);
        });
    }
}

const updateJoke = (request, response) => {

    const { setup, punchline } = request.body 
    
    const { _id } = request.params;
    
    const UpdateJoke = {
        setup, punchline
    };
    
    Jokes.findOneAndUpdate( {_id}, {$set : UpdateJoke}, {new : true} )
    .then( (newJoke) => {
        return response.status( 202 ).json( newJoke );
    })
    .catch( err => {
        response.statusMessage = "There was an error updating the joke" + err;
        return response.status( 400 ).end();
    }); 
    
            
}

const deleteJoke  = (request, response) => {

    const {_id} = request.params;

    Jokes.deleteOne({_id})
    .then (() => {
        return response.status(204).end();
    })
    .catch(err => {
        response.statusMessage = "There was an error removing the joke" + err;
        return response.status( 400 ).end();
    });
}

const ControladorJokes = {
    listJokes,
    idJoke,
    newJoke,
    updateJoke,
    deleteJoke
};

module.exports = ControladorJokes;