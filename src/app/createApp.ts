import { ApolloServer } from "apollo-server-lambda";
import { schema } from "~generated/graphql/schema";
import { appContext } from "./context";
import { dataSources } from "./dataSources";
import { root } from "./root";

const server = new ApolloServer({
  schema,
  context: ({ event }) => {
    return appContext(root)({
      req: { headers: event.headers, cookies: { jwt: undefined } },
    });
  },
  dataSources,
  debug: true,
  introspection: true,
});

exports.handler = server.createHandler();
