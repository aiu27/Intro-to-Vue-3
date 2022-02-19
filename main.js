const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      description: "Animal printed pair of socks",
      image: "../assets/images/socks_green.jpg",
      url: "https://www.happysocks.com/jp/",
      inventory: 0,

      //code challenge
      onSale: true,
    };
  },
});
