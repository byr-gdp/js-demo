var buttons = document.querySelectorAll("button");
var output = document.querySelector("#output");

for(let i=0; i<buttons.length; i++) {
	buttons[i].addEventListener("click", function() {
		// console.log(i);
		output.innerText = buttons[i].innerText;
	})
}