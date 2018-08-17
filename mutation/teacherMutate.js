let graphql = require("graphql");

let type = new graphql.GraphQLObjectType({
    name: "teacherMutate",
    fields: {
        name: { 
            type: graphql.GraphQLString ,
            resolve:(rootvalue)=>{
                return rootvalue.teachername
            }
        },
        subject: {
             type: graphql.GraphQLString ,
             resolve:(rootvalue)=>{
                 return rootvalue.subject
             }
            },

    }
})
resolve = (rootvalue, args, context) => {
    return args.name
}


module.exports = {
    type,
    resolve
}