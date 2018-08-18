const graphql = require('graphql');
const studentmutate = require('./studentmutate')
// const teachermutate = require('./teachermutate')


module.exports = new graphql.GraphQLObjectType({
    name: "classMutate",
    fields: {
        student: {
            type: studentmutate,
            args: {
                students: graphql.GraphQLList(graphql.GraphQLString)
            },
        },
        calssName: {
            type: graphql.GraphQLString,
        },
    },
})