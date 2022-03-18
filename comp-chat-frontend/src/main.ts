import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import router from "./router";
import Toolbar from "primevue/toolbar";

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);

app.component(`Button`, Button);
app.component("InputText", InputText);
app.component("Toolbar", Toolbar);

app.mount("#app");
