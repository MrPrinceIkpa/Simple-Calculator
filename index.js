var buttons = document.getElementsByClassName("calc-no");
var screen = document.querySelector("#calc-output");
var cancel = document.querySelector(".calc-canc");

var exp = undefined;
var liner = undefined;
var prev = undefined;

function outputCalc() {
    if (exp == undefined) {
		screen.innerHTML = "0";
    }
    else {
		screen.innerHTML = isNaN(eval(exp)) || eval(exp) == "Infinity" || eval(exp) == "-Infinity" ? "error" : eval(exp);
	if (screen.innerHTML == "error") {
	    exp = undefined;
	}
	else {
	    exp = screen.innerHTML;
	}
    }
    liner = "end";
}
function resetCalc() {
    screen.innerHTML = "";
    exp = undefined;
    liner = undefined;
    prev = undefined;    
}
function isdig(val) {
    if (val != "+" && val != "-" && val != "x" && val != "/"){
		return true;
    }
    else {
		return false;
    }
}

cancel.addEventListener("click", resetCalc);

for (let button of buttons) {
    button.addEventListener("click", function() {
	content = button.innerHTML;

	if (liner == "end") {
	    if (isdig(content)) {
			screen.innerHTML = "";
	    }
	}
	if (!isdig(prev)) {
	    if (!isdig(content)) {
			screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length - 2);
			exp = exp.substring(0, exp.length - 1);
	    }
	}
	if (content == "=") {
	    outputCalc();
	}	
	else if (content == "+" || content == "-" || content == "/") {
	    if (exp == undefined) {
			screen.innerHTML = "";
			exp = "0" + content;
			screen.innerHTML = "0 " + content + " ";
	    }
	    else {
			exp = exp + content;
			screen.innerHTML = screen.innerHTML + " " + content + " ";
	    }
	}
	else if (content == "x") {
            if (exp == undefined) {
				screen.innerHTML = "";		
				exp = "0" + "*";
				screen.innerHTML = "0 " + content + " ";
	    	}
	    	else {
				exp = exp + "*";
				screen.innerHTML = screen.innerHTML + " " + content + " ";    		
	    	}
	}
	else {
	    if (exp == undefined) {
			screen.innerHTML = "";		
			exp = "0" + content;
	    }
	    else {
			exp = exp + content;
	    }	    
	    screen.innerHTML = screen.innerHTML + content;
	}
	prev = content;	
	liner = undefined;
    })
}