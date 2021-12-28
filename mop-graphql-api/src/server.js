"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
// todo move this to the graphql file
const typeDefs = (0, apollo_server_1.gql) `
    scalar DateTime
    
    type Email {
        value: String!
    }
    
    type PersonName {
        first: String!
        middle: String
        last: String!
    }
    
    type Person {
        id: String!
        name: PersonName
        emails: [Email]
    }
    
    enum ThingStatus {
        READY
        DAMAGED
        LOST
        DESTROYED
        CURRENTLY_BORROWED
    }
    
    type Thing {
        id: String!
        name: String!
        description: String
        imageUrls: [String]!
        owner: Person
        status: ThingStatus
    }
    
    enum LoanStatus{
        REQUESTED
        LOANED
        OVERDUE
        WRITTEN_OFF
        RETURNED_DAMAGED
        RETURNED
    }
    
    type Loan {
        id: String!
        item: Thing
        borrower: Person
        dueDate: DateTime!
        active: Boolean
        status: LoanStatus
    }
    
    type Query {
        loans: [Loan]
        things: [Thing]
    }
`;
// load our schema from file
const resolvers = {
    Query: {}
};
const server = new apollo_server_1.ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
//# sourceMappingURL=server.js.map