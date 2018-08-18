const graphql = require("graphql");
const school = require("./school");
const mutation = require('./mutation/mutation')

let schema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: "schoolStruct",
        fields: {
            school: {
                type: school.type,
                args: {
                    name:{type:graphql.GraphQLList(graphql.GraphQLString)}
                },
                resolve: school.resolve
            }
        }
    }),
    mutation
})

module.exports = schema