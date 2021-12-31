# meansofproduction
A free as in beer application to manage a distributed library, especially a library of things.

## Why
- Because there's no need for every person to buy every tool

- Because most library software isn't free, or assumes that the library owns the items always and can store them locally.

- Because control of the means of production is the material basis for everything

- Because distributed tool libraries may be easier to setup, and not require tools to live in a central place!

- Because Library Socialism is a great idea - if you'd like to know more, check out srslywrong's series on this (https://srslywrong.com/podcast/189-library-socialism-usufruct/).

## Roles
Borrowers - somebody who has a need and wishes to use an item to fulfill that need

Lenders - somebody with an item to lend.

Libraries - organizations which connect Borrowers and Lenders, and prevent abuses for the general good.  Depending on the type of library, a library may also be a lender.
Libraries create Loans of items, and also determine if Borrowers remain in good standing, if items are returned satisfactorily, etc.

## Parts
- meansofproduction - domain objects that define the business logic and storage functions
- graphql_server - GraphQL API to support the front end
- web_client - browser based way to lend and borrow
- phone_client - ReactNative client for interacting

## Current Domain Objects
### Thing
something to be lent out.  Can have a *borrow cost*, which reflects a relative worth of the item, to help even out lending if needed

### Lender
A person or entity that owns an item.  They might also be responsible for evaluating condition on return.

### Borrower
A person or entity which borrows an item through a `Loan`.

Borrowers who return items late or with damage can accrue either fees or demerits, depending on the library policies.  Fees can alternatively be denominated in FairCoin, to allow a non-capitalist solution to library costs.

### Loan
The temporary transfer of an item to a borrower to supply a need.  Fills the Usufruct need - so a borrower might use and enjoy the benefits of an item, but is not free to destroy or permanently remove it (such as selling it).

Loans may or may not have an expiration.  A gift or entitlement may be considered a loan without an expiration date.

### Library
A library might represent either a library organization, or a distributed group of Lenders

Libraries will also be able to long term allow members from other libraries, presenting an easy way to offer a unified platform for existing lenders

Libraries can enforce policies on behalf of their membership, such as maximum items to borrow at one time, fees or points for non-returned items, etc.

Long term integration with voting platforms for libraries is a good move to ensure democratic control of libraries.

Libraries can optionally take Donations, which transfers the location to a library.

Libraries create Loans of Items.

## Tool links
https://medium.com/@NiGhTTraX/making-typescript-monorepos-play-nice-with-other-tools-a8d197fdc680
