// Example of fetching data from an API using Node.js http module.
const http = require("http");

function fetchData(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let body = "";
      res.on("data", (data) => {
        body += data;
      });
      res.on("end", () => {
        resolve(body);
      });
    });
  });
}

async function main() {
  const url = "Your Sample API Endpoint here.";
  const data = await fetchData(url);
  console.log("Data fetched\n", data);
}

main();
