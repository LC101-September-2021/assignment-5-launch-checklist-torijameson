//const { formSubmission } = require("./scriptHelper");


// Write your JavaScript code here!
window.addEventListener("load", function() {

   let listedPlanets;
   let listedPlanetsResponse=myFetch(); 
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
       }).then(function () {
       console.log(listedPlanets);
    
    
    let selectedPlanet = pickPlanet(listedPlanets); console.log(selectedPlanet.image)
    addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image)
    
    })
let list = document.getElementById("faultyItems")
    list.style.visibility="hidden";
    let form = document.querySelector("form")


window.addEventListener("submit", function(event) {
    event.preventDefault();

    let pilotInput=document.querySelector("input[name=pilotName]")
    let pilot=pilotInput.value

    let copilotInput=document.querySelector("input[name=copilotName]")
    let copilot=copilotInput.value

    let fuelLevelInput=document.querySelector("input[name=fuelLevel]")
    let fuelLevel=fuelLevelInput.value

    let cargoLevelInput=document.querySelector("input[name=cargoLevel")
    let cargoLevel=cargoLevelInput.value

    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)

});   
});