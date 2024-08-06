const thoughtsButton = document.getElementById("thoughtsButton");
const thoughtsExpanded = document.getElementById("thoughtsExpanded");

const ideasButton = document.getElementById("ideasButton");
const ideasExpanded = document.getElementById("ideasExpanded");

const otherButton = document.getElementById("otherButton");
const otherExpanded = document.getElementById("otherExpanded");

thoughtsButton.addEventListener("click", thoughtClick);
ideasButton.addEventListener("click", ideaClick);
otherButton.addEventListener("click", otherClick);

thoughtsExpanded.style.display = "none";
ideasExpanded.style.display = "none";
otherExpanded.style.display = "none";



function thoughtClick(){
    if(thoughtsExpanded.style.display === "none"){
        closeBoxes();
        thoughtsExpanded.style.display = "block"; 
    }
    else{
        thoughtsExpanded.style.display = "none"; 
    }
}

function ideaClick(){
    if(ideasExpanded.style.display === "none"){
        closeBoxes();
        ideasExpanded.style.display = "block"; 
    }
    else{
        ideasExpanded.style.display = "none"; 
    }
}
function otherClick(){
    if(otherExpanded.style.display === "none"){
        closeBoxes();
        otherExpanded.style.display = "block"; 
    }
    else{
        otherExpanded.style.display = "none"; 
    }
}

function closeBoxes(){
    thoughtsExpanded.style.display = "none"; 
    ideasExpanded.style.display = "none";
    otherExpanded.style.display = "none"; 
}
