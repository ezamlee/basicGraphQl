const graphql = require('graphql')


const studentname = new graphql.GraphQLInputObjectType({
    name : "teachername",
    fields:{
        teachername : {type : graphql.GraphQLString},
        subject : {type:graphql.GraphQLString}
    }
})
module.exports = studentname;