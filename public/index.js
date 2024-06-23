const NewsApi = require("newsapi");
const { mkdir, writeFile, createWriteStream } = require("node:fs/promises");
const { join } = require("node:path");

const API_KEY = "1f9d42f82a81468d9689e46edacab2fa";

const COUNTRIES = ["in", "us", "gb", "ru", "ch", "fr", ""];
// const COUNTRIES = ["in", "us", ""];

const CATEGORIES = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

async function getTopHeadlinesByCategoryCountry(category, country) {
  try {
    const folderPath = join(__dirname, "data", category);
    console.log(folderPath);
    await mkdir(folderPath, { recursive: true });

    const newsapi = new NewsApi(API_KEY);
    const response = await newsapi.v2.topHeadlines(
      country != ""
        ? { category, country, language: "en" }
        : { category, language: "en" }
    );

    await writeFile(
      `${folderPath}/${country ? country : "all"}.json`,
      JSON.stringify(response)
    );
  } catch (err) {
    console.log(err);
  }
}

CATEGORIES.forEach((category) => {
  COUNTRIES.forEach((country) => {
    getTopHeadlinesByCategoryCountry(category, country);
  });
});
