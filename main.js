const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      description: "Animal printed pair of socks",
      image: "../assets/images/socks_green.jpg",
      url: "https://www.happysocks.com/jp/",
      inventory: 100,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green", image: "../assets/images/socks_green.jpg" },
        { id: 2235, color: "blue", image: "../assets/images/socks_blue.jpg" },
      ],
      //code challenge
      sizes: [22, 23, 24, 25],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      if (this.cart >= 1) {
        this.cart -= 1;
      }
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
  },
});
