
let stats = document.querySelector('.stats')
let countElement = document.querySelectorAll('.statsElement h4 span')

let started = false;


function countEvent(el){
    let goal = el.dataset.goal
    let count = setInterval(()=>{
        el.textContent++
        if(el.textContent == goal){
            clearInterval(count)
        }
    }, 1000 / goal)
}

window.onscroll = function () {
    if(window.scrollY >= stats.offsetTop - 500){
       if(!started){
         countElement.forEach(el => countEvent(el))
       }
       started = true;
    }
}

