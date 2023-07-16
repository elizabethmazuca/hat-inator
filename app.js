
const API_KEY = //key (do not post bozo)

const submitIcon = document.querySelector("#submit-icon") //like an event listener
const inputElement = document.querySelector("input") //grabs user input

const getImages = () => {
    const options = {
        mathod: "POST",
        headers: {
            "Authorization": 'Bearer ${API_KEY}',
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            "prompt": inputElement.value, //this might be where you add "wearing a hat"
            "n":1, // one image generated
            "size": "1024x1024"
        })
    }

    try {
        fetch('https://api.openai.com/v1/images/generations', options)
    } catch (error) {
        console.error(error)
    }
}