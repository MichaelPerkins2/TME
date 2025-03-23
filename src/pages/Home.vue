<script setup>
import { ref } from "vue";

const search = ref("");
const movieResults = ref([]);
const tvResults = ref([]);
const featured = ref([
  {
    title1: "Scream (2022)",
    img: "https://imageio.forbes.com/specials-images/imageserve/61df194157cdb1738234b4ed/Scream--sequel--review--Wes-Craven--Scream-5--horror--Courteney-Cox--Neve-Campbell-/960x0.jpg?fit=bounds&format=jpg&width=960",
  },
  {
    title2: "The Batman",
    img: "https://i.redd.it/10rwnaszcpv71.jpg",
  },
  {
    title3: "Free Guy",
    img: "https://www.johnmcdonald.net.au/wp-content/uploads/2021/08/Screen-Shot-2021-08-11-at-12.58.19-pm.png",
  },
]);
const news = ref([
  {
    title1: "THE TRAGEDY OF MACBETH",
    img: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/12/tragedy-of-macbeth-what-we-know.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
  },
  {
    title2: "THE LORD OF THE RINGS: THE RINGS OF POWER",
    img: "https://www.joblo.com/wp-content/uploads/2022/02/the-lord-of-the-rings-the-rings-of-power-posters.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
  },
]);
const trending = ref([
  {
    img: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_hero_03_opt.jpg",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    img: "https://i.pinimg.com/736x/b5/98/0e/b5980e001d4553875fa63b037c9efe66.jpg",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    img: "https://cdn.mos.cms.futurecdn.net/pGyDmdniqHURMK2tN3Kh56.jpg",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    img: "https://m.media-amazon.com/images/M/MV5BMThlOWE3MWEtZjM4Ny00M2FiLTkyMmYtZGY3ZTcyMzM5YmNlXkEyXkFqcGdeQWpnYW1i._V1_.jpg",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
]);
</script>

<template>
  <div id="app" class="min-vh-100 d-flex flex-column">
    <div>
      <!-- Search Results -->
      <div class="container">
        <div id="movieResults"></div>
      </div>
      <div class="container">
        <div id="tvResults"></div>
      </div>

      <div id="main" class="container">
        <h1 class="title" style="margin: 1em">The Movie Expert</h1>
        <hr />

        <!-- Featured -->
        <div class="row">
          <div v-for="(item, index) in featured" :key="index" class="col-lg">
            <div class="image-container">
              <img class="feat-img" :src="item.img" />
              <div class="movie-title">
                <h3 class="info">
                  <a style="color: white" href="">{{
                    item["title" + (index + 1)]
                  }}</a>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <hr style="margin-top: 2em; margin-bottom: 2em" />

        <!-- News -->
        <h2>Today's News</h2>

        <div v-for="(item, index) in news" :key="index" class="section">
          <div class="row">
            <div class="col-lg image-container">
              <img class="news-img" :src="item.img" />
            </div>

            <div class="col-sm">
              <p style="font: optima; font-size: 20px">
                <strong
                  ><a style="color: black" href=""
                    >{{ item["title" + (index + 1)] }}:</a
                  ></strong
                >
                {{ item.content }}
              </p>
            </div>
          </div>
        </div>

        <hr style="margin-top: 2em; margin-bottom: 2em" />

        <!-- Reviews -->
        <h2>Trending</h2>

        <div class="row">
          
          <div v-for="(item, index) in trending" :key="index"  class="col-lg">
            <div class="image-container">
              <img class="trend-img" :src="item.img" />
            </div>
            <p>
              <a style="color: black" href=""> {{ item.description }}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* All Content */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  align-items: center;
}

/* Home */
.row {
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
}

.news-img {
  object-fit: cover;
  width: 26em;
  height: 16em;
}

.trend-img {
  object-fit: cover;
  width: 14em;
  height: 10em;
  margin: 1em 0;
}

.info {
  margin: 1em auto;
  text-align: center;
}
</style>
