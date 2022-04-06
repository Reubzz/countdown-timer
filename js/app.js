const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secsEl = document.getElementById('secs')
const futureDateEl = document.getElementById('futureDate').value


function submitClick() {
    window.location.reload()
}

function countdown(){
    const currentDate = new Date(); // returns in miliseconds
    const futureDate = new Date(futureDateEl); // miliseconds 
    
    // console.log(futureDate - currentDate);
    const rawMs = (futureDate - currentDate) / 1000;

    const seconds = Math.floor(rawMs % 60)
    const mins = Math.floor(rawMs % 3600 / 60)
    const hours = Math.floor(rawMs / 3600 % 24)
    const days = Math.floor(rawMs / 3600 / 24 )

    daysEl.innerHTML = days
    hoursEl.innerHTML = hours
    minsEl.innerHTML = mins
    secsEl.innerHTML = seconds

    
    // console.log(days, hours, mins, seconds)
}

countdown()

setInterval(countdown, 1000)