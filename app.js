const input = document.querySelector("input");
const ul = document.querySelector("ul");

input.onkeydown = function(e) {
    if(e.key == "Enter") {
        console.log(input.value);
        ul.innerHTML += "<li>" + input.value + "</li>";
        input.value = "";
    }
}