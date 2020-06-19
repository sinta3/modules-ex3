function change(text) {
    let regex1 = /[a-z]{1,}/;
    let regex2 = /[A-Z]{1,}/;
    let div = document.getElementById("content");

    if (regex1.test(text) == true) {
        let p = document.createElement("p");
        div.appendChild(p);
        p.innerHTML = `${text.toUpperCase()}`;
    } else if (regex2.test(text) == true) {
        let p = document.createElement("p");
        div.appendChild(p);
        p.innerHTML = `${text.toLowerCase()}`;
    } else {
        console.log("false");
    }
}

export { change };
