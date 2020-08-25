const vielasPoga = document.getElementById('vielas-poga');
const aprikojumsRindas = document.getElementsByClassName('aprikojums');

const aprikojumsPoga = document.getElementById('aprikojums-poga');
const vielaRindas = document.getElementsByClassName('viela');

const vissPoga = document.getElementById('viss-poga');

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