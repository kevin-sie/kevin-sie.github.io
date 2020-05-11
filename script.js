function myFunction() {
    window.setTimeout(newFunction, 1000)
}

var nameChanged = false;
var navChanged = false;

function nameChange() {

    if (window.scrollY > 50 && !nameChanged) {
        document.getElementById("initials").style.opacity = 0;
        window.setTimeout(function() {
            // document.getElementById("initials").innerHTML = "KEVIN SIE";
            document.getElementById("initials").style.fontSize = "50px";
            document.getElementById("initials").style.opacity = 1;  
        }, 500);
        nameChanged = true;
    } 
    if (window.scrollY <= 50 && nameChanged) {
        document.getElementById("initials").style.opacity = 0;
        window.setTimeout(function() {
            // document.getElementById("initials").innerHTML = "KS";
            document.getElementById("initials").style.fontSize = "350px";
            document.getElementById("initials").style.opacity = 1;    
        }, 500);
        nameChanged = false;
    } 

    // if (window.scrollY > 700 && !navChanged) {
    //     window.setTimeout(function() { 
    //         document.getElementById("nav").style.opacity = 1;  
    //     }, 250);
    //     navChanged = true;
    // } 
    // if (window.scrollY <= 700 && navChanged) {
    //     window.setTimeout(function() {
    //         document.getElementById("nav").style.opacity = 0;    
    //     }, 250);
    //     navChanged = false;
    // } 
    
    
}

function newFunction() {
    var name = document.getElementById("fn");

    name.style.borderTop = "3px solid black";
    name.style.borderBottom = "3px solid black";
    name.style.borderLeft = "3px solid black"; 
    name.style.borderRight = "3px solid black"; 

    window.setTimeout(function() { 
        

        window.setTimeout(function() {
            name.style.opacity = 0;

            window.setTimeout(function() {
                name.style.marginLeft = "-37%";
            }, 500);
            window.setTimeout(function() {
                
                name.innerHTML = "KEVIN SIE";
                name.style.opacity = 1;

                window.setTimeout(function() {
                    name.style.transform = "translateY(-60%)";
                    name.style.fontSize = "50px";
                    name.style.padding = "5px 15px 5px 15px";    
                    name.style.marginLeft = "-5%";
                }, 1000); 
            }, 1000);
        }, 1000);
    }, 1000);
}


// window.addEventListener("scroll", nameChange);
window.addEventListener("load", myFunction);







// function nameReveal() {
//     document.getElementById("initials").className = "hidden";
//     document.getElementById("name").classList.toggle("active");
// }


// function name() {
//     document.getElementById("first-initial").classList.toggle("slide-left1");
//     document.getElementById("last-initial").classList.toggle("slide-left2");
//     document.getElementById("first-rest").classList.toggle("hidden-text");
//     document.getElementById("last-rest").classList.toggle("hidden-text");
//     // document.getElementById("last-rest").classList.toggle("slide-right");
// }

// window.addEventListener("load", myFunction);