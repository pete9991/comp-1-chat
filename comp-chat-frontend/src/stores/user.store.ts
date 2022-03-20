import { defineStore } from "pinia";
import type { User } from "@/models/User";
import { UserService } from "@/services/user.service";
import {FriendRequestService} from "@/services/friendRequest.service";

const userService: UserService = new UserService();
const friendRequestService: FriendRequestService = new FriendRequestService();

export const UserStore = defineStore({
  id: "UserStore",
  state: () => ({
    loggedInUser: { name: "" } as User,
  }),
  getters: {
    userName: (state) => {
      if (state.loggedInUser.name != undefined) return state.loggedInUser.name;
      else return "";
    },
  },
  actions: {
    createUser(name: string, email: string, password: string) {
      userService
        .createUser(name, email, password)
        .then((user) => (this.loggedInUser = user))
        .catch((err) => console.log(err));
    },
    login(email: string, password: string) {
      userService
        .login(email, password)
        .then((user) => (this.loggedInUser = user))
        .catch((err) => console.log(err));
    },
    logOut() {
      const loggedoutUser: User = {
        uuid: "",
        name: "",
        email: "",
        password: "",
        rooms: [],
      };
      this.loggedInUser = loggedoutUser;
    },
  },
});
