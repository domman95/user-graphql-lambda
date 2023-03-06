// Initialize your Controllers / Use Cases / Repositories here.
// This shape of this object will also be extended by your context.ts file to define a Gql Context

import { EventStore } from "shared/EventStore/EventStore";
import { User } from "~app/domain/User";

const eventStore = new EventStore(
  "esdb://44.203.181.224:2113?tls=false&keepAliveTimeout=10000&keepAliveInterval=10000"
);
const user = new User(eventStore);

export const root = {
  eventStore,
  user,
};

export type RootInterface = typeof root;
