//stabiliamo l'endpoint e il container in cui verranno inserite le card
const endpoint = 'https://jsonplaceholder.typicode.com/photos?_limit=6'

const container = document.getElementById('loaderCont')

//ora dobbiamo creare una funzione che ci permetta di caricare delle card nell'html assieme alle rispettive foto al loro interno

//per prima cosa stabiliamo la chiamata con axios

axios.get(endpoint)
  .then(response => {
    container.innerHTML = ''
    response.data.forEach(polaroid => printCard(polaroid))
  })


//denomino la funzione ''printCard'' e come parametro le passo ''card''
function printCard(polaroid){

    //dopo averla visionata in thunder client, la devo destrutturare
    const {albumId, id, title, url, thumbnailUrl} = polaroid;
    
    //ora possiamo inserirle


}

