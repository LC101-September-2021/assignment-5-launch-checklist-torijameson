// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
        // let div = document.getElementById("missionTarget");
        let div = document.getElementById("missionTarget");
        console.log(name, diameter, star, distance, moons, image);
        div.innerHTML = `
        <h2>Mission Destination</h2>
         <ol>
         <li>Name: ${name}</li>
         <li>Diameter:${diameter}</li>
         <li>Star: ${star}</li>
         <li> Distance from Earth: ${distance}</li>
         <li>Number of Moons: ${moons}</li>
        </ol>
             <img src = "${image}" >
             `;
}

function validateInput(testInput) { //problem: how is this being used to check text in text spots and numbers in numbers spots? 
    let testNumber=Number(testInput)
    if (testInput==="") {
       return "Empty";
    }
    else if(!isNaN(testNumber)) {
        return "Is a Number";
   } 
    else if(isNaN(testNumber)) {
        return "Not a Number"
   }
// Tori, leave this one alone. 11/27
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelLevel = document.getElementById("fuelLevel");
   let cargoLevel= document.getElementById("cargoLevel");
   //let launchStatus=document.getElementById("launchStatus")

   if ((validateInput(pilot)==="Empty")||(validateInput(copilot)==="Empty")||(validateInput(fuelLevel)==="Empty")||(validateInput(cargoLevel)==="Empty")){
       alert ("All fields are needed.  Please try  again!");
   } else if ((validateInput(pilot)==="Is a Number")||(validateInput(copilot)==="Is a Number")||(validateInput(fuelLevel)==="Not a Number")||(validateInput(cargoLevel)==="Not a Number")){
       alert ("Invalid types. Please check your data and try again.");
    } else {
        pilotStatus.innerHTML=`Pilot ${pilot} is ready for launch.`;
        copilotStatus.innerHTML=`Co-Pilot ${copilot} is ready for launch.`;
        list.style.visibility="visible" //leave this here 12/04
        let launchStatus=document.getElementById("launchStatus")

        if (fuelLevel < 10000 && cargoLevel <= 10000){
            //alert ("Fuel  level too low for launch")
            fuelLevel.innerHTML=`Fuel Level is too low for launch`;
            launchStatus.innerHTML="Shuttle not ready for launch!";
            launchStatus.style.color="red";
            cargoLevel.innerHTML='Cargo mass is low enough for launch!';
        } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
            //alert ("Cargo Mass too high for Launch")
            launchStatus.innerHTML="Shuttle not ready for launch!";
            launchStatus.style.color ="red";
            fuelLevel.innerHTML = `Fuel level is high enough for launch!`;
            cargoLevel.innerHTML=`Cargo mass is too heavy for launch!`;
        } else if (fuelLevel < 10000 && cargoLevel > 10000) {
            //alert ("Fuel too low for launch  and Cargo  Mass too high for launch")
            fuelLevel.innerHTML=`Fuel Level is too low for launch`;
            launchStatus.innerHTML="Shuttle not ready for launch!";
            launchStatus.style.color="red";
            cargoLevel.innerHTML=`Cargo mass is too heavy for launch!`;
        } else {
            launchStatus.innerHTML="Shuttle ready for launch!";
            list.style.color ="green";
            fuelLevel.innerHTML = `Fuel level is high enough for launch!`;
            cargoLevel.innerHTML='Cargo mass is low enough for launch!';
        }
}     
}


async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch( "https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
            });
    return planetsReturned;
}  //Tori leave this alone 11/27

//pickPlanet takes one argument (list of planets) and then use math.random to select a planet from a list - index from 0 to 5
function pickPlanet(planets) {
    planetSelector= Math.floor(Math.random() * planets.length);  //planets.length is to avoid hard coding 6
    return planets[planetSelector]
} // Tori leave ths alone 11/27 

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

