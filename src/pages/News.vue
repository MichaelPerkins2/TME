<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
const apiKey = import.meta.env.VITE_OMDB_API_KEY;

async function getMovie(title) {
  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${apiKey}&t=${title}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movie data: ", error);
    return null;
  }
}

async function setNewsContent() {
  for (let i = 0; i < news.value.length; i++) {
    const movieData = await getMovie(news.value[i].title);
    console.log("Movie Data 1: ", movieData);
    if (movieData) {
      news.value[i].title = movieData.Title;
      news.value[i].desc1 = movieData.Plot;
      // news.value[i].img = movieData.Poster;
    }
  }
}

async function setTrendingContent() {
  for (let i = 0; i < trending.value.length; i++) {
    const movieData = await getMovie(trending.value[i].title);
    console.log("Movie Data 2: ", movieData);
    if (movieData) {
      // trending.value[i].title = movieData.Title;
      trending.value[i].desc1 = movieData.Plot;
      // trending.value[i].img = movieData.Poster;
    }
  }
}

const news = ref([
  {
    title: "Squid Game",
    img: "https://images.indianexpress.com/2021/10/Suid-Game-Netflix-1200by667.jpg",
    heading1: "<h3>S Q U I D &nbsp; G A M E</h3> <br> <strong><a style='color: black' href=''>REVIEW:</a> </strong>",
    desc1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
    heading2: "<strong><a style='color: black' href=''>RATINGS:</a> </strong>",
    desc2:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...",
  },
  {
    title: "Yellowstone",
    img: "https://flxt.tmsimg.com/assets/p16780458_b_h8_aa.jpg",
    heading1:
      "<h3>Y E L L O W S T O N E</h3> <br> <strong><a style='color: black' href=''>TRENDING:</a> </strong> ",
    desc1:
      "...Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollitanim id est laborum...",
    heading2:
      "<strong><a style='color: black' href=''>SHOULD I WATCH IT?</a> </strong> ",
    desc2:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...",
  },
  {
    title: "Severance",
    img: "https://wallpapercat.com/w/full/d/a/4/2489747-3200x1800-desktop-hd-severance-tv-series-wallpaper.jpg",
    heading1: "<h3>S E V E R A N C E</h3> <br> <strong><a style='color: black' href=''>5 STARS:</a> </strong>",
    desc1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat...",
    heading2: "",
    desc2: "",
  },
]);
const trending = ref([
  {
    title: "Alien: Romulus",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc0C_vrNASZN8bdwdn8IYjUGDpJFrAQ4B6Yw&s",
    desc1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
    desc2:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
    link: "<a href=''>Get recommendations for movies like this...</a>",
  },
  {
    title: "Foundation",
    img: "https://www.apple.com/tv-pr/shows-and-films/f/foundation/images/season-02/show-home-graphic-header/key-art-02/4x1/Apple_TV_Foundation_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1691773583710",
    desc1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
    desc2:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
    link: "<a href=''>Here's our top 5 TV shows right now...</a>",
  },
  {
    title: "Inside Out 2",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d3789c8c-0874-407c-a457-03b147f59b18/dhm845c-d25ea16c-428f-4598-8b7e-c23c604b1c68.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QzNzg5YzhjLTA4NzQtNDA3Yy1hNDU3LTAzYjE0N2Y1OWIxOFwvZGhtODQ1Yy1kMjVlYTE2Yy00MjhmLTQ1OTgtOGI3ZS1jMjNjNjA0YjFjNjguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.elwLM7qRULqCTx3v28_i3pMDMEaH0RKNgDpDGM-bk-s",
    desc1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
    desc2:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
    link: "<a href=''>See what everyone is saying...</a>",
  },
  {
    title: "Horizon: An American Saga - Chapter 1",
    img: "https://m.media-amazon.com/images/S/pv-target-images/d4ef64e69392ccde9ee53c7aa48f100f05b1f227fee0b4151b7cc64d21259772.jpg",
    desc1:
      "<em>Horizon: An American Saga - Chapter 1 - </em> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
    desc2:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
    link: "<a href=''>You won't want to miss this one...</a>",
  },
]);

onMounted(() => {
  setNewsContent();
  setTrendingContent();
});
</script>

<template>
  <div id="main" class="container">
    <!-- The Latest -->
    <h2 style="margin: 1em 0">The Latest</h2>
    <hr />
    
    <div v-for="(item, index) in news" v-bind:key="index" class="row">
      <div class="col-lg image-container">
        <img class="news-img" v-bind:src="item.img" />
      </div>
      <div class="col-sm">
        <br />
        <p style="font: optima; font-size: 20px">
          <b v-html="item.heading1"></b>
          <span v-html="item.desc1"></span>
          <br />
          <br />
          <b v-html="item.heading2"></b>
          <span v-html="item.desc2"></span>
        </p>
      </div>
    </div>

    <!-- Trending -->
    <h2 style="margin: 2em 0 0">Trending Now</h2>
    <hr />

    <div v-for="(item, index) in trending" v-bind:key="index" class="row">
      <div class="col-lg">
        <div class="image-container">
          <img style="width: 18em" class="trend-img" v-bind:src="item.img" />
        </div>
      </div>
      <div class="col-lg">
        <br />
        <p>
          <b>{{ item.title }}</b> - {{ item.desc1 }}
        </p>
        <a href="">Read our full review here...</a>
      </div>
      <div class="col-lg">
        <br />
        <p>{{ item.desc2 }}</p>
        <span v-html="item.link"></span>
      </div>
    </div>
  </div>
</template>

<style>
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
</style>
