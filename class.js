const graphql = require('graphql');
const student = require('./student')
const teacher = require('./teacher')
const data = require('./data/storage')


let classs = new graphql.GraphQLObjectType({
    name: "classs",
    fields: {
        className: {
            type: graphql.GraphQLString,
        },
        student: {
            type: graphql.GraphQLList(student.type),
            resolve: student.resolve,
            // args: {
            //     name: {
            //         type: graphql.GraphQLList(graphql.GraphQLString)
            //     }
            // },
        },
        teacher: {
            type: teacher.type,
            resolve: teacher.resolve
        }
    }
})
let type = new graphql.GraphQLList(classs)
const resolve = (rootValue, args, _context) => {
    let target = args.name;
    let result = []
    if (target) {
        (rootValue.class).forEach(element => {
            target.forEach(targetElement=>{
                if (element.className === targetElement) {
                    result.push(element)
                }
            })
        });
    } else {
        return "Not Found && (Validation err)"
    }
    return result
}
module.exports = {
    type,
    resolve
}