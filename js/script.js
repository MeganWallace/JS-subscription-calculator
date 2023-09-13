// Select elements and declare variables
var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic"; //default value for subscription dropdown
var subDuration = 1 //default value for duration dropdown

// Create change event listeners
//event listener for subscription dropdown
subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value; //the target is the option element which holds the values for the dropdown
  // console.log(subType);
  updateSubscriptionDiv(); //tells the browser to update the message each time the selection changes
});

// event listener for duration dropdown
subDurationElement.addEventListener("change", function (e) {
  subDuration = Number(e.target.value);
  // console.log(subDuration);
  updateSubscriptionDiv(); //tells the browser to update the message each time the selection changes
});

// Use a function to calculate the cost
var updateSubscriptionDiv = function () {
  var monthlyCost = 5; //for basic plan (default)
  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }
  var total = subDuration * monthlyCost;
  result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`;
};