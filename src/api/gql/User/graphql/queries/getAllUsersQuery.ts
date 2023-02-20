import { QueryResolvers } from "~generated/graphql/types";

export const getAllUsersQuery: QueryResolvers["getAllUsers"] = (
  parent,
  args,
  context
) => {
  return context.user.getAllUsers();
};
