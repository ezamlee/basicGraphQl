const graphql = require('graphql');
const Class = require('./classMutate')
const classMutate = require('../Input/classInputName');

let schoolMutate = new graphql.GraphQLObjectType({
    name:"schoolMutate",
    fields:{
        class:{
            type: Class.type, 
            args:{
                name:{type: graphql.GraphQLList(classMutate) }
            },
            resolve:Class.resolveMutate
        },
        schoolName :{
            type : graphql.GraphQLString,
            resolve : (rootValue,args,context)=>{
                return rootValue.schoolname
            }
        }
    }
})
let type = graphql.GraphQLList(schoolMutate);
const resolveMutation = (rootValue,args,context)=> {
    return args.name
}
module.exports={
    type,
    resolveMutation
}