const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
//allow cross- origin requests
app.use(cors());

//connect to mlab database
// make sure to place to pass your db string as a param on the mongoose.connect function
mongoose.connect('');
mongoose.connection.once('open', ()=>{
  console.log("Connected to database");
});



app.use('/graphql', graphqlHTTP({
  schema:schema,
  graphiql:true
}));

app.listen(4000, function(){
  console.log('now listening for requests: 4000');
});
