import countries from './countries.js';

let sickIntervalInstance;
let deathIntervalInstance;

function updateData(cases) {
  console.log(cases);
  const titleElement = document.getElementById('header');
  const deathsTextElement = document.getElementById('deaths');
  const sickTextElement = document.getElementById('sick');
  const recoveriesTextElement = document.getElementById('recovered');

  // titleElement.innerText = `${cases.countrydata[0].total_cases}`;
  // deathsTextElement.innerText = cases.countrydata[0].total_deaths;
  // sickTextElement.innerText = cases.countrydata[0].total_active_cases;
  // recoveriesTextElement.innerText = cases.countrydata[0].total_recovered;
  titleElement.innerText = `${cases.latest_stat_by_country[0].total_cases}`;
  deathsTextElement.innerText = cases.latest_stat_by_country[0].total_deaths;
  sickTextElement.innerText = cases.latest_stat_by_country[0].active_cases;
  recoveriesTextElement.innerText = cases.latest_stat_by_country[0].total_recovered;
}

async function startUpdateInterval(interval) {
  const cases = await apiCall()
  updateData(cases);
  setTimeout(function() {
    startUpdateInterval(interval)
  }, interval)
}

// async function apiCall() {
//   const endpoint = 'https://thevirustracker.com/free-api?countryTotal='
//   const dropdown = document.querySelector('select');
//   const country = String(dropdown.value).slice(-2)
//   console.log(`getting data for ${country}`);
//   const cases = await fetch(endpoint+country)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       return data
//     });
//   return cases; 
// }

async function apiCall() {

  const endpoint = 'https://thevirustracker.com/free-api?countryTotal='
  const dropdown = document.querySelector('select');
  const country = String(dropdown.value)
  console.log(`getting data for ${country}`);
  const cases = await fetch(`https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=${country}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
      "x-rapidapi-key": "1c2f9445f2msh7d0813c62a2f058p18c647jsn65331c70d7ad"
    }
  })
  .then(response => {
    return response.json()
  })
  .catch(err => {
    console.log(err);
  });
  console.log(cases);
  return cases; 
}

function setSoundIntervals(cases) {
  clearInterval(sickIntervalInstance);
  clearInterval(deathIntervalInstance);
  // const sickInterval = (24*60*60*1000)/(cases.countrydata[0].total_new_cases_today)
  const sickInterval = (24*60*60*1000)/(cases.latest_stat_by_country[0].new_cases || 2)
  const deathInterval = (24*60*60*1000)/(cases.countrydata[0].total_new_deaths_today || 2)
  
  if (cases.countrydata[0].total_new_deaths_today > 1) {
    
    playDeathAtInterval(deathInterval);    
  }
  if (cases.countrydata[0].total_new_cases_today > 1) {
    playSickAtInterval(sickInterval);    
  }
}

function playSickAtInterval(interval) {
  
  console.log('every ' + Math.round(interval/1000/60) + ' minutes someone gets sick')
  
  sickIntervalInstance = setInterval(() => {
    document.getElementById('sick-icon').classList.remove('one-more')
    setTimeout(() => {
      document.getElementById('sick-icon').classList.add('one-more')
    playSick();
    }, 1000);
}, interval);
}

function playDeathAtInterval(interval) {
  console.log('every ' + Math.round(interval/1000/60) + ' minutes someone dies')
  deathIntervalInstance = setInterval(() => {
    document.getElementById('death-icon').classList.remove('one-more')
    setTimeout(() => {
      document.getElementById('death-icon').classList.add('one-more')
    playDeath();
    }, 1000);
}, interval);
}


function removeOldData() {
  const deathsTextElement = document.getElementById('deaths');
  const sickTextElement = document.getElementById('sick');
  const recoveriesTextElement = document.getElementById('recovered');
  deathsTextElement.innerText = '';
  sickTextElement.innerText = '';
  recoveriesTextElement.innerText = '';
}

function createLoader() {
  
  const deathsTextElement = document.getElementById('deaths');
  const sickTextElement = document.getElementById('sick');
  const recoveriesTextElement = document.getElementById('recovered');

  function addLoader(element) {
    const loader = document.createElement('img');
    loader.src='/images/loader.svg'
    loader.classList.add('loader');
    element.appendChild(loader)
  }

  addLoader(deathsTextElement);
  addLoader(sickTextElement);
  addLoader(recoveriesTextElement);
}

function createDropdown() {
  const dropdown = document.querySelector('select');
  for (const country in countries) {

    const countryTitle = countries[country].countryTitle;
    const countryCode = countries[country].countryTitle;
    const optionElement = document.createElement('option');

    optionElement.innerText = countryTitle;
    if (countries[country].statisticsCode == 'NL') {
      optionElement.selected="selected"
    }
    optionElement.value = countryCode;
    dropdown.appendChild(optionElement);
  }
}


const dropdown = document.querySelector('select');
dropdown.addEventListener('change', async function() {
  removeOldData();
  createLoader();
  
  const cases = await apiCall()
  updateData(cases);
  // setSoundIntervals(cases);
})


const deathIcon = document.getElementById('death-icon')
const sickIcon = document.getElementById('sick-icon')
const recoverIcon = document.getElementById('recover-icon')

  deathIcon.addEventListener('click', function() {
    playDeath()
  })
  sickIcon.addEventListener('click', function() {
    playSick()
  })
  recoverIcon.addEventListener('click', function() {
    playYay()
  })

function playDeath() {
    var audio = document.getElementById("dead");
    audio.play();
  }
function playSick() {
    var audio = document.getElementById("cougher");
    audio.play();
  }
function playYay() {
    var audio = document.getElementById("yay");
    audio.play();
  }


  async function startUp() {
    createLoader();
    createDropdown();
    const cases = await apiCall()
    // setSoundIntervals(cases);
    startUpdateInterval(60000 * 10);
  }

  startUp();