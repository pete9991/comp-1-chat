import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreateUser from "../views/CreateUser.vue";
import Chat from "../views/Chat.vue";
import CreateRoom from "../views/CreateRoom.vue";
import AddFriends from "../views/AddFriends.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/createuser",
      name: "CreateUser",
      component: CreateUser,
    },
    {
      path: "/chat",
      name: "Chat",
      component: Chat,
    },
    {
      path: "/createroom",
      name: "CreateRoom",
      component: CreateRoom,
    },
    {
      path: "/addfriends",
      name: "AddFriends",
      component: AddFriends,
    },
  ],
});

export default router;
