const graphql = require('graphql');
const student = require('./studentMutate')
const teachermutate = require('./teacherMutate')
const studentInput = require('../Input/studentInput')
const teacherInput = require('../Input/teacherInput')

let classMutate = new graphql.GraphQLObjectType({
    name:"classMutate",
    fields:{
        className:{
            type:graphql.GraphQLString,
            resolve:(rootValue,args,context) => {
                return rootValue.classname
            }
        },
        student : {
            type: student.type,
            resolve:student.resolve,
            args:{
                name: {type : graphql.GraphQLList(studentInput)}
            },
        },
        teacher: {
            type: teachermutate.type,
            resolve: teachermutate.resolve,
            args:{
                name : {type : teacherInput}
            }
        }
    }
})
let type = graphql.GraphQLList(classMutate)
const resolveMutate = (rootValue,args,context)=>{
    return args.name
}
module.exports = {
    type,
    resolveMutate
}