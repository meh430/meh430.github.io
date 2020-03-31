const apiKey = "5e7f67a8f96f9f072a0b0a98"
const getImages = () => {
    const endpoint = "https://reddtwalls-8176.restdb.io/rest/images"
    fetch(endpoint, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
                'apikey': apiKey
            }
        }).then(response => {
            if (response.ok) {
                return response.json()
            }

            throw new Error('Failed to get image')
        }, netError => console.log(netError.message))
        .then(jsonResponse => setTimeout(() => setImage(jsonResponse), 3000))
}

const setImage = json => {
    const bodyBack = document.getElementById("wrapper").style

    let images = ''
    console.log(json)
    if (!json.length) {
        console.log('No response for images')
        return
    }

    for (let i = 0; i < json.length; i++) {
        let currImage = json[i]
        images += currImage['image'] + " "
    }
    let imageUrls = images.trim().split(" ")

    console.log(imageUrls)
    const randomIndex = Math.floor(Math.random() * imageUrls.length)
    const chosenUrl = (imageUrls[randomIndex].includes('https')) ? imageUrls[randomIndex] : imageUrls[randomIndex].replace('http', 'https')
    console.log(chosenUrl)
    bodyBack.backgroundImage = `url(${chosenUrl})`
}