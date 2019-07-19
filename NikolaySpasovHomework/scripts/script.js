function login() {
	var name = document.getElementById("name").value;
	var gender;
	if (document.getElementById("m").checked) {
		gender = "Mr. ";
	} else if (document.getElementById("f").checked) {
		gender = "Mrs. ";
	} else {
		gender = "";
	}
	var x = document.getElementById("inputs");
	x.style.display = "none";
	document.getElementById("user").innerHTML = "Welcome " + gender + name;
}