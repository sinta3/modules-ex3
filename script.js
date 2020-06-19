import { change } from "./function.js";

let button = document.getElementById("button");
let div = document.getElementById("content");

button.addEventListener("click", () => {
    let text = document.getElementById("word").value;
    change(text);
});
