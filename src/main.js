import { createApp } from 'vue';
import App from './App.vue';
import Maska from 'maska';
import moment from 'moment';

const app = createApp(App);

app.use(Maska); //plugin - com 'use' adicionamos plugin para a aplicação Vue, específica para ele
app.config.globalProperties.$moment = moment; //Não é um plugin pro Vue, é uma Propriedade Global, uma lib JavaScript genérica 
app.config.globalProperties.$moment.locale('pt-br');
app.mount('#app');
