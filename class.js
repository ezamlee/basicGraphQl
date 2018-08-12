const graphql = require('graphql');
const student = require('./student')
const teacher = require('./teacher')

let classs = new graphql.GraphQLObjectType({
    name: "classs",
    fields: {
        className: {
            type: graphql.GraphQLString,
            resolve: (rootValue, _args, _context) => {
                return rootValue
            }
        },
        student: {
            type: graphql.GraphQLList(student.type),
            resolve: student.resolve,
            args: {
                name: {
                    type: graphql.GraphQLList(graphql.GraphQLString)
                }
            },
        },
        teacher: {
            type: teacher.type,
            resolve: teacher.resolve
        }
    }
})
let type = new graphql.GraphQLList(classs)
const resolve = (_rootValue, args, _context) => {
    return args.name
}
module.exports = {
    type,
    resolve
}