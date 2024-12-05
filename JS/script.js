//stabiliamo l'endpoint e il container in cui verranno inserite le card
const endpoint = "https://jsonplaceholder.typicode.com/photos?_limit=6";

const container = document.getElementById("loaderCont");

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

axios.get(endpoint).then((response) => {
  container.innerHTML = "";
  response.data.forEach((polaroid) => printCard(polaroid));
});

//denomino la funzione ''printCard'' e come parametro le passo ''card''

function printCard(polaroid) {
  //la nostra polaroid va ora destrutturata
  const { albumId, id, title, url, thumbnailUrl } = polaroid;

  //ora possiamo inserirle

  container.innerHTML += `<div class="col-lg-4 col-md-6 col-sm-12 mt-4" id="colonna">
        <div class="puntina">
            <img src="./img/pin.svg" alt="Puntina">
        </div> 
        <div class="polaroid-card ">
        <div class="image">
        <img src="${url}" alt="Placeholder">
        </div>
        <p>${title}</p>
        </div>
        </div>`;
}


//dopo aver aggiunto la card, dobbiamo aggiungere inoltre una funzione che permetta di aprire e chiudere l'overlay.

function showOverlay(){
  const overlay = document.getElementById('overlay');

  //selezioniamo un'immagine casuale

  const randomPic = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/1200px-Sushi_platter.jpg';

  //ora va impostata nell'html
  const randomImage = document.getElementById('randomImage');
  randomImage.src = randomPic;

  //e ora possiamo mostrare l'overlay
  overlay.classList.remove('d-none')
 }

//creiamo ora una funzione per chiudere l'overlay

function closeOverlay(){
  const overlay = document.getElementById('overlay');
  overlay.classList.add('d-none')
}

//event listener per la chiusura dell'overlay

document.getElementById('closeOverlay').addEventListener('click', closeOverlay);

//a questo punto, va modificata la funzione per stampare le polaroid, in modo tale che se ne verrà cliccata una si potrà vedere l'overlay