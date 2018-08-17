const graphql = require("graphql");
const school = require("./school");
const schoolMutate = require('./mutation/schoolMutate')
const schoolname = require('./Input/schoolInputName');

let schema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: "schoolStruct",
        fields: {
            school: {
                type: school.type,
                args: {
                    name:{type:graphql.GraphQLList(graphql.GraphQLString)}
                },
                resolve: school.resolve
            }
        }
    }),
    mutation: new graphql.GraphQLObjectType({
        name : "SchoolConstruct",
        fields:{
            school:{
                type : schoolMutate.type,
                args :{
                    name : {type : graphql.GraphQLList(schoolname)}
                },
                resolve : schoolMutate.resolveMutation
            }
        }
    })
})

module.exports = schema


//Mutation Example
// mutation{
//     school(name:[{schoolname:"EG"},{schoolname:"IG"}]){
//       schoolName,
//       class(name:[{classname:"classA"},{classname:"classB"}]){
//         className,
//         student(name:[
//           {studentname:"iman",studentage:23,studentchairrow:52,studentchaircol:98},
//           {studentname:"ahmed",studentage:26,studentchairrow:8,studentchaircol:55}]) {
//           name
//           age,
//           chair{
//             row,
//             col
//           }
//         },
//         teacher(name:{teachername:"mohamed",subject:"math"}){
//           subject,
//           name
//         }
//       }
//     }
//   }