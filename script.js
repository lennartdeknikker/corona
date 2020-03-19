const countries = ["China","Italy","Iran","Spain","Germany","USA","France","S. Korea","Switzerland","UK","Netherlands","Austria","Belgium","Norway","Sweden","Denmark","Japan","Malaysia","Portugal","Canada","Diamond Princess","Australia","Czechia","Brazil","Israel","Qatar","Greece","Finland","Pakistan","Ireland","Singapore","Luxembourg","Iceland","Poland","Indonesia","Slovenia","Romania","Thailand","Bahrain","Estonia","Saudi Arabia","Chile","Philippines","Egypt","Hong Kong","India","Turkey","Ecuador","Iraq","Peru","South Africa","Lebanon","Kuwait","Russia","San Marino","Armenia","Mexico","UAE","Panama","Taiwan","Slovakia","Croatia","Colombia","Argentina","Serbia","Bulgaria","Latvia","Algeria","Uruguay","Vietnam","Hungary","Brunei","Faeroe Islands","Costa Rica","Albania","Sri Lanka","Morocco","Cyprus","Jordan","Andorra","Malta","Belarus","Palestine","Bosnia and Herzegovina","Kazakhstan","North Macedonia","Georgia","Oman","Tunisia","Cambodia","Moldova","Lithuania","Senegal","Venezuela","Dominican Republic","Azerbaijan","Burkina Faso","Guadeloupe","New Zealand","Liechtenstein","Martinique","Uzbekistan","Afghanistan","Bangladesh","Macao","Ukraine","Jamaica","Bolivia","French Guiana","DRC","Réunion","Cameroon","Maldives","Guam","Honduras","Cuba","Paraguay","Rwanda","Monaco","Ivory Coast","Ghana","Trinidad and Tobago","Guatemala","Nigeria","Gibraltar","Montenegro","Channel Islands","Kenya","Ethiopia","French Polynesia","Mongolia","Puerto Rico","Seychelles","Tanzania","Guyana","Aruba","Equatorial Guinea","Curaçao","Bahamas","Gabon","Kyrgyzstan","Mauritius","Mayotte","St. Barth","Saint Martin","U.S. Virgin Islands","Sudan","Barbados","Benin","Bermuda","Greenland","Liberia","Mauritania","Namibia","New Caledonia","Saint Lucia","Zambia","Cayman Islands","Nepal","Antigua and Barbuda","Bhutan","CAR","Congo","Djibouti","El Salvador","Fiji","Gambia","Guinea","Vatican City","Montserrat","Nicaragua","St. Vincent Grenadines","Sint Maarten","Somalia","Suriname","Eswatini","Togo"].sort();


const Settings = {
  endpoint: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=',
  headers: {
    "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
    "x-rapidapi-key": "1c2f9445f2msh7d0813c62a2f058p18c647jsn65331c70d7ad"
  },
  variables: {
    prefix: 'latest_stat_by_country',
    totalCases: 'total_cases',
    totalDeaths: 'total_deaths',
    activeCases: 'active_cases',
    totalRecovered: 'total_recovered',
    newCases: 'new_cases',
    newDeaths: 'new_deaths'
  }
}

let sickIntervalInstance;
let deathIntervalInstance;

function updateData(cases) {
  const titleElement = document.getElementById('header');
  const deathsTextElement = document.getElementById('deaths');
  const sickTextElement = document.getElementById('sick');
  const recoveriesTextElement = document.getElementById('recovered');
  titleElement.innerText = `${cases[Settings.variables.prefix][0][Settings.variables.totalCases]}`;
  deathsTextElement.innerText = cases[Settings.variables.prefix][0].total_deaths || 0;
  sickTextElement.innerText = cases[Settings.variables.prefix][0].active_cases || 0;
  recoveriesTextElement.innerText = cases[Settings.variables.prefix][0].total_recovered || 0;
}

async function startUpdateInterval(interval) {
  const cases = await apiCall()
  updateData(cases);
  setTimeout(function() {
    startUpdateInterval(interval)
  }, interval)
}

async function apiCall() {

  const dropdown = document.querySelector('select');
  const country = String(dropdown.value)
  console.log(`getting data for ${country}`);
  const cases = await fetch(`${Settings.endpoint}${country}`, {
    "method": "GET",
    "headers": Settings.headers
  })
  .then(response => {
    return response.json()
  })
  .catch(err => {
    console.log(err);
  });
  return cases; 
}

function setSoundIntervals(cases) {
  clearInterval(sickIntervalInstance);
  clearInterval(deathIntervalInstance);
  const sickInterval = (24*60*60*1000)/(cases[Settings.variables.prefix][0].new_cases || 2)
  const deathInterval = (24*60*60*1000)/(cases[Settings.variables.prefix][0].new_deaths || 2)
  
  if (cases[Settings.variables.prefix][0].new_deaths > 1) {
    
    playDeathAtInterval(deathInterval);    
  }
  if (cases[Settings.variables.prefix][0].new_cases > 1) {
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
  for (const country of countries) {

    const optionElement = document.createElement('option');

    optionElement.innerText = country;
    if (country === 'Netherlands') {
      optionElement.selected="selected"
    }
    optionElement.value = country;
    dropdown.appendChild(optionElement);
  }
}


const dropdown = document.querySelector('select');
dropdown.addEventListener('change', async function() {
  removeOldData();
  createLoader();
  
  const cases = await apiCall()
  updateData(cases);
  setSoundIntervals(cases);
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
    setSoundIntervals(cases);
    startUpdateInterval(60000 * 10);
  }

  startUp();