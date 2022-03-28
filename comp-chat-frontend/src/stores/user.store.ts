import { defineStore } from "pinia";
import type { User } from "@/models/User";
import { UserService } from "@/services/user.service";
import { FriendRequestService } from "@/services/friendRequest.service";
import type { Profile } from "@/models/profile";

const userService: UserService = new UserService();
const friendRequestService: FriendRequestService = new FriendRequestService();

export const UserStore = defineStore({
  id: "UserStore",
  state: () => ({
    loggedInUser: { name: "" } as User,
    users: [{ name: "testuser1" }, { name: "testuser2" }],
    userInfo: {
      name: "",
      gender: "",
      age: 0,
      __v: 0,
      _id: "",
      interests: [""],
    },
  }),
  getters: {
    userName: (state) => {
      if (state.loggedInUser.name != undefined) return state.loggedInUser.name;
      else return "";
    },
    infoName: (state) => {
      if (state.userInfo.name != undefined) return state.userInfo.name;
      else return "";
    },
    infoGender: (state) => {
      if (state.userInfo.gender != undefined) return state.userInfo.gender;
      else return "";
    },
    infoAge: (state) => {
      if (state.userInfo.age != undefined) return state.userInfo.age;
      else return "";
    },
    infoInterests: (state) => {
      if (state.userInfo.interests != undefined)
        return state.userInfo.interests;
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
    findUsers(search: string) {
      userService
        .findUsers(search)
        .then((users) => (this.users = users))
        .catch((err) => console.log(err));
    },
    getUserInfo(search: string) {
      userService
        .getInfo(search)
        .then((info) => (this.userInfo = info))
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
