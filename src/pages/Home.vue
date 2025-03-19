<script>

</script>

<template>
  <body id="app">
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
          <div class="col-lg">
            <div class="image-container">
              <img
                class="feat-img"
                src="https://imageio.forbes.com/specials-images/imageserve/61df194157cdb1738234b4ed/Scream--sequel--review--Wes-Craven--Scream-5--horror--Courteney-Cox--Neve-Campbell-/960x0.jpg?fit=bounds&format=jpg&width=960"
                alt="Photographer's Reflection"
              />
              <div class="movie-title">
                <h3 class="info">
                  <a style="color: white" href="">Scream (2022)</a>
                </h3>
              </div>
            </div>
          </div>

          <div class="col-lg">
            <div class="image-container">
              <img class="feat-img" src="https://i.redd.it/10rwnaszcpv71.jpg" />
              <div class="movie-title">
                <h3 class="info">
                  <a style="color: white" href="">The Batman</a>
                </h3>
              </div>
            </div>
          </div>

          <div class="col-lg">
            <div class="image-container">
              <img
                class="feat-img"
                src="https://www.johnmcdonald.net.au/wp-content/uploads/2021/08/Screen-Shot-2021-08-11-at-12.58.19-pm.png"
              />
              <div class="movie-title">
                <h3 class="info">
                  <a style="color: white" href="">Free Guy</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <hr style="margin-top: 2em; margin-bottom: 2em" />

        <!-- News -->
        <h2>Today's News</h2>

        <div class="row">
          <div class="col-lg image-container">
            <img
              class="news-img"
              src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/12/tragedy-of-macbeth-what-we-know.jpg"
            />
          </div>

          <div class="col-sm">
            <p style="font: optima; font-size: 20px">
              <strong
                ><a style="color: black" href=""
                  >THE TRAGEDY OF MACBETH:</a
                ></strong
              >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat...
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-lg image-container">
            <img
              class="news-img"
              src="https://www.joblo.com/wp-content/uploads/2022/02/the-lord-of-the-rings-the-rings-of-power-posters.jpg"
            />
          </div>

          <div class="col-sm">
            <p style="font: optima; font-size: 20px">
              <strong
                ><a style="color: black" href=""
                  >THE LORD OF THE RINGS: THE RINGS OF POWER:</a
                ></strong
              >
              ...Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum...
            </p>
          </div>
        </div>
        <hr style="margin-top: 2em; margin-bottom: 2em" />

        <!-- Reviews -->
        <h2>Trending</h2>

        <div class="row">
          <div class="col-lg">
            <div class="image-container">
              <img
                class="trend-img"
                src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_hero_03_opt.jpg"
              />
            </div>
            <p>
              <a style="color: black" href=""
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore...</a
              >
            </p>
          </div>

          <div class="col-lg">
            <div class="image-container">
              <img
                class="trend-img"
                src="https://i.pinimg.com/736x/b5/98/0e/b5980e001d4553875fa63b037c9efe66.jpg"
              />
            </div>
            <p>
              <a style="color: black" href=""
                >Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat...</a
              >
            </p>
          </div>

          <div class="col-lg">
            <div class="image-container">
              <img
                class="trend-img"
                src="https://cdn.mos.cms.futurecdn.net/pGyDmdniqHURMK2tN3Kh56.jpg"
              />
            </div>
            <p>
              <a style="color: black" href=""
                >Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.</a
              >
            </p>
          </div>

          <div class="col-lg">
            <div class="image-container">
              <img
                class="trend-img"
                src="https://m.media-amazon.com/images/M/MV5BMThlOWE3MWEtZjM4Ny00M2FiLTkyMmYtZGY3ZTcyMzM5YmNlXkEyXkFqcGdeQWpnYW1i._V1_.jpg"
              />
            </div>
            <p>
              <a style="color: black" href=""
                >Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
/* All Content */
* {
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
  
  /* News */
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
  
  /* Reviews */
  .reviews-img {
    float: left;
    object-fit: cover;
    width: 35em;
    height: 20em;
    margin: 1em;
  }
  
  .info {
    margin: 1em auto;
    text-align: center;
  }
  
  /* Recommendations */
  
  /* Sign-In */
  .sign-in form {
    border: 3px solid #f1f1f1;
  }
  
  input[type=text], input[type=password] {
    width: 100%;
    padding: 1em 1.5em;
    margin: 1em 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  
  button {
    background-color: #34568B;
    color: white;
    padding: 1em 1.5em;
    margin: 1em 0;
    width: 100%;
  }
  
  button:hover {
    opacity: 0.8;
  }
  
  .sign-in  {
    padding: 1em;
  }
  
  form .container {
    width: 50%;
    padding: 16px;
  }

</style>
