let monthArr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
]
let weekArr = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]

let myDate = document.querySelector('.myDate')
let deadline = document.querySelector('.deadline')
let items = document.querySelectorAll('.countdown li .title')
let dayTxt = document.querySelectorAll('.countdown li .time-txt')

let futureDate = new Date(2022, 08, 17, 23, 59, 59)

let years = futureDate.getFullYear()
let month = futureDate.getMonth()
    month = monthArr[month]
let week = futureDate.getDay()
    week = weekArr[week]
let date = futureDate.getDate()
let hours = futureDate.getHours()
let minutes = futureDate.getMinutes()
let seconds = futureDate.getSeconds()

myDate.textContent = `${week} ${date} ${month} ${years} ${hours}:${minutes}:${seconds}`

let futureTime = futureDate.getTime();

function getTheTime() {
    let today = new Date().getTime()
    let t = futureTime - today

    let oneDay = 24*60*60*1000
    let oneHour = 60*60*1000
    let oneMin = 60*1000

    let dayS  = (Math.floor(t / oneDay) > 9) ? Math.floor(t / oneDay) : '0'+Math.floor(t / oneDay)
    
    let hourS = (Math.floor((t % oneDay) / oneHour) > 9) ? Math.floor((t % oneDay) / oneHour) : '0'+Math.floor((t % oneDay) / oneHour)

    let minuteS  = (Math.floor((t % oneHour) / oneMin) > 9) ? Math.floor((t % oneHour) / oneMin) : '0'+Math.floor((t % oneHour) / oneMin)

    let secondS  = (Math.floor((t % oneMin) / 1000) > 9) ? Math.floor((t % oneMin) / 1000) : '0'+Math.floor((t % oneMin) / 1000)

    let values = [dayS, hourS, minuteS, secondS]

    items.forEach(function(item, index) {
        item.innerHTML = values[index]
    })

    let valuesTxt = ['Days', 'Hours', 'Minutes', 'Seconds']
    
    dayTxt.forEach(function(item, index) {
        item.innerHTML = valuesTxt[index]
    })
    setTimeout(getTheTime, 1000)
    
}
getTheTime()