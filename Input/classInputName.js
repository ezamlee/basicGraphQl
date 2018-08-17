let graphql = require("graphql");
module.exports = new graphql.GraphQLInputObjectType({
    name:"className",
    fields:{
        classname : {type:graphql.GraphQLString}
    }

})