import { MutationResolvers, Status } from "~generated/graphql/types";

export const addUserMutation: MutationResolvers["addUser"] = async (
  parent,
  args,
  context
) => {
  try {
    await context.user.addNewUser(args.id, args.name, args.age);
  } catch (err) {
    return { exception: err.message, status: Status.Nack };
  }

  return { status: Status.Ack };
};
