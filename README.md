# meansofproduction
A free as in beer application to manage a distributed library, especially a library of things

## Why
- Because there's no need for every person to buy every tool

- Because most library software isn't free, or assumes that the library owns the items

- Because control of the means of production is the material basis for everything

- Because distributed tool libraries may be easier to setup, and not require tools to live in a central place!

## Parts
- meansofproduction - domain objects that define the business logic and storage functions
- graphql_server - GraphQL API to support the front end
- web_client - browser based way to lend and borrow
- phone_client - ReactNative client for interacting

## Current Domain Objects
### Thing
something to be lent out.  Can have a *borrow cost*, which reflects a relative worth of the item, to help even out lending if needed

### Lender
A person or entity that owns an item, and lends it to others.  

### Borrower
A person or entity which borrows an item through a `Loan`. 

Borrowers who return items late or with damage can accrue either fees or demerits, depending on the library policies.  Fees can alternatively be denominated in FairCoin, to allow a non-capitalist solution to library costs.

### Loan

### Library
A library might represent either a library organization, or a distributed group of Lenders

Libraries will also be able to long term allow members from other libraries, presenting an easy way to offer a unified platform for existing lenders

Libraries can enforce policies on behalf of their membership, such.  Long term integration with voting platforms can lead to democratization.

