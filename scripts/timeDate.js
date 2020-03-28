const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const getOrdinal = n => n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '')
const getDateTime = () => {
    const timeHead = document.getElementById("time")
    const dateHead = document.getElementById("date")
    const stateHead = document.getElementById("state")
    const currDate = new Date()
        //date
    let year = currDate.getFullYear()
    let month = months[currDate.getMonth()]
    let dayNum = currDate.getDate()
    let day = days[currDate.getDay()]
    let fullDate = `${day}, ${month} ${getOrdinal(dayNum)}, ${year}`
        //time
    let hours = currDate.getHours()
    let minutes = currDate.getMinutes()
    if (minutes === 0) {
        minutes = '00'
    } else if (minutes > 10) {
        minutes = `0${minutes}`
    }

    let statement = 'hmm'
    if (hours >= 5 && hours <= 11) {
        statement = 'Good Morning'
    } else if (hours >= 12 && hours <= 17) {
        statement = 'Good Afternoon'
    } else {
        statement = 'Good Evening'
    }

    let suffix = 'hm'
    if (hours > 12) {
        suffix = 'P.M'
        hours -= 12
    } else {
        if (hours === 0) {
            hours = 12
        }
        suffix = 'A.M'
    }
    let fullTime = `${hours}:${minutes} ${suffix}`
    console.log(fullDate)

    dateHead.innerHTML = fullDate
    timeHead.innerHTML = fullTime
    stateHead.innerHTML = statement
}

setInterval(getDateTime, 1000);