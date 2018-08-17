const graphql = require('graphql')


const studentname = new graphql.GraphQLInputObjectType({
    name : "studentInfo",
    fields:{
        studentname : {type : graphql.GraphQLString},
        studentage : {type:graphql.GraphQLInt},
        studentchairrow : {type:graphql.GraphQLInt},
        studentchaircol : {type:graphql.GraphQLInt},
    }
})
module.exports = studentname;