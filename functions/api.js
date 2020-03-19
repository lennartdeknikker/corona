import fetch from "node-fetch";

const Settings = {
  endpoint: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=',
  headers: {
    "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
    "x-rapidapi-key": "1c2f9445f2msh7d0813c62a2f058p18c647jsn65331c70d7ad"
  },
}

exports.handler = async (event, context) => {
  const country = event.body.country
  return fetch(Settings.endpoint+country, { headers: Settings.headers })
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: data
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};