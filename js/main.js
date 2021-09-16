// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue(
    {
        el: '#root',
        data: {
            message: "Benvenuto Vue.js!!!",
            img: "img/vue.jpeg",
            altText: "Immagine di Vue.js"
        }
    }
);
