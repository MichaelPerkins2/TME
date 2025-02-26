<script>
export default {
  name: "Header",
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    cartEmpty() {
      return this.cart.length === 0;
    },
    cartQuantity() {
      return this.cart.length;
    },
    goToCart() {
      this.$router.push({ name: "cart" });
    },
  },
};
</script>

<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark"
    style="background-color: #282828"
  >
    <div class="container">
      <a class="navbar-brand" href="../pages/index.html">TME</a>
      <div class="nav__cart">
        <button
          v-if="cartEmpty()"
          style="margin-right: 1em"
          type="button"
          class="btn btn-outline-secondary"
          @click="goToCart"
        >
          <svg
            style="color: white"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-cart"
            viewbox="0 0 16 16"
          >
            <path
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
            />
          </svg>
          <span class="total-quantity">{{ cartQuantity }}</span>
        </button>

        <button
          v-else
          style="
            margin-right: 1em;
            border: 2px solid green;
            background-color: #282828;
          "
          type="button"
          class="btn btn-secondary"
          @click="goToCart"
        >
          <svg
            style="color: green"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-cart"
            viewbox="0 0 16 16"
          >
            <path
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
            />
          </svg>
          <span class="total-quantity">{{ cartQuantity }}</span>
        </button>

        <div class="cart-dropdown">
          <ul class="cart-dropdown__list">
            <!-- <li>Product</li> -->
          </ul>
        </div>
      </div>

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
        <form class="form-inline my-2 my-lg-0">
          <input
            id="search-input"
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search for movies and TV shows"
            aria-label="Search"
          />
          <button
            id="search-btn"
            class="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="../pages/news.html">The Latest</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../pages/reviews.html">Reviews</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../pages/recommendations.html"
              >Recommendations</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../pages/sign-in.html">Sign In</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* All Content */
/* * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.form-control {
  width: 18em !important;
}

.btn {
  width: 5em;
}

.search-img {
  width: 15em;
} */

/* Home */
/* .row {
  margin: 3em 0;
}

.col-lg {
  justify-content: center;
}

.image-container {
  position: relative;
  text-align: center;
  color: white;
  margin: auto;
}

.feat-img {
  object-fit: cover;
  width: 16em;
  height: 25em;
}

.movie-title {
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
} */
</style>
