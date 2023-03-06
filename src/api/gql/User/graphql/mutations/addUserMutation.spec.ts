import td from "testdouble";

import {
  GqlContext,
  MutationAddUserArgs,
  testAddUser,
} from "~generated/graphql/helpers/addUserMutationSpecWrapper";

test("addUser", async () => {
  const context = td.object<GqlContext>();
  // td.when(context.UserRepository.findOne()).thenResolve()
  // const variables: MutationAddUserArgs = {}

  // const result = await testAddUser(variables, context);
});
