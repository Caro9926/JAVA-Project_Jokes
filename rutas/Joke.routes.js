const express = require( 'express' );
const JokesRouter = express.Router();
const ControllerJokes = require( '../controladores/joke.controller');

JokesRouter.get( '/', ControllerJokes.listJokes );
JokesRouter.get( '/:_id', ControllerJokes.idJoke );
JokesRouter.post( '/new', ControllerJokes.newJoke );
JokesRouter.put( '/update/:_id', ControllerJokes.updateJoke );
JokesRouter.delete( '/delete/:_id', ControllerJokes.deleteJoke );
module.exports = JokesRouter;