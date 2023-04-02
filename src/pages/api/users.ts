// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
/** My Assets */
import { PageClient } from "@/types";
import { UserInterfaceClient } from "@/interfaces";
import { serverApi } from "@/services/server";

type Data = PageClient<UserInterfaceClient> | { msg: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      try {
        const qPage = req.query.page && req.query.page.toString();
        const qNat = req.query.nat && req.query.nat.toString();
        const qResults = req.query.results && req.query.results.toString();
        const data = await serverApi.getUsers(qPage, qNat, qResults);
        const { page } = data.info;
        const results = data.results.map((el) => {
          const { login, ...newObj } = el;
          return { ...newObj, username: el.login.username };
        });
        return res.status(200).json({ page, results });
      } catch (error) {
        return res.status(500).json({ msg: "500 - Internal server error" });
      }
    default:
      return res.status(405).json({ msg: "405 - Method Not Allowed" });
  }
}
