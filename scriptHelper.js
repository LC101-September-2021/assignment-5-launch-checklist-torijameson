// Write your helper functions here!
require('isomorphic-fetch');
​
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

      
​
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
​
//Jason, please  check formSubmission 12/04
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotStatus = document.querySelector("pilotStatus");
   let copilotStatus = document.querySelector("copilotStatus");
   let fuel = document.querySelector("fuelLevelStatus");
   let cargo= document.querySelector("cargoLevelStatus");
​
   /* if (validateInput(pilot or copilot or fuel or cargo) === "Empty") {   <--- side not, call each variable by itself and use || logic 
          alert all field needed
   } else if ( same validateInput for all four but checking if pilot or copilot is a number and if fuel or cargo is not a number)
          alert format correct 
   } else {
         pilot is ok
         copilot is ok
         window shouldn't be hidden   <---- this these are right in the else
​
​
      
​
​
   }
   */
   if ((validateInput(pilot)==="Empty")||(validateInput(copilot)==="Empty")||(validateInput(fuelLevel)==="Empty")||(validateInput(cargoLevel)==="Empty")){
       alert ("All fields are needed.  Please try  again!");
   } else if ((validateInput(pilot)==="Is a Number")||(validateInput(copilot)==="Is a Number")||(validateInput(fuelLevel)==="Not a Number")||(validateInput(cargoLevel)==="Not a Number")){
       alert ("Invalid types. Please check your data and try again.");
    } else {
        pilotStatus.innerHTML=`Pilot ${pilot} is ready for launch.`;
        copilotStatus.innerHTML=`Co-Pilot ${copilot} is ready for launch.`;
        list.style.visibility="visible" //leave this here 12/04
        
        if (fuelLevel < 10000 && cargoLevel <= 10000){
            alert ("Fuel  level too low for launch")
            fuel.innerHTML=`Fuel Level is too low for launch`;
            launchStatus.innerHTML="Shuttle not ready for launch!";
            launchStatus.color.innerHTML ="red";
            cargo.innerHTML='Cargo mass is low enough for launch!';
        } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
            alert ("Cargo Mass too high for Launch")
            launchStatus.innerHTML="Shuttle not ready for launch!";
            launchStatus.color.innerHTML ="red";
            fuel.innerHTML = `Fuel level is high enough for launch!`;
            cargo.innerHTML=`Cargo mass is too heavy for launch!`;
        } else if (fuelLevel < 10000 && cargoLevel > 10000) {
            alert ("Fuel too low for launch  and Cargo  Mass too high for launch")
            fuel.innerHTML=`Fuel Level is too low for launch`;
            launchStatus.innerHTML="Shuttle not ready for launch!";
            launchStatus.color.innerHTML ="red";
            cargo.innerHTML=`Cargo mass is too heavy for launch!`;
        } else {
            launchStatus.innerHTML="Shuttle ready for launch!";
            launchStatus.color.innerHTML ="green";
            fuel.innerHTML = `Fuel level is high enough for launch!`;
            cargo.innerHTML='Cargo mass is low enough for launch!';
        }
}        
async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch( "https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
            });
    return planetsReturned;
}  //Tori leave this alone 11/27
​
//pickPlanet takes one argument (list of planets) and then use math.random to select a planet from a list - index from 0 to 5
function pickPlanet(planets) {
    planetSelector= Math.floor(Math.random() * planets.length);  //planets.length is to avoid hard coding 6
    return planets[planetSelector]
} // Tori leave ths alone 11/27 
​
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

// Write your helper functions here!
// require('isomorphic-fetch');

// function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
//         let div= document.getElementById("missionTarget");
//         div.innerHtml= `<h2>Mission Destination</h2>
//          <ol>
//          <li>Name: ${name}</li>
//          <li>Diameter:${diameter}</li>
//          <li>Star: ${star}</li>
//          <li> Distance from Earth: ${distance}</li>
//          <li>Number of Moons: ${moons}</li>
//         </ol>
//              <img src = "${image}" >`;
//             }
      

// function validateInput(testInput) { //problem: how is this being used to check text in text spots and numbers in numbers spots? 
//     let testNumber=Number(testInput)
//     if (testInput==="") {
//        return "Empty";
//     }
//     else if(!isNaN(testNumber)) {
//         return "Is a Number";
//    } 
//     else if(isNaN(testNumber)) {
//         return "Not a Number"
//    }
// // Tori, leave this one alone. 11/27
// }

// //Jason, please  check formSubmission 12/04
// function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
//    let pilotStatus = document.querySelector("pilotStatus");
//    let copilotStatus = document.querySelector("copilotStatus");
//    let fuel = document.querySelector("fuelLevelStatus");
//    let cargo= document.querySelector("cargoLevelStatus");

//    if (validateInput(pilot)= "") {
//         alert("Pilot Name required!");
//    } else if (validateInput(copilot)="") {
//         alert ("Co-Pilot Name required!");
//    } else if (validateInput(fuelLevel)="") {
//         alert("Fuel Level Required!");
//    } else if (validateInput(cargoLevel)='') {
//         alert ("Cargo Level Required!");
//    } else if (validateInput(fuelLevel).isNan=="true") {
//         alert ("Fuel Level must be a number!");
//    } else if (validateInput(cargoLevel).isNan=="true") {
//         alert ("Cargo Level must be a number!");
//    } else if (toString(validateInput(pilot))=="false"){
//         alert ("Pilot name must be a text string!");
//     } else if (toString(validateInput(copilot))=="false"){
//         alert ("Copilot name must be a text string!")
//     } else {
//         pilotStatus.innerHTML=`1. Pilot ${pilot} is ready for launch.`;
//         copilotStatus.innerHTML=`2. Co-Pilot ${copilot} is ready for launch.`;
//         list.style.visibility="visible" //leave this here 12/04
//         //fuel level loop-->
//         if (fuelLevel <10000){
//             alert ("Too little fuel for Launch! Fuel must be at least 10,000 units")
//             fuel.innerHTML=`3. Fuel Level is too low for launch`;
//             } else{ 
//             fuel.innerHTML = `3. Fuel level is high enough for launch!`;
//         }; 
//         //Cargo mass loop-->
//         if (cargoLevel >10000) {
//             alert ("Too Much Mass for Launch! Reduce mass to less than 10,000 kg")
//             cargo.innerHTML=`4. Cargo mass is too heavy for launch!`;
//         }else {
//             cargo.innerHTML='4. Cargo mass is low enough for launch!';
//         };
//         // Color Change & flight ready loop -->
//         if (fuelLevel<10000 || cargoLevel>10000) { //a && b produces same result so is elemintated here in logic 
//             launchStatus.innerHTML="Shuttle not ready for launch!";
//             launchStatus.color.innerHTML ="red";
//         } else { // elimination says fuelLevel and cargoLevel are in range
//             launchStatus.innerHTML="Shuttle ready for launch!";
//             launchStatus.color.innerHTML ="green";
//         }
//     }
// }        
// async function myFetch() {
//     let planetsReturned;
//     planetsReturned = await fetch( "https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
//         return response.json()
//             });
//     return planetsReturned;
// }  //Tori leave this alone 11/27

// //pickPlanet takes one argument (list of planets) and then use math.random to select a planet from a list - index from 0 to 5
// function pickPlanet(planets) {
//     planetSelector= Math.floor(Math.random() * planets.length);  //planets.length is to avoid hard coding 6
//     return planets[planetSelector]
// } // Tori leave ths alone 11/27 

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
