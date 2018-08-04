let graphql = require("graphql");

let type = new graphql.GraphQLObjectType({
    name: "teacher",
    fields: {
        name: { type: graphql.GraphQLString },
        subject: { type: graphql.GraphQLString },

    }
})
resolve = (rootvalue, args, context) => {
    return {
        name : "Mahmoud",
        subject : "Teacher"
    }
}


module.exports = {
    type,
    resolve
}