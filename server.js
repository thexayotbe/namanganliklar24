const express = require("express");
const path = require("path");
const app = express();
const {
  navbarData,
  covid_data,
  main_card_data,
  last_news,
  popular_news,
} = require("./utils/index");

const { navbarMoney, navbarLinks } = navbarData;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", {
    navbarMoney,
    navbarLinks,
    covid_data,
    main_card_data,
    last_news,
    popular_news,
  });
});

app.listen(8080, () => {
  console.log("Server listening on http://localhost:8080");
});
