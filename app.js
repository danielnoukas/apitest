let request = new XMLHttpRequest()

request.open('GET', 'https://ghibliapi.herokuapp.com/films',true)

request.onload = function () {
    let data =JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        const body = document.getElementById('main')
        data.forEach(movie => {
            console.log(movie.title)

            const moviep = document.createElement('div')
            moviep.innerHTML = movie.title
            body.append(moviep)
        })

    }   else {
        console.log(error)
    }
}
request.send()