function myFunction() {
    window.setTimeout(nameChange, 100)
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

window.addEventListener("scroll", nameChange);








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