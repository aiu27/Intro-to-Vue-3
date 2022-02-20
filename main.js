const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      description: "Animal printed pair of socks",
      image: "../assets/images/socks_green.jpg",
      url: "https://www.happysocks.com/jp/",
      inventory: 100,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green" },
        { id: 2235, color: "blue" },
      ],
      //code challenge
      sizes: [22, 23, 24, 25],
    };
  },
});
