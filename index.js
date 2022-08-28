
let count=0;
let saveEl = document.getElementById("save-el")
console.log(saveEl)

function increment(){
    count+=1;
    document.getElementById("count-el").innerText = count;
}

function decrement(){
    if (count<=0) document.getElementById("count-el").innerText = 0;
    else {
    count -= 1;
    document.getElementById("count-el").innerText = count;
    }
}

function save(){
    let countStr = count+ "   "
    saveEl.textContent +=  countStr
    document.getElementById("count-el").textContent = 0
    count = 0
}


