import {isOdd, PostgresLibraryRepository} from "@meansofproduction/server-core"
import {ApolloServer} from "apollo-server"
import { readFileSync } from "fs"


console.log("Hello API!")


const port = process.env.PORT || 4000

const typeDefs = readFileSync("./schema.graphql").toString("utf-8")

const server = new ApolloServer(
    {
        typeDefs: typeDefs,
        resolvers: {}
    }
)

server.listen(port).then(({url}) => {
    console.log(`🚀  Server ready at ${url}`)
})
