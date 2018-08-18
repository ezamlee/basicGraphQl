const graphql = require('graphql');
const classmutate = require('./classmutate')

module.exports = new graphql.GraphQLObjectType({
    name:"schoolMutate",
    fields:{
        class:{
            type: graphql.GraphQLString, 
            args:{
                // as a test set a class name 
                name:{type: graphql.GraphQLString }
            },
            resolve:(rootvalue,args,context)=>{
                let target = args.name;
                if(target === "2/3"){
                    console.log("this class is already exist")
                    return "exist class"
                }else{
                    console.log("no class is exist  ... 2/3 ")
                    return "not exist"
                }
            }
        },
    }
})