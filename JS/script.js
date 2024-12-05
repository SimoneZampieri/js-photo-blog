//stabiliamo l'endpoint e il container in cui verranno inserite le card
const endpoint = 'https://jsonplaceholder.typicode.com/photos?_limit=6'

const container = document.getElementById('loaderCont')

//dopo aver visualizzato l'api con thunder client, questo è il risultato:

// [
//     {
//       "albumId": 1,
//       "id": 1,
//       "title": "accusamus beatae ad facilis cum similique qui sunt",
//       "url": "https://via.placeholder.com/600/92c952",
//       "thumbnailUrl": "https://via.placeholder.com/150/92c952"
//     },
//     {
//       "albumId": 1,
//       "id": 2,
//       "title": "reprehenderit est deserunt velit ipsam",
//       "url": "https://via.placeholder.com/600/771796",
//       "thumbnailUrl": "https://via.placeholder.com/150/771796"
//     },
//     {
//       "albumId": 1,
//       "id": 3,
//       "title": "officia porro iure quia iusto qui ipsa ut modi",
//       "url": "https://via.placeholder.com/600/24f355",
//       "thumbnailUrl": "https://via.placeholder.com/150/24f355"
//     },
//     {
//       "albumId": 1,
//       "id": 4,
//       "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
//       "url": "https://via.placeholder.com/600/d32776",
//       "thumbnailUrl": "https://via.placeholder.com/150/d32776"
//     },
//     {
//       "albumId": 1,
//       "id": 5,
//       "title": "natus nisi omnis corporis facere molestiae rerum in",
//       "url": "https://via.placeholder.com/600/f66b97",
//       "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
//     },
//     {
//       "albumId": 1,
//       "id": 6,
//       "title": "accusamus ea aliquid et amet sequi nemo",
//       "url": "https://via.placeholder.com/600/56a8c2",
//       "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
//     }
//   ]

//ora dobbiamo creare una funzione che ci permetta di caricare delle card nell'html assieme alle rispettive foto al loro interno

//per prima cosa stabiliamo la chiamata con axios

axios.get(endpoint)
  .then(response => {
    container.innerHTML = ''
    response.data.forEach(polaroid => printCard(polaroid))
  })


//denomino la funzione ''printCard'' e come parametro le passo ''card''
function printCard(polaroid){

    //la nostra polaroid va ora destrutturata
    const {albumId, id, title, url, thumbnailUrl} = polaroid;
    
    //ora possiamo inserirle

    container.innerHTML += `<div class="polaroid-card">
                        <div class="image"><img src="${url}" alt="Placeholder"></div>
                        <p>${title}</p>
                    </div>`
}

