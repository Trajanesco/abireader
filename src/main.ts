import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import './styles/css/variables.css';
import FontAwesomeIcon from './plugins/fontawesome-icons';

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
