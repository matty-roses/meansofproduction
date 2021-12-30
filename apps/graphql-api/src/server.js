"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var apollo_server_1 = require("apollo-server");
// todo move this to the graphql file
var typeDefs = (0, apollo_server_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    scalar DateTime\n    \n    type Email {\n        value: String!\n    }\n    \n    type PersonName {\n        first: String!\n        middle: String\n        last: String!\n    }\n    \n    type Person {\n        id: String!\n        name: PersonName\n        emails: [Email]\n    }\n    \n    enum ThingStatus {\n        READY\n        DAMAGED\n        LOST\n        DESTROYED\n        CURRENTLY_BORROWED\n    }\n    \n    type Thing {\n        id: String!\n        name: String!\n        description: String\n        imageUrls: [String]!\n        owner: Person\n        status: ThingStatus\n    }\n    \n    enum LoanStatus{\n        REQUESTED\n        LOANED\n        OVERDUE\n        WRITTEN_OFF\n        RETURNED_DAMAGED\n        RETURNED\n    }\n    \n    type Loan {\n        id: String!\n        item: Thing\n        borrower: Person\n        dueDate: DateTime!\n        active: Boolean\n        status: LoanStatus\n    }\n    \n    type Query {\n        loans: [Loan]\n        things: [Thing]\n    }\n"], ["\n    scalar DateTime\n    \n    type Email {\n        value: String!\n    }\n    \n    type PersonName {\n        first: String!\n        middle: String\n        last: String!\n    }\n    \n    type Person {\n        id: String!\n        name: PersonName\n        emails: [Email]\n    }\n    \n    enum ThingStatus {\n        READY\n        DAMAGED\n        LOST\n        DESTROYED\n        CURRENTLY_BORROWED\n    }\n    \n    type Thing {\n        id: String!\n        name: String!\n        description: String\n        imageUrls: [String]!\n        owner: Person\n        status: ThingStatus\n    }\n    \n    enum LoanStatus{\n        REQUESTED\n        LOANED\n        OVERDUE\n        WRITTEN_OFF\n        RETURNED_DAMAGED\n        RETURNED\n    }\n    \n    type Loan {\n        id: String!\n        item: Thing\n        borrower: Person\n        dueDate: DateTime!\n        active: Boolean\n        status: LoanStatus\n    }\n    \n    type Query {\n        loans: [Loan]\n        things: [Thing]\n    }\n"])));
// load our schema from file
var resolvers = {
    Query: {}
};
var server = new apollo_server_1.ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80  Server ready at ".concat(url));
});
var templateObject_1;
