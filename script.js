function newFunction() {
    var name = document.getElementById("fn");
    var about = document.getElementById("about");

    window.setTimeout(function() {
        name.style.opacity = 0;

        window.setTimeout(function() {
            name.style.marginLeft = "-37%";
        }, 500);
        window.setTimeout(function() {
            
            name.innerHTML = "KEVIN SIE";
            name.style.opacity = 1;

            window.setTimeout(function() {
                name.style.transform = "translateY(-50%)";
                name.style.fontSize = "30px";
                name.style.padding = "5px 12px 5px 15px";    
                name.style.marginLeft = "-4%";
            }, 1000); 

            window.setTimeout(function() {
                about.style.opacity = 1;
            }, 1500)
        }, 1000);
    }, 1000);
}

function myFunction() {
    window.setTimeout(newFunction, 1000)
}

window.addEventListener("load", myFunction);
