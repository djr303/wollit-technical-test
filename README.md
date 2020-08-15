# Wollit technical test | Written by David Roberts

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

# Notes on future work

* The server implementation uses a few simple abstractions to work with a flat file database. If I had more time I would use Docker Compose. One container for the server code with a MongoDB instance and another container for the frontend React application
* I haven't handled errors from the GraphQL server on the client. I would implement a UI message alter and retrying mechanism
