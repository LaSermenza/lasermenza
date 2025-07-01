import { authUrl } from "./_config";
import { redirect } from "next/navigation";
import { NextApiHandler } from "next";

export const GET: NextApiHandler = ({}) => {
  return redirect(authUrl);
};
