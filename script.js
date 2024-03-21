// Write your JavaScript code here!

const { formSubmission, myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() { ///given in the repo

    let listedPlanets;///given in the repo
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch(); ////listedPlanetsResponse equal to the value returned when calling myFetch()
    listedPlanetsResponse.then(function (result) {///given in the repo
        listedPlanets = result;///given in the repo
        console.log(listedPlanets);///given in the repo
    }).then(function () {///given in the repo
        console.log(listedPlanets);///given in the repo
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let pickedPlanet = pickPlanet(listedPlanets);
        let { name, diameter, star, distance, moons, image } = pickedPlanet;

        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance,  selectedPlanet.moons, selectedPlanet.image);
    });
    
  //add an event listener for button
  //formSubmission
  let form = document.querySelector('form');
  
  form.addEventListener("submit", function(event) {

      event.preventDefault();
      let list = document.querySelector('#faultyItems');
      let pilot = document.querySelector("input[name=pilotName]").value; 
      let copilot = document.querySelector("input[name=copilotName]").value; 
      let fuelLevel = document.querySelector("input[name=fuelLevel]").value; 
      let cargoLevel = document.querySelector("input[name=cargoMass]").value;
      
      formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
  });        
 });