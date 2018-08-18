const graphql = require('graphql');
const classs = require('./class')
const _ = require('lodash');
const data = require('./data/storage');
// console.log(Array.isArray(data)); 
let school = new graphql.GraphQLObjectType({
    name: "school",
    fields: {
        schoolName: {
            type: graphql.GraphQLString,
        },
        link: {
            type: graphql.GraphQLString,
        },
        class: {
            type: classs.type,
                args: {
                    name: {
                        type: graphql.GraphQLList(graphql.GraphQLString)
                    }
                },
                resolve: classs.resolve
        },
    }
})

let type = new graphql.GraphQLList(school)

const resolve = (_rootValue, args, _context) => {
    let target = args.name;
    let result = []
    if (target) {
        data.schools.forEach(element => {
            target.forEach(targetElement => {
                if (element.schoolName === targetElement) {
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