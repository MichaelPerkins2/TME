<script>
export default {
  name: "Header",
  data() {
    return {
      cart: [],
    };
  },
  computed: {
    cartQuantity() {
      return this.cart.length;
    },
  },
  methods: {
    cartEmpty() {
      return this.cart.length === 0;
    },
    goToCart() {
      this.$router.push({ name: "cart" });
    },
  },
};
</script>

<template>
  <header>
    <nav
      class="navbar navbar-expand-lg navbar-dark w-100"
      style="background-color: #282828"
    >
      <div class="container">
        <router-link class="navbar-brand" :to="{ path: '/components/Home.vue' }">TME</router-link>

        <div class="nav__cart d-flex my-2 my-lg-0">
          <div class="cart-dropdown">
            <ul class="cart-dropdown__list">
              <!-- <li>Product</li> -->
            </ul>
          </div>
        </div>

        <button
          class="btn btn-outline-primary position-relative"
          @click="goToCart"
        >
          <i class="bi bi-cart"></i>
          <span
            v-if="cartQuantity > 0"
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          >
            {{ cartQuantity }}
          </span>
        </button>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <form class="d-flex my-2 my-lg-0">
            <input
              id="search-input"
                class="form-control mx-3"
              type="search"
              placeholder="Search for Movies and TV Shows"
              aria-label="Search"
            />
            <button
              id="search-btn"
              class="btn btn-outline-success"
              type="submit"
            >
              Search
            </button>
          </form>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/news">The Latest</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" href="../pages/reviews.html"
                >Reviews</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" href="../pages/recommendations.html"
                >Recommendations</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" href="../pages/sign-in.html"
                >Sign In</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.form-control {
  width: 18em !important;
}

.btn {
  width: 5em;
}
</style>
