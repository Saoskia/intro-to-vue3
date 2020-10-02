
const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      image: './assets/images/socks_blue.jpg',
      inventory: 8
    }
  }
}).mount('#app')