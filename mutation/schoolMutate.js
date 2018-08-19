const graphql = require('graphql');
const classmutate = require('./classmutate')

module.exports = new graphql.GraphQLObjectType({
    name: "schoolMutate",
    fields: {
        class: {
            type: classmutate,
                args: {
                    name: {
                        type: graphql.GraphQLString
                    },
                },
                resolve: (rootvalue, args, context) => {
                    let target = args.name;
                    let result;
                    // rootvalue here school contain class 
                    rootvalue.class.forEach(element => {
                        if(element.name === target){
                            result = element
                        }else{
                            // 🚩🚩🚩
                            // Here is missing understand in return type 
                            // if true so .... it's will be class type else will be 
                            // string ...
                            result = args.name
                        }
                    });
                    return result
                }
        },
    }
})