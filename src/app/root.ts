// Initialize your Controllers / Use Cases / Repositories here.
// This shape of this object will also be extended by your context.ts file to define a Gql Context

import { User } from "~app/domain/User";

const user = new User();

export const root = { user };

export type RootInterface = typeof root;
