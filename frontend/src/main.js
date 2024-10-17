import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router
import store from './store';   // Import the Vuex store

// Create the Vue app instance
const app = createApp(App);

// Use the router and store in your Vue app
app.use(router);
app.use(store);

// Mount the app to the DOM element with id "app"
app.mount('#app');
