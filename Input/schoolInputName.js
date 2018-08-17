const graphql = require('graphql')


const schoolname = new graphql.GraphQLInputObjectType({
    name : "schoolname",
    fields:{
        schoolname : {type : graphql.GraphQLString}
    }
})
module.exports = schoolname;