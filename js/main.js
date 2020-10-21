const vielasPoga = document.getElementById('vielas-poga');
const aprikojumsRindas = document.getElementsByClassName('aprikojums');

const aprikojumsPoga = document.getElementById('aprikojums-poga');
const vielaRindas = document.getElementsByClassName('viela');

const vissPoga = document.getElementById('viss-poga');

async function iegutVielasNoApi() {
    let datiNoApi = await fetch('https://pytonc.eu.pythonanywhere.com/api/v1/vielas')
    let datiJson = await datiNoApi.json();
    return datiJson;
}


async function raditDatus() {
    let vielasJson = await iegutVielasNoApi();
    // let apgerbiJson = await iegutApgerbiNoApi();

    // let produktiKopa = vielasJson.concat(inventarsJson);

    let txt= "";

    for (let i = 0; i < vielasJson.length; i++) {
        console.log(vielasJson[i]['nosaukums']);
        txt += "<tr><td>" + vielasJson[i]['id'] + "</td>";
        txt += "<td>" + vielasJson[i]['nosaukums'] + "</td>";
        txt += "<td>" + vielasJson[i]['tips'] + "</td>";
        txt += "<td>" + vielasJson[i]['apakstips'] + "</td>";
        txt += "<td>" + vielasJson[i]['skaits'] + "</td>";
        txt += "<td>" + vielasJson[i]['mervienibas'] + "</td>";
        txt += "<td>" + vielasJson[i]['komentari'] + "</td></tr>";
    }
    document.getElementById("dati").innerHTML = txt;

    //for (let i = 0; i < produktiKopa.length; i++) {
    //    console.log(produktiKopa[i]['title']);
    //}
    
    
    

}

raditDatus();



let vielas = [
    {
        "apakstips": "s\u0101ls",
        "daudzums": 100.0,
        "id": 2,
        "komentari": "",
        "mervienibas": "g",
        "nosaukums": "Kalcija karbon\u0101ts CaCO3",
        "skaits": 25,
        "tips": "rea\u0123ents"
    },
    {
        "apakstips": "hidroks\u012bds",
        "daudzums": 50.0,
        "id": 3,
        "komentari": "\u0160\u0137\u012bdums izvedots un sapild\u012bts 2020.09.23",
        "mervienibas": "ml",
        "nosaukums": "NaOH \u0161\u0137\u012bdums 10%",
        "skaits": 45,
        "tips": "rea\u0123ents"
    },
    {
        "apakstips": "hidroks\u012bds",
        "daudzums": 50.0,
        "id": 4,
        "komentari": "\u0160\u0137\u012bdums izvedots un sapild\u012bts 2020.09.23",
        "mervienibas": "ml",
        "nosaukums": "NaOH \u0161\u0137\u012bdums 10%",
        "skaits": 45,
        "tips": "rea\u0123ents"
    },
    {
        "apakstips": "test1",
        "daudzums": 50.0,
        "id": 5,
        "komentari": "\u0160\u0137\u012bdums izvedots un sapild\u012bts 2020.09.23",
        "mervienibas": "ml",
        "nosaukums": "NaOH \u0161\u0137\u012bdums 10%",
        "skaits": 45,
        "tips": "rea\u0123ents"
    },
    {
        "apakstips": "hidroks\u012bds",
        "daudzums": 50.0,
        "id": 6,
        "komentari": "\u0160\u0137\u012bdums izvedots un sapild\u012bts 2020.09.23",
        "mervienibas": "ml",
        "nosaukums": "NaOH \u0161\u0137\u012bdums 10%",
        "skaits": 45,
        "tips": "rea\u0123ents"
    }
]


let inventars = [
    {
        "apakstips": "meh\u0101niskie svari",
        "id": 1,
        "komentari": "",
        "nosaukums": "Meh\u0101niskie svari QWS",
        "skaits": 5,
        "tips": "svari"
    },
    {
        "apakstips": "elektroniskie svari",
        "id": 2,
        "komentari": "Darbojas uz 3 AAA tipa baterij\u0101m",
        "nosaukums": "Elektroniskie svari ES-25",
        "skaits": 15,
        "tips": "svari"
    },
    {
        "apakstips": "pl\u012bti\u0146a",
        "id": 3,
        "komentari": "Str\u0101vas vada garums 1m",
        "nosaukums": "Elektrisk\u0101 pl\u012bt\u012b\u0146a",
        "skaits": 8,
        "tips": "sild\u012bt\u0101js"
    },
    {
        "apakstips": "trauki",
        "id": 4,
        "komentari": "Kolbas \u012bpa\u0161i liel\u0101m viel\u0101m",
        "nosaukums": "Milz\u012bg\u0101s kolbas",
        "skaits": 100,
        "tips": "trauks"
    }
]



vielasPoga.addEventListener('click', function () {
    vissPoga.classList.remove('selected');
    vielasPoga.classList.toggle('selected');

    for (let i = 0; i < aprikojumsRindas.length; i++) {
        // if (aprikojumsRindas[i].classList.contains('slepts') ) {
        //     aprikojumsRindas[i].classList.remove('slepts');
        //     vielasPoga.classList.remove('selected');
        // } else {
        //     aprikojumsRindas[i].classList.add('slepts');
        aprikojumsRindas[i].classList.toggle('slepts'); // same shit as above, bet vienā rindā
    }
});

aprikojumsPoga.addEventListener('click', function () {
    vissPoga.classList.remove('selected');
    aprikojumsPoga.classList.toggle('selected');

    for (let i = 0; i < vielaRindas.length; i++) {
        vielaRindas[i].classList.toggle('slepts');
    }
});

vissPoga.addEventListener('click', function () {
    vissPoga.classList.add('selected');
    aprikojumsPoga.classList.remove('selected');
    vielasPoga.classList.remove('selected');

    for (let i = 0; i < vielaRindas.length; i++) {
        vielaRindas[i].classList.remove('slepts');
    }

    for (let i = 0; i < aprikojumsRindas.length; i++) {

        aprikojumsRindas[i].classList.remove('slepts');
    }
});