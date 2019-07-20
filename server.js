const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors')

const GraphQLSchem = require('./GraphQLSchem.js')

const app = express();

// Allow cors-origin
app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema:GraphQLSchem,
    graphiql:true
}));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));