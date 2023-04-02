import axios from "axios";
/** My Assets */
import { Page } from "@/types";
import { UserInterface } from "@/interfaces";

axios.defaults.baseURL = process.env.USERS_BASE_URL || "/url";
axios.defaults.timeout = 1000;

async function getUsers(
  page: string | number = 1,
  nat = "foo",
  results: string | number = 3,
  seed = "foobar"
): Promise<Page<UserInterface>> {
  const { data } = await axios.get<Page<UserInterface>>(
    `?seed=${seed}&page=${page}&nat=${nat}&results=${
      +results <= 24 ? results : 24
    }`
  );
  return data;
}

export const serverApi = {
  getUsers,
};
