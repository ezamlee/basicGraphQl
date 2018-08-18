const graphql = require('graphql');
// const chairType = require('./chairmutate')


module.exports = new graphql.GraphQLObjectType({
    name: "studentMutate",
    fields: {
        name: {
            type:graphql.GraphQLString,
            args:{
                type:graphql.GraphQLString
            },
        },
        age:{
            type:graphql.GraphQLInt,
            args:{
                type:graphql.GraphQLInt
            }
        },
        
        // chair:{
        //     type:chairType,
        //     args:{
        //        type: graphql.GraphQLList(graphql.GraphQLInt)
        //     }
        // }
    }
})