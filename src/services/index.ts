import axios from "axios";
/** My Assets */
import { PUB_RANDOMUSER_URL } from "@/env";
import { Page } from "@/types";
import { UserInterface } from "@/interfaces";

axios.defaults.baseURL = PUB_RANDOMUSER_URL;

async function getUsers(
  page = 1,
  nat = "foo",
  results = 3,
  seed = "foobar"
): Promise<Page<UserInterface>> {
  const { data } = await axios.get<Page<UserInterface>>(
    `?seed=${seed}&nat=${nat}&results=${results}&page=${page}`
  );
  return data;
}

export const services = {
  getUsers,
};
