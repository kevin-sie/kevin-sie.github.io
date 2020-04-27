function myFunction() {
    window.setTimeout(name, 1000)
}

function nameReveal() {
    document.getElementById("initials").className = "hidden";
    document.getElementById("name").classList.toggle("active");
}


function name() {
    document.getElementById("first-initial").classList.toggle("slide-left1");
    document.getElementById("last-initial").classList.toggle("slide-left2");
    document.getElementById("first-rest").classList.toggle("hidden-text");
    document.getElementById("last-rest").classList.toggle("hidden-text");
    // document.getElementById("last-rest").classList.toggle("slide-right");
}


window.addEventListener("load", myFunction);