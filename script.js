import countries from './countries.js';

let timer = 0;

async function getData() {
  const endpoint = 'https://thevirustracker.com/free-api?countryTotal='
  const dropdown = document.querySelector('select');
  const country = String(dropdown.value).slice(-2)
  console.log(country)
  console.log(`getting data for ${country}`);
  const cases = await fetch(endpoint+country)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data
    });
  const titleElement = document.getElementById('header');
  const deathsTextElement = document.getElementById('deaths');
  const sickTextElement = document.getElementById('sick');
  const recoveriesTextElement = document.getElementById('recovered');

  titleElement.innerText = `Corona in ${cases.countrydata[0].info.title} (${cases.countrydata[0].info.code})`;
  console.log(cases.countrydata[0])
  deathsTextElement.innerText = cases.countrydata[0].total_deaths;
  sickTextElement.innerText = cases.countrydata[0].total_active_cases;
  recoveriesTextElement.innerText = cases.countrydata[0].total_recovered;
  const interval = (24*60*60*1000)/(cases.countrydata[0].total_new_cases_today)
  console.log(Math.round(interval/1000/60) + ' minuten')
  clearInterval(timer);
  timer = setInterval(() => {
  playSick();
  getData();
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
  const loader = document.createElement('img');
  loader.src='/images/loader.png'
  loader.classList.add('loader');
  
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
  console.log(dropdown);
  for (const country in countries) {

    const countryTitle = countries[country].countryTitle;
    const countryCode = countries[country].statisticsCode;
    const optionElement = document.createElement('option');

    optionElement.innerText = countryTitle;
    if (countries[country].statisticsCode == 'NL') {
      optionElement.selected="selected"
    }
    optionElement.value = countryCode;
    dropdown.appendChild(optionElement);
  }
}
createDropdown();
getData();

const dropdown = document.querySelector('select');
dropdown.addEventListener('change', function() {
  removeOldData();
  createLoader();
  getData();
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