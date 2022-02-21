const app = Vue.createApp({
  data() {
    return {
      // code challenge
      onSale: true,

      cart: 0,
      product: "Socks",
      brand: "Vue Mastery",
      description: "Animal printed pair of socks",
      selectedVariant: 0,
      url: "https://www.happysocks.com/jp/",
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "../assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 2235,
          color: "blue",
          image: "../assets/images/socks_blue.jpg",
          quantity: 0,
        },
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
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inventory() {
      return this.variants[this.selectedVariant].quantity;
    },
    saleStatus() {
      if (this.onSale) {
        return this.brand + " " + this.product + "is on sale";
      }
      return " ";
    },
  },
});
