const button = document.querySelector('.btn-primary')
const text = document.querySelector('.card-text')

button.addEventListener('click', () => {
    joke()
})

    async function joke(){
    try{
        const res = await axios.get('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' }});
        text.innerHTML = res.data.joke
    } catch (e) {
        console.logo("error", e)
      }
    }
