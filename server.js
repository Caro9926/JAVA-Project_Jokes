const JokesRouter = require( './rutas/Joke.routes' );
const express = require("express");
const app = express();

// req is short for request
// res is short for response
require( './config/config' );


app.use( express.json() );
app.use( '/api/jokes', JokesRouter );//prefijo


app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

app.listen(8000, () =>{
  console.log("Server is locked and loaded on port 8080");
});


