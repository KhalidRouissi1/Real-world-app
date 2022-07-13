


// ? progress bar 
let sec  = document.querySelector('.our-skills');
let spans = document.querySelectorAll('.theprogress span');

// ? progress bar 


//! Numbers moving 

let nums = document.querySelectorAll('.number');
let section = document.querySelector('.state');
let started = false;

function startCount(el){

    let goal = el.dataset.goal;
    console.log(goal)

    let counter = setInterval(()=>{
    el.textContent++;
    if(el.textContent == goal) {
        clearInterval(counter)
    }

    },2000 /goal);
}

//! Numbers moving 



window.onscroll = function(){
    if(window.scrollY >= section.offsetTop -100){
        if(!started){
            nums.forEach((num) =>startCount(num));

        }
        started=true;

    }

        
    if(window.scrollY>=sec.offsetTop){
        spans.forEach((span)=>{
            span.style.cssText = `width:${span.dataset.width};`;

        }
        )}
    
}


//Start events

let targetDate = new Date("Dec 31 ,2021 22:59:95").getTime();

let counter = setInterval(()=>{



let date = new Date().getTime();

let dateDifference = targetDate - date;

let days = Math.floor(dateDifference /(1000 *60*60*24));
let hours = Math.floor(dateDifference %(1000 *60*60*24) /(1000 *60 *60 ));
let minutes = Math.floor(dateDifference %(1000 *60*60) /(1000 *60 ));
let seconds = Math.floor(dateDifference %(1000 *60) /1000);


document.querySelector('.days').innerHTML =days >= 10 ? days: `0${days}`;
document.querySelector('.hours').innerHTML =hours >= 10 ? hours: `0${hours}`;
document.querySelector('.minutes').innerHTML =minutes >= 10 ? minutes: `0${minutes}`;
document.querySelector('.seconds').innerHTML = seconds >= 10 ? seconds: `0${seconds}`;


},1000)




//End    events
