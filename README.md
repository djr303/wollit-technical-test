# Wollit technical test | Written by David Roberts

* Note [28/01/21]: This application is incomplete. It is only intended to show React componsition and frontend architecural choices.


Tested in NodeJS v12.16.3, Yarn v1.22.4 & Chrome latest

To start the React application:
`$ yarn start:client`

To start the GraphQL server:
`$ yarn start:server`

To run the GraphQL server unit tests:
`$ yarn test:server`


# TODOs

* Suitable unit tests for all server side and client side logic
* 4 e2e tests for each one of the acceptance criteria, plus data seeding for store.ts
* DRY approach across the code base
* squash git commit history pre-submission
* Custom hook? queries and writing to cache, using useQuery, write fragment, useClient
* make sure you get rid of the all the any types (TypeScript)
* TreeView component be broken up into separate files
* Constants for state trees
* Helpers for state trees
* Clean up functions
* splash and loading
* Context needed for machine?
* unused variables
* generate schema script
* un-used code and files
* theme object used on all MUI compoennts


# Notes on future work

* The server implementation uses a few simple abstractions to work with a flat file database. If I had more time I would use Docker Compose. One container for the server code with a MongoDB instance - normalizing the data - and another container for the frontend React application
* I haven't handled errors from the GraphQL server on the client. I would implement a UI message alter and retrying mechanism
* There is an anti-pattern present in the React application: 'Prop drilling'. I would possible implement an event bus or use RXJS to manage subscription to events / callbacks
* Unit tests (appropiate)??
* Refactoring work to do:
  * removal of 'any' types
* partial update of tree for performance reasons in 'infinate scenario'

