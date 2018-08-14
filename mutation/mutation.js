const graphql = require('graphql');
const schoolMutate = require('./schoolMutate')

module.exports = new graphql.GraphQLObjectType({
    name: "mutate",
    fields: {
        name: "school",
        type: graphql.GraphQLList(schoolMutate),
        args: {
            name: { type: graphql.GraphQLString }
        },
        resolve: (rootValue, args, context) => {
            return args.name;
        }
    }
})
