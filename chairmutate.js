const graphql = require('graphql');
module.exports = new graphql.GraphQLObjectType({
    name: "chairMutate",
    fields: {
        row:{
            type:graphql.GraphQLInt
        },
        col:{
            type:graphql.GraphQLInt
        }
    }
})