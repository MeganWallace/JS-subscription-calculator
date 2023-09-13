// Select elements and declare variables
var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic"; //default value for subscription dropdown
var subDuration = 1 //default value for duration dropdown

// Create change event listeners
  //event listener for subscription dropdown
subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value; //the target is the option element which holds the values for the subscription dropdown
  // console.log(subType);
});

  // event listener for duration dropdown
subDurationElement.addEventListener("change", function(e){
  subDuration = Number(e.target.value);
  // console.log(subDuration);
});