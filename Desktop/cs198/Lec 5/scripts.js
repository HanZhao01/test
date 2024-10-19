
async function setup() {
    const response = await fetch()
    const data = await response.json()
    const breeds = Object.keys(data.message)
    console.log(breeds)
    for (const breed of breeds) {
        const optionEl = document.createElement("option")
        optionEl.textContent = breed
        optionEl.value = breedselectEl.appendChild(optionEl)
    }
}

setup()

selectEl.addEventListener("change", async () => {
    const selectedBreed = selectEl.value
    const response = await fetch("https://dog.ceo/api/breeds/image/random")
    const data = await response.json()
    const imageUrl = data.message
    imageEl.src = imageUrl
    console.log(imageEl.src)
})