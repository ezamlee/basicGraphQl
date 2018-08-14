const graphql = require('graphql');
module.exports = new graphql.GraphQLObjectType({
    name: "chairMutate",
    fields: {
        name:{
            type:graphql.GraphQLString
        },
        subject:{
            type:graphql.GraphQLString
        }
    }
})