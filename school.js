const graphql = require('graphql');
const classs = require('./class')
const _ = require('lodash');
const data = require('./data/storage');
// console.log(Array.isArray(data)); 
let school = new graphql.GraphQLObjectType({
    name:"school",
    fields:{
        class:{
            type:classs.type,
            args:{
                name:{type:graphql.GraphQLList(graphql.GraphQLString)}
            },
            resolve:classs.resolve
        },
        schoolName :{
            type : graphql.GraphQLString,
            resolve : (rootValue,__args,__context)=>{
                return rootValue
            }
        }
    }
})

let type = new graphql.GraphQLList(school)

const resolve = (_rootValue,args,_context)=>{
    let target = args.name;
    let result = [];
    if (target) {
        data.forEach(element => {
            if (element.schoolName === target[0]) {
                console.log([element])
                result.push(element)
                return result
            } 
        });
    }else{
        return 0
    }
}
module.exports = {
    type,
    resolve
}