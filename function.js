function change(text) {
    let regex1 = /[a-z]{1,}/;
    let div = document.getElementById("content");

    if (regex1.test(text) == true) {
        let p = document.createElement("p");
        div.appendChild(p);
        p.innerHTML = `${text.toUpperCase()}`;
    } else {
        let p = document.createElement("p");
        div.appendChild(p);
        p.innerHTML = `${text.toLowerCase()}`;
    }
}
export { change };
