const https = require("https");
const API_ENDPOINT = "https://icanhazdadjoke.com/";

exports.handler = async (event, context) => {
  return https.get(API_ENDPOINT, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
      body += data;
    });
    res.on("end", () => {
      body = JSON.parse(body);
      return body;
    });
  });
};


