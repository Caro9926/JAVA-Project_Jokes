const mongoose = require( 'mongoose' );
//Nombre de la base de datos
mongoose.connect( 'mongodb://localhost/jokes_db', {useNewUrlParser: true} )
    .then( () => {
        console.log( "Connected Database" );
    })
    .catch( err => {
        console.log( "There was an error connecting to the database" );
    });

mongoose.connection.on( 'error', (err) => {
    console.log( 'Mongoose error: ' + err );
    process.exit( 0 );
});

mongoose.connection.on( 'disconnected', () => {
    console.log( "Database offline" ); 
});