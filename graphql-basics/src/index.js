//named export
/*import v,{message,name,myGreeting} from './myModule'
import add,{funcSub} from './math'
console.log(message)
console.log(v)
console.log(name)

console.log(myGreeting("venugopal"))

console.log(add(23,34))
console.log(funcSub(15,30))
*/
import {GraphQLServer} from 'graphql-yoga'

//Type defination Schema
 const typeDefs = `
    type Query {
        hello : String!
        name : String!
        title : String!
        price : Float
        releaseyear : Int
    }
 `
//Resolvers

const resolvers = {
    Query: {
        hello(){
            return ' This is first GraphQL Query !'
        },
        name(){
            return 'My name is Venugopal'
        },
        title(){
            return 'My Book: No1'
        },
        price(){
            return 67
        },
        releaseyear(){
            return 2008
        }

    }
}

const server = new GraphQLServer({
    typeDefs : typeDefs,
    resolvers : resolvers 
})

server.start(()=>{
    console.log('Server has started successfully..')
})
