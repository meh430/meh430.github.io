const getQuote = () => {
    const endpoint = 'https://quotes.rest/qod.json'
    fetch(endpoint).then(netResp => {
            if (netResp.ok) {
                return netResp.json()
            }
            throw new Error('Failed to get quote')
        }, error => console.log(error.message))
        .then(jsonResp => {
            console.log(jsonResp)
            displayQuote(jsonResp)
        })
}

const displayQuote = response => {
    const quoteHead = document.getElementById("quote")
    const authorHead = document.getElementById("author")
    let quoteObj = response
    quoteObj = quoteObj["contents"]
    let quoteArr = quoteObj["quotes"]
    if (!quoteArr.length) {
        quoteHead.innerHTML = 'No quote found!'
        return
    }
    quoteHead.innerHTML = quoteArr[0].quote
    authorHead.innerHTML = quoteArr[0].author
}