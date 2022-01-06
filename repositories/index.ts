import { Axios } from "axios";
import UserRepository from "./UserRepository";

export default ($axios: Axios) => ({
  user: UserRepository($axios)
})
