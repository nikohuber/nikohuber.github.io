const textBox = document.getElementById("content");
const titleText = document.getElementById("title");

textBox.style.maxWidth = titleText.clientWidth + "px";

let offsets = titleText.getBoundingClientRect();


if(window.innerWidth < 700){
    offsets = titleText.getBoundingClientRect();

    textBox.style.maxWidth = titleText.clientWidth + "px";
    console.log(offsets.left);
    textBox.style.paddingLeft = offsets.left + 28 + "px";
    textBox.style.paddingRight = 25 + "px";
}

window.onresize = temp;

function temp(){

    if(window.innerWidth < 700){
        offsets = titleText.getBoundingClientRect();

        textBox.style.maxWidth = titleText.clientWidth + "px";
        console.log(offsets.left);
        textBox.style.paddingLeft = offsets.left + 28 + "px";
        textBox.style.paddingRight = 25 + "px";
    }
}