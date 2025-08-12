let box = document.querySelector(".container").children

function getRandomColor(){
    let value1 = Math.ceil(0 + Math.random()*255);
    let value2 = Math.ceil(0 + Math.random()*255);
    let value3 = Math.ceil(0 + Math.random()*255);
    return `rgb(${value1}, ${value2}, ${value3})`
}
Array.from(box).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})

