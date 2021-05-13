function getRandom(size){
    return Math.round(Math.random() * size);
}

let btn = document.querySelector("#btn")
btn.addEventListener("mouseover", event => {
    
    let wRd = getRandom(100);
    let hRd = getRandom(100);
    event.target.style.left = wRd + "%";
    event.target.style.top = hRd + "%";
    console.log(event.target)
})
