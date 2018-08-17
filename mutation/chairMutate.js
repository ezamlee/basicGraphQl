let graphql = require("graphql");

let type = new graphql.GraphQLObjectType({
    name: "chairMutate",
    fields: {
        row: {
            type: graphql.GraphQLInt,
            resolve: (rootvalue) => {
                return rootvalue.studentchairrow
            }
        },
        col: {
            type: graphql.GraphQLInt,
            resolve: (rootvalue) => {
                return rootvalue.studentchaircol
            }
        },
    }
})

resolve = (rootvalue, args, context) => {
    return rootvalue
}


module.exports = {
    type,
    resolve
}