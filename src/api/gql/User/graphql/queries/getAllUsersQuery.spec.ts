import td from "testdouble";
import {
  GqlContext,
  testGetAllUsers,
} from "~generated/graphql/helpers/getAllUsersQuerySpecWrapper";

test("getAllUsers", async () => {
  const context = td.object<GqlContext>();

  // td.when(context.UserRepository.findOne()).thenResolve()

  // const result = await testGetAllUsers( context);
});
