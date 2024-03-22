let energie = 10
let uitgerust = 10
const smiley = document.querySelector('#smiley')
const energieblokjes = document.querySelectorAll('#energie span')
const uitgerustblokjes = document.querySelectorAll('#uitgerust span')
const etenKnop = document.querySelector('#eten')
const slapenKnop = document.querySelector('#slapen')
const resetKnop = document.querySelector('#reset')


function updateEnergie () {
    for (i=0; i<10; i++) {
        if (i <= energie-1) {
            energieblokjes[i].classList.remove('hidden')
        } else {
            energieblokjes[i].classList.add('hidden')
        }
    }
}

function updateUitgerust () {
    for (i=0; i<10; i++) {
        if (i <= uitgerust-1) {
            uitgerustblokjes[i].classList.remove('hidden')
        } else {
            uitgerustblokjes[i].classList.add('hidden')
        }
    }
}

function updateSmiley () {
    if ((energie < 3) || (uitgerust < 3)) {
        smiley.src = "img/sad.png"
    } else if ((energie < 6) || (uitgerust < 6)) {
        smiley.src = "img/meh.png"
    } else {
        smiley.src= "img/happy.png"
    }

}

function mainLoop() {
    if (energie > 0 ) {
        energie--
    }
    if (uitgerust > 0 ) {
        uitgerust--
    }
    console.log("energie: " + energie + " uitgerust: " + uitgerust)
    updateEnergie()
    updateUitgerust()
    updateSmiley()
}

function eten () {
    if (energie < 10) {
        energie++
    }
    console.log("Lekker! energie: " + energie )
    updateEnergie()
    updateSmiley()
}

function slapen () {
    uitgerust += 5
    if (uitgerust > 10) {
        uitgerust = 10
    }
    console.log("ZZZ! uitgerust: " + uitgerust )
    updateUitgerust()
    updateSmiley()
    etenKnop.disabled = true; 
    slapenKnop.disabled = true;
    setTimeout(wakker, 3000)
}

function wakker () {
    etenKnop.disabled = false; 
    slapenKnop.disabled = false;
}

function reset() {
    location.reload();
}

setInterval(mainLoop, 2000)
etenKnop.addEventListener('click', eten)
slapenKnop.addEventListener('click', slapen)
resetKnop.addEventListener('click', reset)
