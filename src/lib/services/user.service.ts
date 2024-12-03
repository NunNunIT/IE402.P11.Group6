import { IUser, User } from "../model";

import { ENUM_SOCIAL_TYPE } from "@/utils";
import { connectToDb } from "../db";

export const createUserFromSocial = async ({
  email,
  metadata,
}: { email: string, socialType: ENUM_SOCIAL_TYPE, metadata: Partial<Omit<IUser, "email">> }) => {
  await connectToDb();
  let user = await User.findOne({ email });
  if (user) return user;

  user = new User({ email, ...metadata });

  await user.save();
  return user;
}
