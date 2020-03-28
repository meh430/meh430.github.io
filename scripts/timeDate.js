const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const getOrdinal = n => n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '')
const getDate = () => {
    const dateHead = document.getElementById("date")
    const currDate = new Date()
        //date
    let year = currDate.getFullYear()
    let month = months[currDate.getMonth()]
    let dayNum = currDate.getDate()
    let day = days[currDate.getDay()]
    let fullDate = `${day}, ${month} ${getOrdinal(dayNum)}, ${year}`
    dateHead.innerHTML = fullDate
}

const getTime = () => {
    const currDate = new Date()
    const timeHead = document.getElementById("time")
    const stateHead = document.getElementById("state")

    let hours = currDate.getHours()
    let minutes = currDate.getMinutes()
    if (minutes === 0) {
        minutes = '00'
    } else if (minutes < 10) {
        minutes = `0${minutes}`
    }

    let statement = 'hmm'
    console.log(hours)
    if (hours >= 0 && hours < 12) {
        statement = 'Good Morning'
    } else if (hours >= 12 && hours < 17) {
        statement = 'Good Afternoon'
    } else if (hours >= 17 && hours < 20) {
        statement = 'Good Evening'
    } else {
        statement = 'Good Night'
    }

    let suffix = 'hm'
    if (hours > 12) {
        suffix = 'P.M'
        hours -= 12
    } else if (hours === 12) {
        suffix = 'P.M'
    } else {
        if (hours === 0) {
            hours = 12
        }
        suffix = 'A.M'
    }
    let fullTime = `${hours}:${minutes} ${suffix}`
    console.log(fullTime)

    timeHead.innerHTML = fullTime
    stateHead.innerHTML = statement
}

setInterval(getTime, 2000);