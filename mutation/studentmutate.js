const graphql = require('graphql');
const chairType = require('./chairmutate')


module.exports = new graphql.GraphQLObjectType({
    name: "studentMutate",
    fields: {
        name: {
            type:graphql.GraphQLString,
        },
        age:{
            type:graphql.GraphQLInt,
        },
        chair:{
            type:chairType,
            args:graphql.GraphQLList(graphql.GraphQLInt)
        }
    }
})