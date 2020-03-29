const base = 'https://google.com/search?q='
const performSearch = (event) => {
    if (event.keyCode == 13 || event.which == 13) {
        let query = document.getElementById("searchBar").value
        let target = base
        query.split(" ").forEach((word, index, array) => {
            if (array.length - 1 === index) {
                target += word
            } else {
                target += `${word}%20`
            }
        })

        window.open(target, "_self")
    }
}