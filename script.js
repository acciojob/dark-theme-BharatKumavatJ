//your code here

let screen = document.querySelector("#app");
let swap = document.querySelector("#swap");

let day = true;
Mainclass = ["day", "night"];
dayClass = ["button_day", "button_night"];



swap.addEventListener("click", (e) => {

    if(day){
        swap.classList.remove(swap.classList[0]);
        swap.classList.add("button_night");
        screen.classList.remove(screen.classList[0]);
        screen.classList.add("night");
        day = !day;

    
    }
    else{
        swap.classList.remove(swap.classList[0]);
        swap.classList.add("button_day");
        screen.classList.remove(screen.classList[0]);
        screen.classList.add("day");
        day = !day;

    }
})
