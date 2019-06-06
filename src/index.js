require("dotenv").config();
import express from "express";
import graphqlHTTP from "express-graphql"; //middleware of express to process the route with graphql
import * as _package from "../package.json";
import schema from "./schema";
import { connect } from "./database";

const app = express();

connect();

const {
  env: { PORT }
} = process;

app.get("/", (req, res) => {
  res.json({
    message: "helloworld"
  });
});

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
    context: {
      //we could send data between resolvers with context
      messageId: "test"
    }
  })
);

app.listen(PORT || 3001, () =>
  console.log(
    `${_package.name} ${_package.version} up and running on port ${PORT}`
  )
);
