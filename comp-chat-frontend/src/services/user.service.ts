import http from "./http.client";
import type { User } from "@/models/User";
import type { Profile } from "@/models/profile";

export class UserService {
  async createUser(
    name: string,
    email: string,
    password: string
  ): Promise<User> {
    const res = await http.post<User>("/users", {
      name: name,
      email: email,
      password: password,
    });
    return res.data;
  }

  async login(email: string, password: string): Promise<User> {
    const res = await http.post<User>("/users/login", {
      name: "",
      email: email,
      password: password,
    });
    return res.data;
  }
  async findUsers(search: string): Promise<User[]> {
    const res = await http.post<User[]>("/users/find", {
      name: search,
      email: "",
      password: "",
    });
    return res.data;
  }
  async getInfo(search: string): Promise<Profile> {
    const res = await http.post<Profile>("/profiles/info", {
      name: search,
      email: "",
      password: "",
    });
    return res.data;
  }
}
