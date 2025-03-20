<script>
export default {
  name: "Header",
  data() {
    return {
      cart: [],
      visible: false,
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
        <router-link class="navbar-brand" :to="{ path: '@/pages/Home.vue' }">TME</router-link>

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

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          @click="visible=!visible"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" :class="!visible?'collapse':''" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" @click="visible=!visible" to="@/pages/news">The Latest</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" @click="visible=!visible" to="@/pages/reviews.html"
                >Reviews</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" @click="visible=!visible" to="@/pages/recommendations.html"
                >Recommendations</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" @click="visible=!visible" to="@/pages//sign-in.html"
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
