// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionTarget = document.querySelector("#missionTarget");
    missionTarget.innerHTML = 
                 `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${imageUrl}">`;
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return ("Is a Number");
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.querySelector('#pilotStatus');
    let copilotStatus = document.querySelector('#copilotStatus');
    let fuelStatus = document.querySelector('#fuelStatus');
    let cargoStatus = document.querySelector('#cargoStatus');
    let launchStatus = document.querySelector('#launchStatus');
    let faultyItems = list;
    let readyToLaunch = true;

    if (validateInput(pilot) === 'Empty' 
        || validateInput(copilot) === 'Empty' 
        || validateInput(fuelLevel) === 'Empty' 
        || validateInput(cargoLevel) === 'Empty') {
    readyToLaunch = false;
    alert('All fields are required!');
 }

 else if (validateInput(pilot) === 'Is a Number' 
        || validateInput(copilot) === 'Is a Number' 
        || validateInput(fuelLevel) === 'Not a Number' 
        || validateInput(cargoLevel) === 'Not a Number'){
    readyToLaunch = false; 
    alert("Make sure to enter valid information for each field!");
    
 } else {  
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
 
    if (fuelLevel >= 10000) { 
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    } else {
        faultyItems.style.visibility = 'visible'; 
        fuelStatus.innerHTML = "Fuel level too low for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red"; 
        readyToLaunch = false;
    }

    if (cargoLevel <= 10000) {
        cargoStatus.innerHTML = "Cargo mass low enough for launch"
    } else {
        faultyItems.style.visibility = 'visible';
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        readyToLaunch = false;
      }

    }

    if (readyToLaunch) {
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "green";
    }
};

 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
         });
 
     return planetsReturned;
 }

 function pickPlanet(planets) {
    let pickedPlanet = planets[Math.floor(Math.random()*planets.length)];
    return pickedPlanet;
}
 
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;