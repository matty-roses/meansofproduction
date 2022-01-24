import {isOdd, PostgresLibraryRepository} from "@meansofproduction/server-core"
import {ApolloServer} from "apollo-server"
import { readFileSync } from "fs"

import {resolvers} from "./resolvers"

console.log("Hello API!")


const port = process.env.PORT || 4000

const typeDefs = readFileSync("./schema.graphql").toString("utf-8")

const server = new ApolloServer(
    {
        typeDefs: typeDefs,
        resolvers: resolvers
    }
)

server.listen(port).then(({url}) => {
    console.log(`🚀  Server ready at ${url}, isOdd is ${isOdd()}`)
})
