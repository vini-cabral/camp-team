import axios from "axios";
/** My Assets */
import { Page } from "@/types";
import { UserInterfaceClient } from "@/interfaces";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_USERS_BASE_URL || "/url";

async function getUsers(
  page: string | number = 1,
  nat = "foo",
  results: string | number = 3
): Promise<Page<UserInterfaceClient>> {
  const { data } = await axios.get<Page<UserInterfaceClient>>(
    `?page=${page}&nat=${nat}&results=${results}`
  );
  return data;
}

export const clientApi = {
  getUsers,
};
