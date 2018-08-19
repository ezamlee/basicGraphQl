const graphql = require('graphql');
const studentmutate = require('./studentmutate')
const chairMutate = require("./chairmutate")


module.exports = new graphql.GraphQLObjectType({
    name: "classMutate",
    fields: {
        student: {
            type: studentmutate,
            calssName: {
                type: graphql.GraphQLString,
            },
            name:{
                type:graphql.GraphQLString,
            },
            age:{
                type:graphql.GraphQLInt
            },
            chair:{
                type:chairMutate
            },
            args: {
                calssName: {
                    type: graphql.GraphQLString,
                },
                name:{
                    type:graphql.GraphQLString,
                },
                age:{
                    type:graphql.GraphQLInt
                },
                chair:{
                    type:chairMutate
                }
            },
            resolve:(args,rootvalue,context)=>{
                return rootvalue
            }
        },
    },
})