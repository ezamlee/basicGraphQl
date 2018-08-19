const graphql = require('graphql');
const data = require('../data/storage')
// const classMutate = require('./classmutate')
// const studentMutate = require('./studentmutate')
const schoolMutate = require('./schoolMutate')



module.exports = new graphql.GraphQLObjectType({
    name: "mutation",
    fields: {
        school: {
            type: schoolMutate ,
            // type: graphql.GraphQLString,
            args: {
                name: {
                    type: graphql.GraphQLString
                },
                link: {
                    type: graphql.GraphQLString
                },
            },
            resolve: (rootvalue, args, context) => {
                // 1- check the name is already exist in data base or not ..
                // 2- if exist (console.log the status (Exist or Not))
                // if(target === "ahmed Orabi" || target === "MahmoudI"){
                //     console.log("This school is already exist")
                //     return "exist"
                // }else{
                //     console.log("not exist school");
                //     return args.name 
                // }
                let target = args.name;
                let result;
                data.schools.forEach(element => {
                    if (element.schoolName === target) {
                        // return element
                        result = element;
                    }
                });
                if (result) {
                    return result
                }else{
                    return args.name
                }
            }
        },
    },
})