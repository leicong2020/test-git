import Vue from 'vue'
import App from './App.vue'

//使用elementui插件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {
  Button,
  Select
} from 'element-ui';
Vue.use(ElementUI);
Vue.use(Button)
Vue.use(Select)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')