function myFunction() {
    window.setTimeout(nameChange, 500)
}

var changed = false;

function nameChange() {

    if (window.scrollY > 50 && !changed) {
        document.getElementById("initials").style.opacity = 0;
        window.setTimeout(function() {
            document.getElementById("initials").innerHTML = "KEVIN SIE";
            document.getElementById("initials").style.fontSize = 200;
            document.getElementById("initials").style.opacity = 1;    
        }, 500);
        changed = true;
    } 
    if (window.scrollY <= 50 && changed) {
        document.getElementById("initials").style.opacity = 0;
        window.setTimeout(function() {
            document.getElementById("initials").innerHTML = "KS";
            document.getElementById("initials").style.opacity = 1;    
        }, 500);
        changed = false;
    } 
    
    
}

window.addEventListener("scroll", myFunction);







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