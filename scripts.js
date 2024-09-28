// This code is included for you to make the range slider display its value
// Find the code on MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range

const value = document.querySelector("#value");
const input = document.querySelector("#score-range");
value.textContent = input.value;
input.addEventListener("input", (event) => {
    value.textContent = event.target.value;
});

// this code updates the year in the footer for copyright to the current year
(function(){
	let now = new Date();
	let span = document.querySelector("footer span");
	span.innerHTML = now.getFullYear();
})();