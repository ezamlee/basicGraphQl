const graphql = require('graphql');
const studentmutate = require('./studentmutate')
const teachermutate = require('./teachermutate')


module.exports = new graphql.GraphQLObjectType({
    name: "classMutate",
    fields: {
        student: {
            type:studentmutate,
            args:graphql.GraphQLList(graphql.GraphQLString),
        },
        teacher:{
            type:teachermutate,
            args:graphql.GraphQLList(graphql.GraphQLString),
        },
        calssName:{
            type:grpahql.GraphQLString,
        }

    }
})