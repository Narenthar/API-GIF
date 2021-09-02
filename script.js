let gifURI =
  'https://api.giphy.com/v1/gifs/search?api_key=Cc0cDk9PZZMUNjMgvr0MssB098TJR3kN&limit=25&offset=0&rating=g&lang=en&q='

let screen = document.getElementById('display')
let gifarea = document.getElementById('img')
async function getgif() {
  try {
    let searchinput = document.getElementById('word')
    let searchword = searchinput.value
    apiuri = gifURI + searchword
    let gifAPI = await fetch(apiuri)
    let gifData = await gifAPI.json()
    let gifs = gifData.data
    gifarea.innerHTML = ''
    gifs.forEach((item) => {
      const col = document.createElement('div')
      col.setAttribute('class', 'col-sm-4')
      const obj = document.createElement('img')
      obj.src = item.images.fixed_height.url
      col.append(obj)
      gifarea.append(col)
    })
    if (gifs.length === 0) {
      screen.innerHTML = 'No GIF found for the word ' + searchword
    }

    gifURI =
      'https://api.giphy.com/v1/gifs/search?api_key=Cc0cDk9PZZMUNjMgvr0MssB098TJR3kN&limit=25&offset=0&rating=g&lang=en&q='
  } catch (error) {
    console.log(error)
  }
}

// {
//     const col = document.createElement('div')
//     col.setAttribute('class', 'col-sm-4')
//     const poster = document.createElement('img')
//     poster.src = results.image_url
//     const col1 = document.createElement('div')
//     col.setAttribute('class', 'col-sm-4')
//     const titlename = document.createElement('h3')
//     const animeType = document.createElement('p')
//     const animeStart = document.createElement('p')
//     const animeEnd = document.createElement('p')
//     const animeRating = document.createElement('p')
//     titlename.innerText = results.title
//     animeType.innerText = results.type
//     animeStart.innerText = results.start_date
//     animeEnd.innerText = results.end_date
//     animeRating.innerText = results.score
//     col.append(poster)
//     col1.append(titlename, animeType, animeStart, animeEnd, animeRating)
//     info.append(col, col1)
//   }
